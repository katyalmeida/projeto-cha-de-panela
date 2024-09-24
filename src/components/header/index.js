/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import Background2 from "../../assets/background2.png";

import BackgroundDesktop from "../../assets/backgorund_desktop.jpg";
import { Container } from "./styles";

function Header() {
  const [windowCapture, SetWindowCapture] = useState(window.innerWidth);

  useEffect(() => {
    const captureWindow = () => {
      SetWindowCapture(window.innerWidth);
    };

    captureWindow();

    window.addEventListener("resize", captureWindow);

    return () => {
      window.removeEventListener("resize", captureWindow);
    };
  }, []);

  return (
    <Container>
      {windowCapture > 1024 ? (
        <img src={BackgroundDesktop} />
      ) : (
        <div>
          <img src={Background2} />
        </div>
      )}
    </Container>
  );
}

export default Header;
