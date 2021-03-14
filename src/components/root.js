import React from "react"
import InformationBox from "./information-box.js"
import { Link } from "react-router-dom"


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
     <InformationBox title="Getting started with messaging" desc="Checklist for set up and configuration to get your messaging program running" icon="/images/clock.svg" id="1" />
     <InformationBox title="Ge messaging" desc="Checklist for set up and configuration to get your messaging program running" icon="/images/bank.svg" id="2" />
     <InformationBox title="Getting started with messaging" desc="Checklist for set up and configuration to get your messaging program running" icon="/images/clock.svg" id="3" />
     <InformationBox title="Getting started with messaging" desc="Checklist for set up and configuration to get your messaging program running" icon="/images/clock.svg" id="4" />
     </section>
    </>
  )
}
export default Root
