import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  height: 50vh;

  p {
    font-size: 6em;
  }

  ol li {
    font-size: 1.4rem;

    & + li {
      margin-top: 0.5rem;
    }
  }
`;
