import styled from "styled-components";
import { useContext } from "react";

import { UserContext } from "../state";

const StyledNav = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    padding: 1rem 1.5rem;
    box-shadow: 0px .2rem .5rem 0px rgba(0,0,0,0.25);
    margin-bottom: 1rem;
    height: 2.5rem;
`;
const StyledLogo = styled.img.attrs({
        src: "/logo.png"
    })
    `
    height: 2.5rem;
`;
const StyledLoggedInUsername = styled.div`
    justify-self: center;
    color: #6e6e6e;
`;
const StyledLogoutButton = styled.div`
    justify-self: end;
    text-transform: uppercase;
    color: #F15B24;
    font-size: .8rem;
    font-weight: bold;
    cursor: pointer;
    user-select: none;
`;

const NavBar = () => {
    const { state: { user: { username } }, dispatch } = useContext(UserContext);
    const onLogoutClicked = () => {
        localStorage.removeItem("currentUser");
        dispatch({
            type: "LOGOUT_USER",
            payload: null
        });
        window.location.href = "/";
    };
    return (
        <StyledNav>
            <StyledLogo />
            <StyledLoggedInUsername>Welcome {username }!</StyledLoggedInUsername>
            <StyledLogoutButton onClick={onLogoutClicked}>Logout</StyledLogoutButton>
        </StyledNav>
    );
};
export default NavBar;
