import styled from "styled-components";
import moment from "moment";
import { NavLink, useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { CategoryContext, UserContext } from "../state";

import { fetchCategoryJokeQuery } from "../graphql"

import NavBar from "./NavBar";
import { capitalizeFirstLetter } from "../utils";

const AppContainer = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 1.5rem;
`;
const StyledJokeCard = styled.div`
    min-width: 55rem;
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
const StyledJokeTime = styled.div`
    place-self: end;
    font-size: .7rem;
    color: #F15B24;
`;
const StyledJokeText = styled.div`
    justify-self: center;
`;
const StyledCategoryJokeHeader = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`;
const StyledBackButton = styled.div`
    justify-self: start;
    cursor: pointer;
`;
const StyledCategoryDetailsContainer = styled.div`
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    justify-self: end;
`;
const StyledCategoryLabel = styled.span`
    font-weight: bold;
`;
const StyledCategoryName = styled.span`
    color: #f15b24;
`;
const FetchNewJokeButton = styled.button`
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
const BackButton = {
    width: 40,
    height: 40
};
const CategoryAvatar = {
    ...BackButton,
    marginTop: -30,
    marginLeft: 40
};
const CategoryJoke = () => {
    const { state: { current }, dispatch } = useContext(CategoryContext);
    const { state: { user } } = useContext(UserContext);
    const { category: selected } = useParams();
    const { data, loading, refetch } = useQuery(fetchCategoryJokeQuery, {
        variables: {
            category: current || selected
        }
    });
    const categoryJoke = data?.fetchCategoryJoke;
    const linkStyle = {
        textDecoration: "none"
    };
    const fetchNewJoke = () => {
        refetch();
    };
    return (
        <div>
            <NavBar currentUser={user} />
            <AppContainer>
                <StyledCategoryJokeHeader>
                    <NavLink to={`/home`} style={linkStyle}>
                        <StyledBackButton>
                            <img style={BackButton} src="/icons/back.svg" alt="back"/>
                        </StyledBackButton>
                    </NavLink>
                    <StyledCategoryDetailsContainer>
                        <div>
                            <StyledCategoryLabel>Category: </StyledCategoryLabel>
                            <StyledCategoryName>{ capitalizeFirstLetter(current || selected) } </StyledCategoryName>
                        </div>
                        <div>
                            <img style={CategoryAvatar} src={`/icons/${current || selected }.svg`}alt={`${current || selected}`}/>
                        </div>
                    </StyledCategoryDetailsContainer>
                </StyledCategoryJokeHeader>
                <StyledJokeCard>
                    <StyledJokeText>
                        "{ categoryJoke?.value }"
                    </StyledJokeText>
                    <StyledJokeTime>{ moment(categoryJoke?.created_at).fromNow() }</StyledJokeTime>
                </StyledJokeCard>
                <FetchNewJokeButton onClick={fetchNewJoke}>New Joke</FetchNewJokeButton>
            </AppContainer>
        </div>
    );
};
export default CategoryJoke;