import SearchSection from "./SearchSection";
import RandomJokeCard from "./RandomJokeCard";

import { StyledJokeSection } from "./styled/Joke";

const RandomJokeSection = ({ loading }) => {
    return (
        <StyledJokeSection>
            <RandomJokeCard loading={loading}/>
            <SearchSection />
        </StyledJokeSection>
    );
};
export default RandomJokeSection;
