import styled, { keyframes } from "styled-components";
import Background from "../../assets/backgroundPop.png";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;
export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 230px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  background: url(${Background});
  border-radius: 15px;
  z-index: 1001;
  animation: ${fadeIn} 0.3s ease-out;

  @media (min-width: 1024px) {
    width: 35%;
    height: 350px;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .close-btn {
    background-color: transparent;
    cursor: pointer;
    width: 12px;
    border: none;
    margin-bottom: 15px;
  }
  .close {
    width: 90%;
    transform: scaleX(-1);

    p {
      background-color: red;
      color: white;
      border-radius: 15px;
      width: 30px;
      height: 22px;
      display: flex;
      text-align: center;
      align-items: center;
      justify-content: center;
      font-family: "Comfortaa", sans-serif;
      font-weight: bold;

      @media (min-width: 1024px) {
        width: 45px;
        height: 30px;
      }

      &:hover {
        opacity: 0.7;
      }
    }
  }

  section {
    img {
      display: flex;
      margin: 0 auto;
      margin-top: -5px;
      width: 40%;
    }
  }

  input {
    width: 240px;
    height: 40px;
    outline: none;
    border: ${(props) => (props.error ? "2px solid red" : "none")};
    padding: 15px;
    border-radius: 20px;

    @media (min-width: 1024px) {
      width: 400px;
      height: 45px;
    }
  }

  input::placeholder {
    color: gray;
    font-size: 12px;
    opacity: 0.8;
  }

  .submit {
    width: 110px;
    height: 30px;
    border: none;
    border-radius: 25px;
    background-color: #2a9ad9;
    color: white;
    font-size: 16px;
    font-family: "Convergence", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    transition: transform 0.3s ease;

    &:hover {
      opacity: 0.9;
      transform: scale(1.07);
    }
  }

  .spinner {
    width: 20px;
    height: 20px;
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-top: 2px solid #fff;
    border-radius: 50%;
    animation: ${spin} 0.8s linear infinite;
  }
`;

export const ErrorText = styled.p`
  font-size: 12px;
  line-height: 80%;
  color: #cf3057;
  font-weight: bold;
  height: 10px;
  margin-top: 10px;
  font-family: "Comfortaa", sans-serif;
`;
