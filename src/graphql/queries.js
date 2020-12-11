import { gql } from "@apollo/client";

export const fetchCategoriesQuery = gql`
    query fetchCategoriesQuery {
        fetchCategories {
            categories
        }
    }
`;
export const fetchRandomJokeQuery = gql`
    query fetchRandomJokeQuery {
        fetchRandomJoke {
            id
            url
            icon_url
            value
            categories
            created_at
            updated_at
        }
    }
`;
export const fetchCategoryJokeQuery = gql`
  query fetchCategoryJoke($category: String!) {
    fetchCategoryJoke(category: $category) {
     id
      url
      icon_url
      value
      categories
      created_at
      updated_at

    }
  }
`;
export const searchForJokes = gql`
  query searchForJokes($query: String!) {
    searchForJokes(query: $query) {
      count
      results {
        id
        url
        icon_url
        value
        created_at
        updated_at
      }
    }
  }
`;

