/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Background from "../../assets/background.png";
import { Container } from "./styles";
function Header() {
  return (
    <Container>
      <div>
        <img src={Background} />
      </div>
    </Container>
  );
}

export default Header;
