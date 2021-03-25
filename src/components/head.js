import React from "react";
import { Helmet } from "react-helmet";
require("dotenv").config({
  path: `../.env`,
})
const Head = () => {
  if (process.env.REACT_APP_PROJECT === "KNOWLEDGE") {
    return (
      <Helmet>
        <link rel="import" href="../_inlcudes/hotjar-knowledge.html" />
        <link rel="import" href="../_inlcudes/google-analytics-knowledge.html" />
        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
        />
      </Helmet>
    )
  } else {
    <Helmet>
      <link rel="import" href="../_inlcudes/hotjar-developer.html" />
      <link rel="import" href="../_inlcudes/google-analytics-developer.html" />
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
    </Helmet>
  }
}
export default Head;