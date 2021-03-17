import React, { useEffect, useState } from "react"
import ContentHeader from "./content-header"
import NotFound from "./not-found"
import { useQuery } from '@apollo/client'
import { PAGE_QUERY } from '../queries/page'

const Page = ({ match, history, language, lookupTable }) => {

  //byItemId
  // const getArticle = (id, language) => {

  //   if (id !== undefined) {
  //     return data
  //   }
  // };

  const basicSlug = match.params.slug.replace('.html', '')
  const id = lookupTable.get(basicSlug) || null;
  const { loading, error, data } = useQuery(PAGE_QUERY, { variables: { id: id, languageCodeName: language } })


  // useEffect(() => {
  //   // this may need to move to app so we can route to not-found page
  //   if (match?.params?.slug) {
  //     const basicSlug = match.params.slug.replace('.html', '')
  //     const id = lookupTable.get(basicSlug)
  //     if (id) {
  //       const subscription = getArticle(id, language);
  //       return () => subscription.unsubscribe();
  //     } else {
  //       // id not in loopup table. go to 404
  //       setLoading(false)
  //       setNotFound(true)
  //     }
  //   }
  // }, [match]);


  if (loading) {
    return <div className="flex align-center justify-center">Loading...</div>;
  } else if (error) {
    return (<NotFound />)
  } else if (data && data !== {}) {
    return (
      <div className="flex">
        <div>
          <ContentHeader
            title={data.title}
            why_the_product_is_useful={data.why_the_product_is_useful}
            post_tags={data.post_tags}
          />
          <div dangerouslySetInnerHTML={{ __html: data.body.value }} />
        </div>
      </div>
    )
  } else {
    return (<div>Error</div>)
  }
}

export default Page
