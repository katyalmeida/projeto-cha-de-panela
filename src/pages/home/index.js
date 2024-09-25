/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Coração from "../../assets/coração.png";
import Pombos from "../../assets/pombinhosHome.png";
import Casal2 from "../../assets/casal2.jpeg";

import Qr from "../../assets/qr_code.jpeg";
import { useNavigates } from "../../constants/navigates";
import Swal from "sweetalert2";

import { Container, Itens, Nomes, Image, Data, Date } from "./styles.js";

function App() {
  const { toSecond } = useNavigates();
  const copyQrCode = async () => {
    const qrUrl =
      "00020126580014BR.GOV.BCB.PIX0136b6abe599-0ac6-48d7-b9a4-441cd51155c927660014COM.PICPAY.P2P0144https://app.picpay.com/user/camila.gomes14495204000053039865802BR5912Camila Gomes6009SAO PAULO62070503***630408DF";

    await navigator.clipboard.writeText(qrUrl);

    Swal.fire({
      timer: 4000,
      showConfirmButton: false,
      html: `
          <div style="text-align: center;">
            <h2 style="color: black; font-family: Comfortaa, sans-serif; font-size: 18px; font-weight: bold;">Código copiado com sucesso!</h2>
          </div>
        `,
    });
  };

  return (
    <Container>
      <Itens>
        <h1>Chá de Panela</h1>
        <img src={Coração} />
      </Itens>
      <Nomes>
        <img src={Pombos} />

        <div>
          <h1>Kayc e Camila</h1>
        </div>
      </Nomes>
      <section>
        {" "}
        <Image src={Casal2}></Image>
      </section>

      <Data>
        <p>Contribua com um presente!</p>

        <button onClick={toSecond}>ACESSE A LISTA</button>

        <p>ou, pode contribuir com um valor:</p>
        <img className="code" src={Qr} />
        <button class="copy-button" onClick={copyQrCode}>
          COPIAR QR-CODE
        </button>
      </Data>
      <Date>
        <p>
          Local :Antiga Cesta do Povo.
          <br></br>
          Data: 24/11/2024
          <br></br>
          Horário: 17:00
        </p>
      </Date>
    </Container>
  );
}
export default App;
