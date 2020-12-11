import styled from "styled-components";

export const AppWrapper = styled.div`
  overflow-y: scroll;
`;
export const AppContainer = styled.section`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
    display: grid;
    grid-template-rows: 8rem 1fr;
    grid-gap: 1.5rem;
`;