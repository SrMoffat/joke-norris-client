import styled from "styled-components";

import StyledCategoryCard from "./CategoryCard";

const StyledCategoriesSection = styled.div`
    box-shadow: 0rem .1rem .3rem 0rem rgba(0,0,0,0.2);
    padding: 2rem;
    border-radius: .1rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
    /* place-items: center; */
`;
const CategorySection = ({ categories }) => {
    return (
        <StyledCategoriesSection>
            {
                categories?.map((category, index) => {
                    return <StyledCategoryCard key={`${index}-card-${category}`} category={category} />
                })
            }
        </StyledCategoriesSection>
    );
};
export default CategorySection;