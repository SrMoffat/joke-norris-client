import moment from "moment";
import { useContext } from "react";

import Loader from "./Loader";
import { JokeContext } from "../state";
import { StyledJoke, StyledJokeContainer, StyledJokeTime } from "./styled/Joke";

const RandomJokeCard = ({ loading }) => {
    const { state: { joke } } = useContext(JokeContext);
    const { value, created_at } = joke;

    const publishTime = created_at && moment(created_at).fromNow();
    const jokeContent = value && value;

    return (
        <StyledJokeContainer>
            <StyledJoke>"{ jokeContent }"</StyledJoke>
            <StyledJokeTime>{ publishTime }</StyledJokeTime>
            { loading && <Loader />}
        </StyledJokeContainer>
    );
};

export default RandomJokeCard;
