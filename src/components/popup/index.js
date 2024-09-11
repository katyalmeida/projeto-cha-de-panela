/* eslint-disable jsx-a11y/alt-text */
import { React, useState } from "react";
import PropTypes from "prop-types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useNavigates } from "../../constants/navigates";

import * as yup from "yup";

import conetionApi from "../../server.js";

import Logo from "../../assets/logoPopUp.png";

import { Container, ContainerItens, ErrorText } from "./styles";

function PopUp({ closePopUp, productId }) {
  const { toHome } = useNavigates();
  const [loading, setLoading] = useState(false);

  const schema = yup.object().shape({
    name: yup.string().required("É necessário informar seu nome"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (dataName) => {
    setLoading(true);
    try {
      const response = await conetionApi.post(
        `products/${productId}`,
        {
          name_user: dataName.name,
        },
        {
          validateStatus: () => true,
        }
      );

      const { status } = response;
      if (status === 200) {
        Swal.fire({
          timer: 2000,
          showConfirmButton: false,
          html: `
          <div style="text-align: center;">
            <h2 style="color: #4CAF50; font-family: Comfortaa, sans-serif; font-size: 16px; font-weight: bold;">Nome salvo com sucesso.</h2>
            <p style="color: #555555; font-family: Comfortaa, sans-serif; font-size: 12px;">Obrigada por participar 🥰.</p>
          </div>
        `,
        });
        setTimeout(() => {
          toHome();
        }, 3000);
      }
    } catch (error) {
      Swal.fire({
        showConfirmButton: false,
        html: `
      <div style="text-align: center;">
        <p style="color: #F44336; font-family: comfortaa;  font-size: 14px;">Ocorreu um erro, tente novamente.</p>
      </div>
    `,
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <Container>
      <ContainerItens>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <div className="close">
            <button className="close-btn" onClick={closePopUp}>
              <p>x</p>
            </button>
          </div>
          <input
            type="name"
            placeholder="Escreva seu nome e sobrenome"
            {...register("name")}
            error={errors.name?.message}
          />
          <ErrorText>{errors.name?.message}</ErrorText>

          <section>
            <img src={Logo} />
          </section>
          <button className="submit" type="submit" disabled={loading}>
            {loading ? <div className="spinner"></div> : "enviar"}
          </button>
        </form>
      </ContainerItens>
    </Container>
  );
}

PopUp.propTypes = {
  closePopUp: PropTypes.func.isRequired,
  productId: PropTypes.string.isRequired,
};

export default PopUp;
