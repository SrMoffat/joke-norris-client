import styled from "styled-components";
import { useState, useContext } from "react";
import { useMutation } from "@apollo/client";
import { loginMutation } from "../graphql";
import { successMessage, errorMessage } from "../utils";
import { UserContext } from "../state";

const StyledLoginContainer = styled.div`
    box-shadow: 0rem .1rem .3rem 0rem rgba(0,0,0,0.2);
    border-radius: .5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
    min-height: 20rem;
    min-width: 40rem;
`;
const StyledLoginSider = styled.div`
    background: rgba(241, 91, 36);
    color: #ffffff;
    padding: 1rem 2rem;
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    border-top-left-radius: .5rem;
    border-bottom-left-radius: .5rem;
`;
const StyledLoginPageTitle = styled.div`
    font-size: 1.3rem;
    font-family: Arial Rounded MT Bold;
    font-weight: bold;
    align-self: start;
`;
const StyledLoginAppName = styled.div`
    font-size: 1rem;
    font-family: Arial Rounded MT Bold;
    font-weight: bold;
    align-self: end;
`;
const StyledLoginFormContainer = styled.div`
    padding: 1rem;
`;
export const InputStyles = {
    height: "2rem",
    width: "16rem",
    margin: ".5rem 0rem",
    outline: "none",
    border: ".1rem solid #e6e6e6",
    borderRadius: ".15rem",
    paddingLeft: ".5rem"
};
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
export const StyledLoginButton = styled.button`
    padding: .5rem;
    margin-top: .5rem;
    margin-right: .5rem;
    width: 5rem;
    border: 1px solid #F15B24;
    border-radius: .15rem;
    color: #F15B24;
    background: #fff;
    cursor: pointer;
    user-select: none;
    outline: none;
    transition: all .1s;

    &:hover {
        transform: translateY(-.1rem);
        box-shadow: 0rem .3rem .4rem 0rem rgba(0,0,0,0.2);
    }
    &:active {
        transform: translateY(.05rem);
        box-shadow: 0rem .2rem .2rem 0rem rgba(0,0,0,0.2);
    }
`;
export const SignUpLink = styled.a`
    text-decoration: none;
    color: #F15B24;
    font-size: .8rem;
    margin-left: .3rem;
    cursor: pointer;
`
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
