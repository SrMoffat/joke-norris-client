import styled from "styled-components";

import { InputStyles, StyledLoginButton, SignUpLink }from "./LoginPage";

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
        name: "confirmpassword",
        placeholder: "Confirm Password",
    }
};
const SignUpButton = () => {
    return <StyledLoginButton>SignUp</StyledLoginButton>
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
    const handleLogin = () => {
        // TODO: Authenticate user
        // alert("Hey");
    };
    return (
        <StyledSignUpContainer>
            <SignUpHeader>
                <SignUpHeaderTitle>Joke Norris</SignUpHeaderTitle>
                <img src="/logo.png" alt="logo"/>
            </SignUpHeader>
            <SignUpFormContainer>
                <form onSubmit={handleLogin}>
                    <input style={UsernameInput.styles} type={UsernameInput.attrs.type} name={UsernameInput.attrs.name} placeholder={UsernameInput.attrs.placeholder} /><br />
                    <input style={PasswordInput.styles} type={PasswordInput.attrs.type} name={PasswordInput.attrs.name} placeholder={PasswordInput.attrs.placeholder} /><br />
                    <input style={ConfirmPasswordInput.styles} type={ConfirmPasswordInput.attrs.type} name={ConfirmPasswordInput.attrs.name} placeholder={ConfirmPasswordInput.attrs.placeholder} /><br />
                    <SignUpButton /> or <SignUpLink>Login</SignUpLink>
                </form>
            </SignUpFormContainer>
           
        </StyledSignUpContainer>
    );
};
export default SignUpPage;
