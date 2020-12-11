import { useState } from "react";
import { useMutation } from "@apollo/client";

import Loader from "./Loader";
import { signUpMutation } from "../graphql";
import { successMessage, errorMessage } from "../utils";
import { StyledLoginButton, SignUpLink } from "./styled/Buttons";
import { UsernameInput, PasswordInput, ConfirmPasswordInput } from "./styled/Inputs";
import { SignUpHeader, SignUpHeaderTitle, SignUpFormContainer, StyledSignUpContainer} from "./styled/SignUp";

const SignUpButton = () => {
    return <StyledLoginButton type="submit">SignUp</StyledLoginButton>
};

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
