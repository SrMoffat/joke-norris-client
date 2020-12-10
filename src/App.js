import styled from "styled-components";

import { useContext, useEffect } from "react";
import { useQuery } from "@apollo/client";

import { fetchCategoriesQuery } from "./graphql";
import { CategoryContext } from "./state";

import NavBar from "./components/NavBar";
import CategorySection from "./components/CategorySection";
import RandomJokeSection from "./components/RandomJokeSection";

const AppWrapper = styled.div`
  overflow-y: scroll;
`;

const AppContainer = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  display: grid;
  grid-template-rows: 8rem 1fr;
  grid-gap: 1.5rem;
`;
function App() {
  const { dispatch } = useContext(CategoryContext);
  const { data, loading } = useQuery(fetchCategoriesQuery);
  const categories = data?.fetchCategories.categories;
  useEffect(() => {
    if(categories){
      dispatch({
        type: "FETCH_CATEGORIES",
        payload: categories
      });
    };
  }, [categories]);
  return (
    <AppWrapper>
      <NavBar/>
       <AppContainer>
        <RandomJokeSection />
        <CategorySection />
       </AppContainer>
    </AppWrapper>
  );
}

export default App;
