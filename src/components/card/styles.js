import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  padding: 16px;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 150px;
  gap: 10px;
  margin-top: 35px;
  height: 220px;
  border-radius: 15px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

  @media (min-width: 1024px) {
    width: 200px;
    height: 250px;
  }
  nav {
    display: flex;
    align-items: center;
    height: 70px;
    margin-bottom: 15px;
    img {
      width: 70px;
    }
  }
  section {
    font-size: 12px;
    font-family: "Convergence", sans-serif;
    text-align: center;
    height: 20px;
  }
`;

export const Status = styled.div`
  font-size: 12px;
  color: ${(props) => (props.active ? "red" : "green")};
  margin-top: 10px;
  font-family: "Comfortaa", sans-serif;
`;

export const Button = styled.div`
  button {
    cursor: pointer;
    width: 97px;
    height: 27px;
    border: none;
    border-radius: 15px;
    background-color: #80e144;
    color: white;
    font-weight: 300;
    transition: transform 0.3s ease;

    &:hover {
      opacity: 0.9;
      transform: scale(1.07);
    }
    &:disabled {
      background: #ccc;
      cursor: not-allowed;
    }
  }
`;
