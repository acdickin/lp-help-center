import React from "react" //, { useEffect, useState }
import ContentHeader from "./content-header"
import NotFound from "./not-found"
import { useQuery } from '@apollo/client'
import { PAGE_QUERY } from '../queries/page'

const Page = ({ match, history, language, lookupTable }) => {


  const basicSlug = match.params.slug.replace('.html', '')
  const id = lookupTable.get(basicSlug) || null;
  const { loading, error, data } = useQuery(PAGE_QUERY, { variables: { id: id, languageCodeName: language } })


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
