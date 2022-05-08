import {gql} from '@apollo/client'

export const GET_PRODUCTS_BY_TYPE = gql`
  query getProductsByType($type: String!) {
    getProductsByType(type: $type) {
      id,
      title,
      images,
      price,
      oldPrice,
      rating
    }
  }
`

export const GET_PRODUCT_BY_ID = gql`
  query getProductById($id: String!) {
    getProductsById(id: $id) {
      id,
      title,
      images,
      price,
      description
    }
  }
`