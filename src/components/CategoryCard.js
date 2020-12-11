import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { CategoryContext } from "../state";
import { capitalizeFirstLetter } from "../utils";
import { StyledCategoryCard, StyledCategoryCardContent, StyledCategoryName, categoryAvatarStyles, linkStyle } from "./styled/Categories";

const CategoryCard = ({ category }) => {
    const { dispatch } = useContext(CategoryContext);

    const handleCategoryClicked = () => {
        dispatch({
            type: "SET_SELECTED_CATEGORY",
            payload: category
        });
    };
  
    return (
        <NavLink to={`/jokes/${category}`} style={linkStyle}>
            <StyledCategoryCard onClick={handleCategoryClicked}>
                <StyledCategoryCardContent>
                    <StyledCategoryName>{ capitalizeFirstLetter(category) }</StyledCategoryName>
                    <img style={categoryAvatarStyles} src={`/icons/${category}.svg`} alt={`${category}`} />
                </StyledCategoryCardContent>
            </StyledCategoryCard>
        </NavLink>
        
    );
};

export default CategoryCard;
