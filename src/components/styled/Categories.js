import styled from "styled-components";

export const StyledCategoryCard = styled.div`
    border: 1px solid #e6e6e6;
    border-radius: .2rem;
    padding: 1rem;
    cursor: pointer;
    user-select: none;
    transition: all .1s;
    color: #6e6e6e;
    &:hover {
        transform: translateY(-.025rem);
        box-shadow: 0rem .3rem .4rem 0rem rgba(0,0,0,0.1);
    }
    &:active {
        transform: translateY(.025rem);
        box-shadow: 0rem .2rem .2rem 0rem rgba(0,0,0,0.2);
    }
`;
export const StyledCategoryCardContent = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
`;
export const StyledCategoryName = styled.span`
    justify-self: start;
    font-weight: 500;
`;
export const StyledCategoryDetailsContainer = styled.div`
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    justify-self: end;
    @media only screen and (max-width: 480px) { /* mobile phones */
        justify-self: start;
    }
`;
export const StyledCategoryLabel = styled.span`
    font-weight: bold;
`;
export const StyledCategoryNam = styled.span`
    color: #f15b24;
`;
export const BackButton = {
    width: 40,
    height: 40
};
export const CategoryAvatar = {
    ...BackButton,
    marginTop: -30,
    marginLeft: 40
};
export const categoryAvatarStyles = {
    height: 40,
    width: 40, 
    justifySelf: "end"
};
export const linkStyle = {
    textDecoration: "none"
};
export const StyledCategoriesSection = styled.div`
    box-shadow: 0rem .1rem .3rem 0rem rgba(0,0,0,0.2);
    padding: 2rem;
    border-radius: .1rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
    min-height: 22rem;
    @media only screen and (max-width: 480px) { /* mobile phones */
        grid-template-columns: repeat(2, 1fr);
        width: 24rem;
    }
    @media only screen and (max-width: 670px) { /* tablets */
        grid-template-columns: repeat(3, 1fr);
    }
    @media only screen and (max-width: 620px) { /* tablets */
        grid-template-columns: repeat(2, 1fr);
    }
`;
