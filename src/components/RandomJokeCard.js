import styled from "styled-components";
import moment from "moment";

import { useContext } from "react";
import { JokeContext } from "../state";

const StyledJokeContainer = styled.div`
    justify-self: start;
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    padding: 1rem;
    box-shadow: 0rem .1rem .3rem 0rem rgba(0,0,0,0.2);
    width: 35rem;
`;
const StyledJoke = styled.div`
    font-size: .85rem;
    color: #6e6e6e;
    min-width: 10rem;

`;
const StyledJokeTime = styled.div`
    justify-self: end;
    align-self: end;
    font-size: .7rem;
    color: #F15B24;
`;

const RandomJokeCard = () => {
    const { state: { joke } } = useContext(JokeContext);
    const { value, created_at } = joke;
    const publishTime = created_at && moment(created_at).fromNow();
    const jokeContent = value && value;
    return (
        <StyledJokeContainer>
            <StyledJoke>"{ jokeContent }"</StyledJoke>
            <StyledJokeTime>{ publishTime }</StyledJokeTime>
        </StyledJokeContainer>
    );
};

export default RandomJokeCard;
