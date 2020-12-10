import styled from "styled-components";

import { NavLink } from "react-router-dom";
import { useContext } from "react";

import { capitalizeFirstLetter } from "../utils";
import { CategoryContext } from "../state";

const StyledCategoryCard = styled.div`
    border: 1px solid #e6e6e6;
    border-radius: .2rem;
    padding: 1rem;
    cursor: pointer;
    user-select: none;
    transition: all .1s;
    color: #6e6e6e;
    &:hover {
        transform: translateY(-.025rem);
        box-shadow: 0rem .3rem .4rem 0rem rgba(0,0,0,0.1);
    }
    &:active {
        transform: translateY(.025rem);
        box-shadow: 0rem .2rem .2rem 0rem rgba(0,0,0,0.2);
    }
`;
const StyledCategoryCardContent = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
`;
const StyledCategoryName = styled.span`
    justify-self: start;
    font-weight: 500;
`;
const categoryAvatarStyles = {
    height: 40,
    width: 40, 
    justifySelf: "end"
};
const CategoryCard = ({ category }) => {
    const { dispatch } = useContext(CategoryContext);
    const handleCategoryClicked = () => {
        dispatch({
            type: "SET_SELECTED_CATEGORY",
            payload: category
        });
    };
    const linkStyle = {
        textDecoration: "none"
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
