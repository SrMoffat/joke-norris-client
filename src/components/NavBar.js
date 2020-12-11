import { useContext } from "react";

import { UserContext } from "../state";
import { StyledNav, StyledLogo, StyledLoggedInUsername, StyledLogoutButton } from "./styled/Nav";

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
