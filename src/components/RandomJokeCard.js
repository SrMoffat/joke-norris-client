import styled from "styled-components";

const StyledJokeContainer = styled.div`
    justify-self: start;
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    padding: 1rem;
    box-shadow: 0rem .1rem .3rem 0rem rgba(0,0,0,0.2);
`;
const StyledJoke = styled.div`
    /* overflow-wrap: break-word; */
    font-size: .85rem;
    color: #6e6e6e;
`;
const StyledJokeTime = styled.div`
    justify-self: end;
    align-self: end;
    font-size: .7rem;
    color: #F15B24;
`;

const RandomJokeCard = () => {
    return (
        <StyledJokeContainer>
            <StyledJoke>The Christmas Tree of Chuck Norris is/has/was: 100 meters tall. 103856 ornaments. 262 stars. 2847687949295 lights. too many presents under it to count. painted with 38583 colors, 683 being shades of green</StyledJoke>
            <StyledJokeTime>2 days ago</StyledJokeTime>
        </StyledJokeContainer>
    );
};

export default RandomJokeCard;
