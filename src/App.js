import styled from "styled-components";

import { useContext, useEffect } from "react";
import { useQuery } from "@apollo/client";

import { fetchCategoriesQuery, fetchRandomJokeQuery } from "./graphql";
import { CategoryContext, JokeContext } from "./state";

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
  const { dispatch: dispatchJokeAction } = useContext(JokeContext);
  const { data, loading, refetch } = useQuery(fetchCategoriesQuery);
  const { data: randomJokeData, loading: randomJokeLoading, refetch: refetchRandomJoke } = useQuery(fetchRandomJokeQuery);
  const categories = data?.fetchCategories.categories;
  const randomJoke = randomJokeData?.fetchRandomJoke;
  useEffect(() => {
    if(categories){
      dispatch({
        type: "FETCH_CATEGORIES",
        payload: categories
      });
    };
  }, [categories, dispatch]);
  useEffect(() => {
    refetch();
  }, [refetch]);
  useEffect(() => {
    if(randomJoke){
      dispatchJokeAction({
        type: "FETCH_RANDOM_JOKE",
        payload: randomJoke
      });
    };
  }, [randomJoke, dispatchJokeAction]);
  useEffect(() => {
    refetchRandomJoke();
  }, [refetchRandomJoke]);
  return (
    <AppWrapper>
      <NavBar/>
       <AppContainer>
        <RandomJokeSection loading={randomJokeLoading}/>
        <CategorySection loading={loading} />
       </AppContainer>
    </AppWrapper>
  );
}

export default App;
