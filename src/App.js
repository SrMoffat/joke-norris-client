import NavBar from "./components/NavBar";
import CategoryCard from "./components/CategoryCard";
import RandomJokeCard from "./components/RandomJokeCard";
import SearchSection from "./components/SearchSection";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <CategoryCard/>
      <RandomJokeCard/>
      <SearchSection/>
    </div>
  );
}

export default App;
