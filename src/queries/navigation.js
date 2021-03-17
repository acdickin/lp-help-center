import { gql } from 'apollo-boost';
const folderFragment = gql`
  fragment folder on NavigationItemContentType {
    system {
      type
    }
    url {
      value
    }
    title {
      value
    }
  }
`

const pageFragement = gql`
  fragment page on ProductOverviewContentType {
    system {
      id
    }
    url {
      value
    }
  }
`

const recursiveFragment = gql`
  fragment recursiveFolder on NavigationItemContentType {
    subitems {
      value {
          ...page
          ...folder
          ...on NavigationItemContentType {
          subitems {
            value {
                ...page
                ...folder
                ...on NavigationItemContentType {
                subitems {
                  value {
                      ...page
                      ...folder
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  ${pageFragement}
  ${folderFragment}
`



const NAVIGATION_QUERY = gql`
  query NavigationQuery($languageCodeName:String!){
    getNavigation(languageCodeName:$codename){
      ... folder
      ... recursiveFolder
    }
    ${folderFragment}
    ${recursiveFragment}
  }
`


export { NAVIGATION_QUERY }
