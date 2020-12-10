import { createContext, useReducer } from "react";

export const JokeInitialState = {
    category: "",
    joke: ""
};
export const JokeContext = createContext({
    state: JokeInitialState
});
export const JokeReducer = (state, action) => {
    const { type, payload } = action;
    switch(type){
        case "FETCH_RANDOM_JOKE":
            const newState = { 
                category: "random",
                joke: {
                    ...payload 
                }
            };
            return newState;
        case "FETCH_CATEGORY_JOKE":
            return { ...state, ...payload };
        default:
            return state;
    };
};
export const JokeContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(JokeReducer, JokeInitialState);
    return (
        <JokeContext.Provider value={{ state, dispatch }}>
            { children }
        </JokeContext.Provider>
    );
};