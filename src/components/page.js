import React from "react"
import ContentHeader from "./content-header"
import NotFound from "./not-found"
import { useQuery } from '@apollo/client'
import { PAGE_QUERY } from '../queries/page'

const Page = ({ match, history, language, lookupTable }) => {

  const basicSlug = match.params.slug.replace('.html', '')
  const id = lookupTable.size > 0 ? lookupTable.get(basicSlug) : null;

  if (language && id) {
    return (<PageRender lang={language} id={id} />)
  }
  else {
    return null
  }
}

// Can't call useQuery in conditional so created a sub component
const PageRender = ({ lang, id }) => {
  const { loading, error, data } = useQuery(PAGE_QUERY, { variables: { id: id, languageCodeName: lang } })
  if (loading) {
    return <div className="flex align-center justify-center">Loading...</div>;
  } else if (error) {
    return (<NotFound />)
  } else if (data) {
    const { title, why_the_product_is_useful, post_tags, body } = data.getPage;
    return (
      <div className="flex">
        <div>
          <ContentHeader
            title={title}
            why_the_product_is_useful={why_the_product_is_useful}
            post_tags={post_tags}
          />
          <div dangerouslySetInnerHTML={{ __html: body.value }} />
        </div>
      </div>
    )
  } else {
    return (<div>Error</div>)
  }
}
export default Page
