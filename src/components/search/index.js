import algoliasearch from "algoliasearch/lite"
import { createRef, default as React, useState } from "react"
import { InstantSearch, Configure } from "react-instantsearch-dom"
import { ThemeProvider } from "styled-components"
import StyledSearchBox from "./styled-search-box"
import StyledSearchResult from "./styled-search-result"
import StyledSearchRoot from "./styled-search-root"
import useClickOutside from "./use-click-outside"
require("dotenv").config({
  path: `../.env`,
})
const theme = {
  foreground: "#050505",
  background: "white",
  faded: "#888",
}
export default function Search({ language, lookupTable }) {
  const rootRef = createRef()
  const [query, setQuery] = useState()
  const [hasFocus, setFocus] = useState(false)
  const indices = [{ name: process.env.REACT_APP_ALGOLIA_INDEX, title: process.env.REACT_APP_ALGOLIA_INDEX }]
  // TODO Use env vars app key and api search key
  const searchClient = algoliasearch(
    process.env.REACT_APP_AGOLIA_ID,
    process.env.REACT_APP_ALGOLIA_KEY
  )
  let filter = `language=${language}`
  useClickOutside(rootRef, () => setFocus(false))
  return (
    <ThemeProvider theme={theme}>
      <StyledSearchRoot ref={rootRef}>
        <InstantSearch
          searchClient={searchClient}
          indexName={indices[0].name}
          onSearchStateChange={({ query }) => setQuery(query)}
          initialParams={{ filters: filter }}
        >
          <StyledSearchBox onFocus={() => setFocus(true)} hasFocus={hasFocus} />
          <StyledSearchResult
            show={query && query.length > 0 && hasFocus}
            indices={indices}
            lookupTable={lookupTable}
          />
        </InstantSearch>
      </StyledSearchRoot>
    </ThemeProvider>
  )
}