import gql from 'graphql-tag'

export default gql`
  query FAMILIAS_MANY {
    FamiliaMany {
      id 
      nombreOriginario
    }
  }
`