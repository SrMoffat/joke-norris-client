import { useState } from "react";
import { useQuery } from "@apollo/client";


import { searchForJokes } from "../graphql";
import { StyledSearchSection, StyledSearchInput, StyledSearchButton } from "./styled/Search";

const SearchInput = ({ changeHandler, focusHandler }) => {
    return <StyledSearchInput onFocus={focusHandler} onChange={changeHandler}/>
};

const SearchButton = ({ query }) => {
    // const { data, loading, refetch } = useQuery(searchForJokes, {
    //     variables: {
    //         query,
    //     }
    // });
    const handleSearchClicked = () => {
        if(query){
            // refetch();
        };
    };
    // console.log("COND", data);
    return <StyledSearchButton onClick={handleSearchClicked}>Search</StyledSearchButton>
};
const SearchSection = () => {
    const [searchQuery, setSearchQuery] = useState();
    const [searchFocused, setSearchFocused] = useState(false);
    const handleSearchInputFocused = () => {
        setSearchFocused(true);
    };
    const handleSearchInputChanged = ({ target }) => {
        const { value } = target;
        setSearchQuery(value);
    };
    return (
        <StyledSearchSection>
            <SearchInput focusHandler={handleSearchInputFocused} changeHandler={handleSearchInputChanged}/>
            <SearchButton query={searchQuery} />
        </StyledSearchSection>
    );
};
export default SearchSection;
