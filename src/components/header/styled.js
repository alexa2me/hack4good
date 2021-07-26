import styled from "styled-components";
import { Button, Navbar } from "react-bootstrap";

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

export const StyledNavbar = styled(Navbar)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 90px;
  z-index: 2;
`;
