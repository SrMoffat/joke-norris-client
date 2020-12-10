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