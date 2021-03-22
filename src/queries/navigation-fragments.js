import { gql } from 'apollo-boost';
const folderFragment = gql`
  fragment folder on NavigationItemContentType {
    system {
      id
      type
    }
    url {
      value
    }
    title{
      value
    }
  }
`

const pageFragement = gql`
  fragment page on ProductOverviewContentType {
    system {
      id
      type
    }
    url {
      value
    }
    title{
      value
    }
  }
`
const recursiveFragment = gql`
  ${pageFragement}
  ${folderFragment}
  fragment recursiveFolder on NavigationItemContentType {
    subitems{
    value{
      ... page
      ... folder
      ... on NavigationItemContentType{
        subitems{
          value{
             ... page
             ... folder
            ... on NavigationItemContentType{
              subitems{
                value{
                   ... page
                   ... folder
                }
              }
            }
          }
        }
      }
    }
  }
  }
`
export { folderFragment, pageFragement, recursiveFragment }