import React from "react";
import { Navbar, Container } from "react-bootstrap";
import logo from "../../assets/images/logo.png";
import { StyledButton, StyledNavbar } from "../header/styled";

const Header = () => {
  return (
    <StyledNavbar expand="lg" variant="light" bg="light">
      <Container>
        <img src={logo} alt="logo" />
        <a href="https://forms.gle/U9nZaCwr1zrL65cEA">
          <StyledButton variant="outline-primary" className="ml-2">
            Seja voluntário!
          </StyledButton>
        </a>
      </Container>
    </StyledNavbar>
  );
};

export default Header;
