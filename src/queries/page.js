import { gql } from 'apollo-boost';
const PAGE_QUERY = gql`
  query getPageQuery($id:ID, $languageCodeName:String!){
    getPage(id: $id, languageCodeName: $codename){

      body{
        value
      }
      title{
        value
      }
      why_the_product_is_useful{
        value
      }
      post_tags{
        value{
          codename
        }
      }
      url{
        value
      }
      product_description{
        value
      }
    }
  }
`
export { PAGE_QUERY }