import React, { useEffect, useState } from "react"
import ContentHeader from "./content-header"
import { deliveryClient } from "../config";

const Page = ({ match, history }) => {
  // Uses the react state hook
  const [article, setArticle] = useState({});
  const [isLoading, setLoading] = useState(true);
  // Gets an article by its URL slug
  const getArticle = (slug) => {
    return deliveryClient
      .items('product_overview')
      .equalsFilter("elements.url", slug)
      .toObservable()
      .subscribe((response) => {
        setArticle(response.items[0]);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (match?.params?.slug) {
      let theSlug = match.params.slug.replace('.html', '')
      console.log(theSlug)
      const subscription = getArticle(theSlug);
      return () => subscription.unsubscribe();
    }
  }, [match]);

  console.log("isloading", isLoading)
  if (isLoading) {
    console.log("show loading")
    return <div>Loading...</div>;
  } else if (article && article !== {}) {
    console.log("dont show loading")
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
