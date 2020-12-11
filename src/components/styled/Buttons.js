import styled from "styled-components";

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
