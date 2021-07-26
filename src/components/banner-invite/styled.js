import styled from "styled-components";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";

export const StyledContainer = styled(Container)`
  max-width: 100vw;
  padding: 0;
  margin: 0 auto;
  margin-top: 92px;
  background: #2b0955;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  height: 50vh;

  p:first-child {
    font-size: 6em;
    max-width: 100vw;
    margin: 0 auto;
  }

  p:second-child {
    font-size: 18px;
  }
`;

export const StyledButton = styled(Button)`
  background-color: #f9573f;
  color: #ffffff;
  font-size: 1em;
  border-radius: 8px;
  border: none;

    &:hover {
        background-color: #f9573f;
        opacity: 0.8;
    }
}`;

export const Link = styled.a`
  align-self: center;
`;
