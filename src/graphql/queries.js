import { gql } from "@apollo/client";

export const fetchCategoriesQuery = gql`
    query fetchCategoriesQuery {
        fetchCategories {
            categories
        }
    }
`;