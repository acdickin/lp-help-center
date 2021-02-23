import React from "react"
import ContentHeader from "./content-header"

const Page = props => {
  const {
    body,
    title,
    why_the_product_is_useful,
    post_tags,
  } = props.pageContext.elements
  const { breadCrumbs } = props.pageContext

  return (
    <div className="flex">
      <div>
        <ContentHeader
          breadCrumbs={breadCrumbs}
          title={title}
          why_the_product_is_useful={why_the_product_is_useful}
          post_tags={post_tags}
        />

        <div dangerouslySetInnerHTML={{ __html: body.value }} />
      </div>
    </div>
  )
}

export default Page
