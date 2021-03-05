import React, { useEffect, useState } from "react"
import ContentHeader from "./content-header"
import { deliveryClient } from "../config";

const Page = ({ match, history, language }) => {
  // Uses the react state hook
  const [article, setArticle] = useState({});
  const [isLoading, setLoading] = useState(true);
  // Gets an article by its URL slug
  const getArticle = (slug, language) => {
    return deliveryClient
      .items('product_overview')
      .languageParameter(language)
      .equalsFilter("elements.url", slug)
      .toObservable()
      .subscribe((response) => {
        setArticle(response.items[0]);
        setLoading(false);
      });
  };
  console.log("current lang", language)
  useEffect(() => {
    if (match?.params?.slug) {
      const basicSlug = match.params.slug.replace('.html', '')
      const subscription = getArticle(basicSlug, language);
      return () => subscription.unsubscribe();
    }
  }, [match]);
  if (isLoading) {
    return <div>Loading...</div>;
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
