import styled from "styled-components";
import NavBar from "./NavBar";

const currentUser = {
    username: "4fr0c0d3r",
    email: "email@email.com",
};

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
    const handleBackClicked = () => {
        // TODO: Take user to "/home"
        alert("Hat");
    };
    return (
        <div>
            <NavBar currentUser={currentUser} />
            <AppContainer>
                <StyledCategoryJokeHeader>
                    <StyledBackButton onClick={handleBackClicked}>
                        <img style={BackButton} src="/icons/back.svg" alt="back"/>
                    </StyledBackButton>
                    <StyledCategoryDetailsContainer>
                        <div>
                            <StyledCategoryLabel>Category: </StyledCategoryLabel>
                            <StyledCategoryName>Animal </StyledCategoryName>
                        </div>
                        <div>
                            <img style={CategoryAvatar} src="/icons/animal.svg" alt="back"/>
                        </div>
                    </StyledCategoryDetailsContainer>
                </StyledCategoryJokeHeader>
                <StyledJokeCard>
                    <StyledJokeText>
                        "The Christmas Tree of Chuck Norris is/has/was: 100 meters tall. 103856 ornaments. 262 stars. 2847687949295 lights. too many presents under it to count. painted with 38583 colors, 683 being shades of green"
                    </StyledJokeText>
                    <StyledJokeTime>2 days ago</StyledJokeTime>
                </StyledJokeCard>
                <FetchNewJokeButton>New Joke</FetchNewJokeButton>
            </AppContainer>
        </div>
    );
};
export default CategoryJoke;