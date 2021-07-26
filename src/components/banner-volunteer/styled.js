import styled from "styled-components";
import { Button } from "react-bootstrap";

export const StyledButton = styled(Button)`
  background-color: #F3B81E;
  color: #0B0A0A;
  font-size: 1em;
  border-radius: 10px;
  border: none;
  grid-column: 1 / 4;
  font-weight: 600;
  padding: 0.5em 1em 0.5em 1em;

    &:hover {
        background-color: #F3B81E;
        color: #0B0A0A;
        opacity: 0.8;
    }
}
`;

export const MainContainer = styled.div`
  background-color: #2b0955;
  height: 75vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 50px 0 40px 0;
`;

export const Icon = styled.img`
  grid-column: 1 / 4;
  justify-self: center;
`;

export const Text = styled.p`
  grid-column: 1 / 4;
  justify-self: center;
  color: #ffffff;
  font-size: 2em;
  width: 40vw;
  text-align: center;
`;

export const BoldText = styled.span`
  font-weight: bold;
  color: #c4c4c4;
`;

export const Link = styled.a`
  grid-column: 1 / 4;
  justify-self: center;
`;
