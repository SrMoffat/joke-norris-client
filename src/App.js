import styled from "styled-components";

import NavBar from "./components/NavBar";
import CategoryCard from "./components/CategoryCard";
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
  /* background: gray; */
`;
const currentUser = {
  username: "4fr0c0d3r",
  email: "email@email.com",
};

function App() {
  return (
    <AppWrapper>
      <NavBar currentUser={currentUser}/>
       <AppContainer>
         <RandomJokeSection />
         <div>Category Container</div>
       </AppContainer>
    </AppWrapper>
  );
}

export default App;
