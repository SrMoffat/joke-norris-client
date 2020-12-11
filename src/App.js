import { useQuery } from "@apollo/client";
import { useContext, useEffect } from "react";

import NavBar from "./components/NavBar";
import { CategoryContext, JokeContext } from "./state";
import CategorySection from "./components/CategorySection";
import RandomJokeSection from "./components/RandomJokeSection";
import { AppWrapper, AppContainer } from "./components/styled/App";
import { fetchCategoriesQuery, fetchRandomJokeQuery } from "./graphql";

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
