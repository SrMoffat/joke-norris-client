import { gql } from "@apollo/client";

export const fetchCategoriesQuery = gql`
    query fetchCategoriesQuery {
        categories
    }
`;