import React from "react"

const ContentHeader = ({ title, why_the_product_is_useful, post_tags }) => {

  // const createBreadrumb = (breadCrumbs) => {
  //   if (breadCrumbs) {
  //     let last = breadCrumbs.length - 1
  //     return breadCrumbs.map((crumb, index) => {
  //       let title = crumb
  //       if (index !== last) {
  //         title += " > "
  //       }
  //       return <span key={crumb + index} className="breadcrumb-item" >{title}</span>
  //     })
  //   }
  // }
  const createTags = (tags) => {
    if (tags.value) {
      return tags.value.map(tag => {
        return <div data-testid={tag.name} key={"Tag." + tag.name}>{tag.name}</div >
      })
    }
  }
  return (
    <>
      <h1 className="text-4xl" data-testid="title" id="maintitle"> {title.value} </h1>
      <div id="useful" data-testid="useful" dangerouslySetInnerHTML={{ __html: why_the_product_is_useful.value }} />
      <div data-testid="tags" className="indicators">
        {createTags(post_tags)}
      </div>

    </>
  )
}

export default ContentHeader