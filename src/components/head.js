import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga";
import { hotjar } from "react-hotjar";

require("dotenv").config({
  path: `../.env`,
})

const Head = () => {
  useEffect(() => {
    if (process.env.REACT_APP_PROJECT === "KNOWLEDGE") {
      hotjar.initialize(process.env.REACT_APP_HOTJAR_KNOWLEDGE, process.env.REACT_APP_HOTJAR_SNIPPET_VERSION);
      ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_KNOWLEDGE);
    } else {
      hotjar.initialize(process.env.REACT_APP_HOTJAR_DEV, process.env.REACT_APP_HOTJAR_SNIPPET_VERSION);
      ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_DEV);
    }
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [])
  return (
    <Helmet>
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
    </Helmet>
  )
}
export default Head;