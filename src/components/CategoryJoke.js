import moment from "moment";
import { useContext } from "react";
import { useQuery } from "@apollo/client";
import { NavLink, useParams } from "react-router-dom";

import NavBar from "./NavBar";
import Loader from "./Loader";
import { AppContainer } from "./styled/App";
import { capitalizeFirstLetter } from "../utils";
import { fetchCategoryJokeQuery } from "../graphql"
import { CategoryContext, UserContext } from "../state";
import { StyledJokeCard, StyledJokeTime, StyledJokeText, StyledCategoryJokeHeader, StyledBackButton, FetchNewJokeButton } from "./styled/Joke";
import { StyledCategoryDetailsContainer, StyledCategoryLabel, StyledCategoryNam, BackButton, CategoryAvatar, linkStyle } from "./styled/Categories";

const CategoryJoke = () => {
    const { state: { current } } = useContext(CategoryContext);
    const { state: { user } } = useContext(UserContext);
    const { category: selected } = useParams();

    const { data, loading, refetch } = useQuery(fetchCategoryJokeQuery, {
        variables: {
            category: current || selected
        }
    });

    const categoryJoke = data?.fetchCategoryJoke;
   
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
                            <StyledCategoryNam>{ capitalizeFirstLetter(current || selected) } </StyledCategoryNam>
                        </div>
                        <div>
                            <img style={CategoryAvatar} src={`/icons/${current || selected }.svg`}alt={`${current || selected}`}/>
                        </div>
                    </StyledCategoryDetailsContainer>
                </StyledCategoryJokeHeader>
                <StyledJokeCard>
                    { loading && <Loader />}
                    <StyledJokeText>
                        "{ categoryJoke?.value }"
                    </StyledJokeText>
                    <StyledJokeTime>{ moment(categoryJoke?.created_at).fromNow() }</StyledJokeTime>
                </StyledJokeCard>
                <FetchNewJokeButton onClick={() => refetch()}>New Joke</FetchNewJokeButton>
            </AppContainer>
        </div>
    );
};
export default CategoryJoke;
