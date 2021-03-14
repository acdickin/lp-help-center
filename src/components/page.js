import React, { useEffect, useState } from "react"
import ContentHeader from "./content-header"
import NotFound from "./not-found"
import { deliveryClient } from "../config";

const Page = ({ match, history, language, lookupTable }) => {
  // Uses the react state hook
  const [article, setArticle] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false)
  // Gets an article by its URL slug

  //byItemId
  const getArticle = (id, language) => {

    if (id !== undefined) {
      return deliveryClient
        .items('product_overview')
        .languageParameter(language)
        .equalsFilter("system.id", id)
        .toObservable()
        .subscribe((response) => {
          setArticle(response.items[0]);
          setLoading(false);
        });
    }
  };
  useEffect(() => {
    // this may need to move to app so we can route to not-found page
    if (match?.params?.slug) {
      const basicSlug = match.params.slug.replace('.html', '')
      const id = lookupTable.get(basicSlug)
      if (id) {
        const subscription = getArticle(id, language);
        return () => subscription.unsubscribe();
      } else {
        // id not in loopup table. go to 404
        setLoading(false)
        setNotFound(true)
      }
    }
  }, [match]);
  if (isLoading) {
    return <div className="flex align-center justify-center">Loading...</div>;
  } else if (notFound) {
    return (<NotFound />)
  } else if (article && article !== {}) {
    return (
      <div className="flex">
        <div>
          <ContentHeader
            title={article.title}
            why_the_product_is_useful={article.why_the_product_is_useful}
            post_tags={article.post_tags}
          />
          <div dangerouslySetInnerHTML={{ __html: article.body.value }} />
        </div>
      </div>
    )
  } else {
    return (<div>Error</div>)
  }
}

export default Page
