import { useState } from "react";
import { StyledSearchSection, StyledSearchInput, StyledSearchButton } from "./styled/Search";

const SearchInput = ({ changeHandler, focusHandler }) => {
    return <StyledSearchInput onFocus={focusHandler} onChange={changeHandler}/>
};

const SearchButton = ({ query }) => {
    const handleSearchClicked = () => {
        // TODO: Fetch results
        alert("🛠 Coming soon... 🛠");
    };
    return <StyledSearchButton onClick={handleSearchClicked}>Search</StyledSearchButton>
};
const SearchSection = () => {
    const [searchQuery, setSearchQuery] = useState();
    // const [searchFocused, setSearchFocused] = useState(false);

    const handleSearchInputFocused = () => {
        // setSearchFocused(true);
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
