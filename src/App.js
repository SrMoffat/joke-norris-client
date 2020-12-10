import styled from "styled-components";
import { useContext } from "react";
import { useQuery } from "@apollo/client";


import NavBar from "./components/NavBar";
import CategorySection from "./components/CategorySection";
import RandomJokeSection from "./components/RandomJokeSection";

import { CategoryContext } from "./state";
import { fetchCurrencyQuery } from "./graphql";

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
  /* background: gray; */
`;
const currentUser = {
  username: "4fr0c0d3r",
  email: "email@email.com",
};
const categories = [
  "animal",
  "career",
  "celebrity",
  "dev",
  "explicit",
  "fashion",
  "food",
  "history",
  "money",
  "movie",
  "music",
  "political",
  "religion",
  "science",
  "sport",
  "travel"
];

function App() {
  // const { data, loading } = useQuery(fetchCurrencyQuery);
  // console.log("LO", loading)
  // console.log("DA", data)
  return (
    <AppWrapper>
      <NavBar currentUser={currentUser}/>
       <AppContainer>
        <RandomJokeSection />
        <CategorySection categories={categories} />
       </AppContainer>
    </AppWrapper>
  );
}

export default App;
