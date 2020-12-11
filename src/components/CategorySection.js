import { useContext } from "react";

import Loader from "./Loader";
import { CategoryContext } from "../state";
import StyledCategoryCard from "./CategoryCard";
import { StyledCategoriesSection } from "./styled/Categories";

const CategorySection = ({ loading, searching  }) => {
    const { state: { categories } } = useContext(CategoryContext);
    return (
        <StyledCategoriesSection>
            {
                categories?.map((category, index) => {
                    return <StyledCategoryCard key={`${index}-card-${category}`} category={category} />
                })
            }
            { loading && <Loader />}
            {/* { searching && <p>Searching..</p>} */}
        </StyledCategoriesSection>
    );
};
export default CategorySection;
