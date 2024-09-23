import styled from "styled-components";

export const Container = styled.div``;
export const Itens = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;
  /* background-color: #f7ebdd; */
  background-color: #ffb6c1;

  height: 45px;
  font-size: 12px;
  font-weight: 600;
  font-family: "Comfortaa", sans-serif;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;
export const Temas = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;

  h1 {
    font-family: "Comfortaa", sans-serif;
    font-size: 18px;
    font-weight: 800;
    margin-bottom: 20px;
  }
  h2 {
    font-family: "Delius", cursive;

    font-size: 14px;
    font-weight: 500;
  }
`;

export const BackToHome = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
  button {
    cursor: pointer;
    background-color: transparent;
    border: none;
  }
  p {
    font-family: "comfortaa";
    font-size: 14px;
    text-decoration: underline;
    color: gray;
  }
`;

export const Produtos = styled.div`
  padding: 0 20px 50px 20px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 30px;

  .skeleton {
    p {
      font-family: "comfortaa";
      font-size: 14px;
      color: gray;
    }
  }
`;
