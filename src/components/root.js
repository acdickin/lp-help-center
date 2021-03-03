import React from "react"


const Root = () => {
  return (
    <>
      <section className="hero flex justify-between section-space">
        <div className="flex column justify-center">
          <h4>Our new Help Center</h4>
          <h1>Kontent CMS POC</h1>
        </div>
        <div>
          <img
            alt="heroimg"
            src="https://d1hryyr5hiabsc.cloudfront.net/web2020/img/resources/book-resource-illo-rev.svg"
          />
        </div>
      </section>
      <div className="divider"></div>
      <section className="boxes-block gap flex justify-between section-space flex-wrap">
        <div className="box flex column justify-center">
          <h3>Getting started with messaging</h3>
          <p>
            Checklist for set up and configuration to get your messaging program
            running
        </p>
        </div>
        <div className="box flex column justify-center">
          <h3>Getting started with messaging</h3>
          <p>
            Checklist for set up and configuration to get your messaging program
            running
        </p>
        </div>
        <div className="box flex column justify-center">
          <h3>Getting started with messaging</h3>
          <p>
            Checklist for set up and configuration to get your messaging program
            running
        </p>
        </div>
        <div className="box flex column justify-center">
          <h3>Getting started with messaging</h3>
          <p>
            Checklist for set up and configuration to get your messaging program
            running
        </p>
        </div>
      </section>
    </>
  )
}
export default Root
