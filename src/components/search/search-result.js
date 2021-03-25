import { Link } from "react-router-dom"
import { default as React } from "react"
import {
  connectStateResults,
  Highlight,
  Hits,
  Index,
  Snippet,
  PoweredBy,
} from "react-instantsearch-dom"
const HitCount = connectStateResults(({ searchResults }) => {
  const hitCount = searchResults && searchResults.nbHits
  return hitCount > 0 ? (
    <div className="HitCount">
      {hitCount} result{hitCount !== 1 ? `s` : ``}
    </div>
  ) : null
})
const PageHit = ({ hit, lookupTable }) => {
  let url = '';
  lookupTable.forEach((key, value) => {
    if (hit.objectID === key) {
      url = value
    }
  })
  url = url + '.html'
  return (
    <div>
      <Link to={url}>
        <h4>
          <Highlight attribute="title" hit={hit} tagName="mark" />
        </h4>
      </Link>
      <Snippet attribute="excerpt" hit={hit} tagName="mark" />
    </div>
  )
}
const HitsInIndex = ({ index, lookupTable }) => (
  <Index indexName={index.name}>
    <HitCount />
    <Hits className="Hits" hitComponent={(props) => <PageHit {...props} lookupTable={lookupTable} />} />
  </Index>
)
const SearchResult = ({ indices, className, lookupTable }) => {
  if (lookupTable && lookupTable.size > 0) {
    return (
      <div className={className}>
        {indices.map(index => (
          <HitsInIndex index={index} key={index.name} lookupTable={lookupTable} />
        ))}
        <PoweredBy />
      </div>
    )
  }
  return null
}
export default SearchResult