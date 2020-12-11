import { useState, useContext } from "react";
import { useMutation } from "@apollo/client";

import { UserContext } from "../state";
import { loginMutation } from "../graphql";
import { successMessage, errorMessage } from "../utils";
import { UsernameInput, PasswordInput } from "./styled/Inputs";
import { StyledLoginButton, SignUpLink } from "./styled/Buttons";
import { StyledLoginContainer, StyledLoginSider, StyledLoginPageTitle, StyledLoginAppName, StyledLoginFormContainer } from "./styled/Login";

const LoginButton = () => {
    return <StyledLoginButton>Login</StyledLoginButton>
};

const LoginPage = () => {
    const [values, setValues] = useState({});
    const { username, password } = values;
    const [loginUser, { loading }] = useMutation(loginMutation);
    const { dispatch } = useContext(UserContext);

    const handleInputChange = ({ target }) => {
        const { name, value } = target;
        const newState = { ...values, [name]: value }
        setValues(newState);
    };

    const handleLogin = async event => {
        event.preventDefault();
        if(!password || !username){
            errorMessage("Values cannot be empty");
        } else {
            const variables = {
                input: {
                    username,
                    password
                }
            };
            const { data } = await loginUser({
                variables,
            });
            const { login } = data;
            const { error, payload } = login;
            if(error){
                errorMessage(error.message);
            } else if(payload){
                const { message, user, token } = payload;
                successMessage(`${message} for ${user.username}`);
                localStorage.setItem("currentUser", JSON.stringify({ ...user, token }, null, 2));
                dispatch({
                    type: "LOGIN_USER",
                    payload: {
                        authenticated: true,
                        token,
                        user,
                    }
                });
                setTimeout(function(){ window.location.href = "/home"; }, 1000); // Delay for 1s to allow alert
            }
        };
    };

    const takeUserToSignUp = () => {
        window.location = "/signup";
    };

    return (
        <StyledLoginContainer>
            <StyledLoginSider>
                <StyledLoginPageTitle>LOGIN</StyledLoginPageTitle>
                <StyledLoginAppName>Joke Norris &copy;</StyledLoginAppName>
            </StyledLoginSider>
            <StyledLoginFormContainer>
                <form onSubmit={handleLogin}>
                    <input onChange={handleInputChange} required style={UsernameInput.styles} type={UsernameInput.attrs.type} name={UsernameInput.attrs.name} placeholder={UsernameInput.attrs.placeholder} /><br />
                    <input onChange={handleInputChange} required style={PasswordInput.styles} type={PasswordInput.attrs.type} name={PasswordInput.attrs.name} placeholder={PasswordInput.attrs.placeholder} /><br />
                    <LoginButton /> or <SignUpLink onClick={takeUserToSignUp}>{`${loading ? "Loading" : "Sign Up"}`}</SignUpLink>
                </form>
                <img style={{ marginTop: 100, float: "right", height: 45, width: 45 }} alt="logo" src="/logo.png"/>
            </StyledLoginFormContainer>
        </StyledLoginContainer>
    );
};
export default LoginPage;
