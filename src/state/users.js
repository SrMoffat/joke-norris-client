import { createContext, useReducer } from "react";

const getUserInitialState = () => {
    let initial = { 
        authenticated: false,
        token: null,
        user: {}
    };
    if(localStorage.getItem("currentUser")){
        const localUserState = JSON.parse(localStorage.getItem("currentUser"));
        const updateState = {
            ...initial,
            authenticated: true,
            token: localUserState.token,
            user: {
                username: localUserState.username,
                user_id: localUserState.user_id,
            }
        };
        initial = updateState;
    };
    return initial;
};

export const UserInitialState = getUserInitialState();
export const UserContext = createContext({
    state: UserInitialState
});
export const UserReducer = (state, action) => {
    const { type, payload } = action;
    switch(type){
        case "LOGIN_USER":
            return { ...state, ...payload };
        case "LOGOUT_USER":
            return { ...UserInitialState };
        default:
            return state;
    };
};
export const UserContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(UserReducer, UserInitialState);
    return (
        <UserContext.Provider value={{ state, dispatch }}>
            { children }
        </UserContext.Provider>
    );
};