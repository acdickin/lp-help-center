
import React from "react";
import { Link } from "react-router-dom";
import {
  InstantSearch,
  Hits,
  SearchBox,
  Configure,
} from 'react-instantsearch-dom';
import algoliasearch from 'algoliasearch'

require("dotenv").config({
  path: `.env`,
})

const Search = ({ language, lookupTable }) => {

  if (language && lookupTable) {
    return (
      <RenderSearch language={language} lookupTable={lookupTable} />
    )
  } else {
    return null
  }
};
const RenderSearch = ({ language, lookupTable }) => {
  const searchClient = algoliasearch(
    process.env.REACT_APP_AGOLIA_ID,
    process.env.REACT_APP_ALGOLIA_KEY
  );
  let filter = `language:${language}`;
  return (
    <div className="ais-InstantSearch">
      <InstantSearch indexName={process.env.REACT_APP_ALGOLIA_INDEX} searchClient={searchClient}>
        <Configure
          hitsPerPage={2}
        />
        <div className="right-panel">
          <SearchBox />
          <Hits hitComponent={(props) => (
            <Hit
              {...props}
              lookupTable={lookupTable}
              language={language}
            />
          )} />
        </div>
      </InstantSearch>
    </div>
  )
}

const Hit = ({ hit, lookupTable }) => {
  let link;
  lookupTable.forEach((key, value) => {
    if (key === hit.objectID) {
      link = value
    }
  })
  return (
    <Link to={link + '.html'}>
      {hit.title}
    </Link>
  );
}

export default Search;