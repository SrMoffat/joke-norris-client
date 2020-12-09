import styled from "styled-components";

import { capitalizeFirstLetter } from "../utils";

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
    console.log("CAT", category);
    console.log("TYPE", typeof category);
    return (
        <StyledCategoryCard>
            <StyledCategoryCardContent>
                <StyledCategoryName>{ capitalizeFirstLetter(category) }</StyledCategoryName>
                <img style={categoryAvatarStyles} src={`/icons/${category}.svg`} alt={`${category}`} />
            </StyledCategoryCardContent>
        </StyledCategoryCard>
    );
};

export default CategoryCard;
