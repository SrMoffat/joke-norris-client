import { gql } from "@apollo/client";

export const signUpMutation = gql`
    mutation signUpMutation($input: SignUpInput!) {
        signUp(input: $input) {
            message
            user {
                username
                user_id
            }
            error {
                field
                message
            }
        }
    }
`;

export const loginMutation = gql`
  mutation loginMutation($input: LoginInput!) {
    login(input: $input) {
      payload {
        message
        token
        user {
          username
          user_id
        }
      }
      error {
        field
        message
      }
    }
  }
`;
