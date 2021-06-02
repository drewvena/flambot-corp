import gql from 'graphql-tag';

export const QUERY_PRODUCTS = gql`
  query products($category:ID,$name:String) {
    products(category:$category,name:$name) {
      _id
      image
      name
      description
      price
      quantity
      category {
        _id
      }
    }
  }
`;

export const QUERY_CATEGORIES = gql`
{
  categories {
    _id
    name
  }
}
`;

export const QUERY_USER = gql`
{
  user {
    firstName
    lastName
    orders {
      _id
      purchaseDate
      products {
        _id
        name
        description
        price
        quantity
        image
      }
    }
  }
}
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;