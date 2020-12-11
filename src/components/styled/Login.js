import styled from "styled-components";

export const StyledLoginContainer = styled.div`
    box-shadow: 0rem .1rem .3rem 0rem rgba(0,0,0,0.2);
    border-radius: .5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
    min-height: 20rem;
    min-width: 40rem;
`;
export const StyledLoginSider = styled.div`
    background: rgba(241, 91, 36);
    color: #ffffff;
    padding: 1rem 2rem;
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    border-top-left-radius: .5rem;
    border-bottom-left-radius: .5rem;
`;
export const StyledLoginPageTitle = styled.div`
    font-size: 1.3rem;
    font-family: Arial Rounded MT Bold;
    font-weight: bold;
    align-self: start;
`;
export const StyledLoginAppName = styled.div`
    font-size: 1rem;
    font-family: Arial Rounded MT Bold;
    font-weight: bold;
    align-self: end;
`;
export const StyledLoginFormContainer = styled.div`
    padding: 1rem;
`;
