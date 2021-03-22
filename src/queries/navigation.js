import { gql } from 'apollo-boost';
import { folderFragment, recursiveFragment } from "./navigation-fragments"

const NAVIGATION_QUERY = gql`
  ${folderFragment}
  ${recursiveFragment}
  query NavigationQuery($languageCodeName:String!){
    getNavigation(languageCodeName:$languageCodeName){
      ... on NavigationItemContentType{
        ... folder
        ... recursiveFolder
      }
    }
  }
`
export { NAVIGATION_QUERY }
