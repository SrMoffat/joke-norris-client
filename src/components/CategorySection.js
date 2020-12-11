import styled from "styled-components";

import { useContext } from "react";

import StyledCategoryCard from "./CategoryCard";
import { CategoryContext } from "../state";
import Loader from "./Loader";

const StyledCategoriesSection = styled.div`
    box-shadow: 0rem .1rem .3rem 0rem rgba(0,0,0,0.2);
    padding: 2rem;
    border-radius: .1rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
    min-height: 22rem;
`;
const CategorySection = ({ loading }) => {
    const { state: { categories } } = useContext(CategoryContext);
    return (
        <StyledCategoriesSection>
            {
                categories?.map((category, index) => {
                    return <StyledCategoryCard key={`${index}-card-${category}`} category={category} />
                })
            }
            { loading && <Loader />}
        </StyledCategoriesSection>
    );
};
export default CategorySection;