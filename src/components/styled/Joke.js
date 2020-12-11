import styled from "styled-components";

export const StyledJokeCard = styled.div`
    width: 55rem;
    min-height: 5rem;
    border: 1px solid #e6e6e6;
    border-radius: .2rem;
    padding: 1rem;
    transition: all .1s;
    color: #6e6e6e;
    justify-self: center;
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    &:hover {
        transform: translateY(-.025rem);
        box-shadow: 0rem .3rem .4rem 0rem rgba(0,0,0,0.1);
    }
`;
export const StyledJokeTime = styled.div`
    place-self: end;
    font-size: .7rem;
    color: #F15B24;
`;
export const StyledJokeText = styled.div`
    justify-self: center;
`;
export const StyledCategoryJokeHeader = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`;
export const StyledBackButton = styled.div`
    justify-self: start;
    cursor: pointer;
`;
export const FetchNewJokeButton = styled.button`
    justify-self: center;
    padding: .5rem;
    width: 5rem;
    height: 2rem;
    border: 1px solid #F15B24;
    border-radius: .15rem;
    color: #fff;
    background: #F15B24;
    cursor: pointer;
    user-select: none;
    outline: none;
    transition: all .1s;
    &:hover {
        transform: translateY(-.1rem);
        box-shadow: 0rem .3rem .4rem 0rem rgba(0,0,0,0.2);
    }
    &:active {
        transform: translateY(.05rem);
        box-shadow: 0rem .2rem .2rem 0rem rgba(0,0,0,0.2);
    }
`;
export const StyledJokeContainer = styled.div`
    justify-self: start;
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    padding: 1rem;
    box-shadow: 0rem .1rem .3rem 0rem rgba(0,0,0,0.2);
    width: 35rem;
`;
export const StyledJoke = styled.div`
    font-size: .85rem;
    color: #6e6e6e;
    min-width: 10rem;
`;
export const StyledJokeSection = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`;