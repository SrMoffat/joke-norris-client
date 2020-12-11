import styled from "styled-components";

import SearchSection from "./SearchSection";
import RandomJokeCard from "./RandomJokeCard";


const StyledJokeSection = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`;
const RandomJokeSection = ({ loading }) => {
    return (
        <StyledJokeSection>
            <RandomJokeCard loading={loading}/>
            <SearchSection />
        </StyledJokeSection>
    );
};
export default RandomJokeSection;