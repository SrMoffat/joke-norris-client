import styled from "styled-components";


const InputStyles = {
    height: "2rem",
    width: "16rem",
    margin: ".5rem 0rem",
    outline: "none",
    border: ".1rem solid #e6e6e6",
    borderRadius: ".15rem",
    paddingLeft: ".5rem"
};
export const UsernameInput = {
    attrs: {
        type: "text",
        name: "username",
        placeholder: "Username",
    },
    styles: {
       ...InputStyles
    }
};
export const PasswordInput = {
    attrs: {
        type: "password",
        name: "password",
        placeholder: "Password",
    },
    styles: {
        ...InputStyles
    }
};
export const ConfirmPasswordInput = {
    ...PasswordInput,
    attrs: {
        type: "password",
        name: "confirmPassword",
        placeholder: "Confirm Password",
    }
};
