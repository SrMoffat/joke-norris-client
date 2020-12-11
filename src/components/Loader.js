import styled from "styled-components";

const StyledLoader = styled.section`
    /* display: flex;
    position: absolute;
    top: 50%;
    left: 50%; */
    /* margin-top: 18.75rem;
    margin-left: 3.125rem; */
    /* width: 6.25rem;
    height: 6.25rem; */
`;
const StyledLoaderCircles = styled.div`
    width: 0.625rem;
    height: 0.625rem;
    background-color: white;
    border-radius: 50%;
    margin: 0.188rem;
    animation: jump 0.5s ease-in infinite;
    :nth-of-type(1){
        background-color: #b6b6b6;
    }
    :nth-of-type(2){
        animation-delay: 0.1s;
        background-color: rgba(241,91,36);
    }
    :nth-of-type(3){
        animation-delay: 0.2s;
        background-color: #b6b6b6;
    }
    @keyframes jump {
        0% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(0.625rem);
        }
    }
`;
const Loader = () => (
    <StyledLoader>
        <StyledLoaderCircles />
        <StyledLoaderCircles />
        <StyledLoaderCircles />
    </StyledLoader>
);
export default Loader;


