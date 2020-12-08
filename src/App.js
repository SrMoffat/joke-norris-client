import styled from "styled-components";

import NavBar from "./components/NavBar";
import CategoryCard from "./components/CategoryCard";
import RandomJokeCard from "./components/RandomJokeCard";
import SearchSection from "./components/SearchSection";

const AppContainer = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  background: purple;

`;
const currentUser = {
  username: "4fr0c0d3r",
  email: "email@email.com",
};

function App() {
  return (
    <div className="App">
      <NavBar currentUser={currentUser}/>
       <AppContainer>

         Here
       </AppContainer>
    </div>
  );
}

export default App;
