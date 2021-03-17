import { gql } from 'apollo-boost';
const LANGUAGES_QUERY = gql`
{
  getLanguages
  {
    languages{
      name
      codename
      is_active
    }
  }
}
`
export { LANGUAGES_QUERY }
