import styled from "styled-components";

const StyledSearchSection = styled.div`
    justify-self: center;
    align-self: center;
`;
const StyledSearchInput = styled.input.attrs({
        placeholder: "Search for any text to get jokes"
    })`
        margin-right: 1rem;
        padding: .5rem;
        width: 20rem;
        border: 1px solid #e6e6e6;
        border-radius: .2rem;
        outline: none;

        &:hover {
            border: 1px solid #ffd0bf;
    }
`;
const StyledSearchButton = styled.button`
    padding: .5rem;
    width: 5rem;
    border: 1px solid #F15B24;
    border-radius: .15rem;
    color: #F15B24;
    background: #fff;
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

const SearchInput = () => {
    return <StyledSearchInput />
};
const SearchButton = () => {
    const handleSearchClicked = () => {
        // TODO: SUbmit input value for search
        // alert("Hey");
    };
    return <StyledSearchButton onClick={handleSearchClicked}>Search</StyledSearchButton>
};
const SearchSection = () => {
    return (
        <StyledSearchSection>
            <SearchInput />
            <SearchButton />
        </StyledSearchSection>
    );
};
export default SearchSection;

