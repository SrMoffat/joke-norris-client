import { createContext, useReducer } from "react";

export const CategoriesInitialState = {
    categories: [],
    current: ""
};

export const CategoryContext = createContext({
    state: CategoriesInitialState,
});

export const CategoriesReducer = (state, action) => {
    const { type, payload } = action;
    switch(type){
        case "FETCH_CATEGORIES":
            const newState = {
                ...state,
                categories: payload
            };
            return newState;
        case "SET_SELECTED_CATEGORY":
            const selectedCategory = {
                ...state,
                current: payload
            };
            return selectedCategory;
        default:
            return state;
    }
};

export const CategoryContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(CategoriesReducer, CategoriesInitialState);
    return (
        <CategoryContext.Provider value={{ state, dispatch }}>
            { children }
        </CategoryContext.Provider>
    );
};