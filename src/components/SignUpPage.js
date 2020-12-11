import styled from "styled-components";
import { useState } from "react";

import { useMutation } from "@apollo/client";

import { signUpMutation } from "../graphql";
import { successMessage, errorMessage } from "../utils";
import { InputStyles, StyledLoginButton, SignUpLink }from "./LoginPage";
import Loader from "./Loader";

const StyledSignUpContainer = styled.div`
    box-shadow: 0rem .1rem .3rem 0rem rgba(0,0,0,0.2);
    border-radius: .5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-height: 25rem;
    min-width: 30rem;
`;
const UsernameInput = {
    attrs: {
        type: "text",
        name: "username",
        placeholder: "Username",
    },
    styles: {
       ...InputStyles
    }
};
const PasswordInput = {
    attrs: {
        type: "password",
        name: "password",
        placeholder: "Password",
    },
    styles: {
        ...InputStyles
    }
};
const ConfirmPasswordInput = {
    ...PasswordInput,
    attrs: {
        type: "password",
        name: "confirmPassword",
        placeholder: "Confirm Password",
    }
};
const SignUpButton = () => {
    return <StyledLoginButton type="submit">SignUp</StyledLoginButton>
};
const SignUpHeader = styled.div`
    border-top-left-radius: .5rem;
    border-top-right-radius: .5rem;
    background-color: #F15B24;
    height: 5rem;
    text-align: center;
    padding: 1rem;
`;
const SignUpHeaderTitle = styled.div`
    color: #fff;
    font-family: Arial Rounded MT Bold;
    text-align: center;
    font-weight: bold;
    font-size: 1.5rem;
`;
const SignUpFormContainer = styled.div`
    padding: 1.5rem;
    margin: auto;
    text-align: center;
`;
const SignUpPage = () => {
    const [values, setValues] = useState({});
    const { username, password, confirmPassword } = values;
    const [accountRequestMutation, { loading }] = useMutation(signUpMutation, { errorPolicy: "none", fetchPolicy: "no-cache" });
    const handleInputChange = ({ target }) => {
        const { name, value } = target;
        const newState = { ...values, [name]: value }
        setValues(newState);
    };
    const handleLogin = async (event) => {
        event.preventDefault();
        if(!password || !username){
            errorMessage("Values cannot be empty");
        }
        if(password !== confirmPassword){
            const passwordError = {
                field: "password",
                message: "Password and Confirm Password do not match"
            };
            errorMessage(passwordError.message);
        } else {
            const variables = {
                input: {
                    username,
                    password
                }
            };
            const { data } = await accountRequestMutation({
                variables,
            });
            const { signUp } = data;
            const { error, message, user} = signUp;
            if(error){
                errorMessage(error.message);
            } else if(message){
                successMessage(`${message} as ${user.username}`);
                setTimeout(function(){ window.location = "/"; }, 2000); // Delay for 2s to allow alert be seen
            };
        };
    };
    const takeUserToLogin = () => {
        window.location = "/";
    };
    return (
        <StyledSignUpContainer>
            <SignUpHeader>
                <SignUpHeaderTitle>Joke Norris</SignUpHeaderTitle>
                <img src="/logo.png" alt="logo"/>
            </SignUpHeader>
            <SignUpFormContainer>
                <form onSubmit={handleLogin}>
                    <input required onChange={handleInputChange} style={UsernameInput.styles} type={UsernameInput.attrs.type} name={UsernameInput.attrs.name} placeholder={UsernameInput.attrs.placeholder} /><br />
                    <input required onChange={handleInputChange} style={PasswordInput.styles} type={PasswordInput.attrs.type} name={PasswordInput.attrs.name} placeholder={PasswordInput.attrs.placeholder} /><br />
                    <input required onChange={handleInputChange} style={ConfirmPasswordInput.styles} type={ConfirmPasswordInput.attrs.type} name={ConfirmPasswordInput.attrs.name} placeholder={ConfirmPasswordInput.attrs.placeholder} /><br />
                    <SignUpButton /> or <SignUpLink onClick={takeUserToLogin}>Login</SignUpLink>
                </form>
                { loading && <Loader />}
            </SignUpFormContainer>
        </StyledSignUpContainer>
    );
};
export default SignUpPage;
