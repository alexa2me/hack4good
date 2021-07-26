import styled from "styled-components";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";

export const StyledContainer = styled(Container)`
  max-width: 100vw;
  padding: 0;
  margin: 0 auto;
  background: #2b0955;
  color: #ffffff;

  p:first-child {
    font-size: 32px;
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
}
`;
