import styled from "styled-components";
import { Button } from "react-bootstrap";

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
