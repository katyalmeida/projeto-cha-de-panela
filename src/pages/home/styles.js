import styled from "styled-components";

export const Container = styled.div`
  @media (min-width: 1024px) {
    padding: 32px;
    max-width: 1200px;
    margin: 0 auto;
  }
`;

export const Itens = styled.div`
  cursor: pointer;

  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 30px;
  margin-top: 18px;
  .menu {
    width: 32px;
    margin-top: 9px;
  }

  img {
    width: 50px;
    height: 50px;
    margin-top: 8px;

    @media (min-width: 1024px) {
      width: 100px;
      height: 100px;
    }
  }

  h1 {
    font-size: 64px;
    color: black;
    font-family: "Lovers Quarrel", cursive;
    font-weight: 400;
    margin-bottom: 20px;

    @media (min-width: 1024px) {
      font-size: 96px;
    }
  }
`;

export const Nomes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 125px;
    margin-top: -22px;

    @media (min-width: 1024px) {
      width: 250px;
    }
  }

  div {
    margin-top: -12px;
    background-color: #e6e6fa;
    width: 70%;

    @media (min-width: 1024px) {
      width: 50%;
    }
  }

  h1 {
    font-family: "Miltonian", serif;
    font-weight: 400;
    font-style: normal;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: 1024px) {
      font-size: 48px;
    }
  }
`;

export const Image = styled.img`
  margin-top: 40px;
  width: 100%;
  height: 190px;
`;
export const Data = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 6px;
  margin-top: 25px;
  margin-bottom: 29px;

  .copy-button {
    cursor: pointer;
    background-color: gray;
    width: 160px;
    color: white;
    border: none;
    border-radius: 25px;
    padding: 10px 20px;
    font-size: 12px;
    font-family: "Convergence", sans-serif;
    font-size: 12px;
    transition: background-color 0.3s ease, transform 0.3s ease;

    &:hover {
      background-color: #832b47;
      transform: scale(1.05);
    }

    &:active {
      background-color: #c83966;
    }
  }

  img {
    width: 250px;
  }
  p {
    font-size: 16px;
    font-family: "Convergence", sans-serif;
  }
  button {
    margin-bottom: 20px;
    margin-top: 10px;
    cursor: pointer;
    background-color: #832b47;
    width: 180px;
    height: 40px;
    border: none;
    border-radius: 25px;
    font-size: 16px;
    color: white;
    font-family: "Convergence", sans-serif;
    transition: background-color 0.3s ease, transform 0.3s ease;

    &:hover {
      background-color: #c83966;
      transform: scale(1.1);
    }
  }
`;
