import styled from "styled-components";

import { capitalizeFirstLetter } from "../utils";

const StyledCategoryCard = styled.div`
    border: 1px solid #e6e6e6;
    border-radius: .2rem;
    padding: 1rem;
    cursor: pointer;
    user-select: none;
    transition: all .1s;
    &:hover {
        transform: translateY(-.025rem);
        box-shadow: 0rem .3rem .4rem 0rem rgba(0,0,0,0.1);
    }
    &:active {
        transform: translateY(.025rem);
        box-shadow: 0rem .2rem .2rem 0rem rgba(0,0,0,0.2);
    }
`;
const CategoryCard = ({ category }) => {
    return (
        <StyledCategoryCard>
            { capitalizeFirstLetter(category) }
        </StyledCategoryCard>
    );
};

export default CategoryCard;
