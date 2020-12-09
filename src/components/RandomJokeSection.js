import styled from "styled-components";

import SearchSection from "./SearchSection";
import RandomJokeCard from "./RandomJokeCard";


const StyledJokeSection = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`;
const RandomJokeSection = () => {
    return (
        <StyledJokeSection>
            <RandomJokeCard />
            <SearchSection />
        </StyledJokeSection>
    );
};
export default RandomJokeSection;