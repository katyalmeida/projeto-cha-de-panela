/* eslint-disable import/prefer-default-export */
import styled, { keyframes } from "styled-components";

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

export const ScrollToTopButton = styled.button`
  position: fixed;
  bottom: 25px;
  right: 12px;
  display: ${({ visible }) => (visible ? "block" : "none")};
  background-color: #832b47;
  color: white;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  font-size: 24px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  animation: ${fadeIn} 0.3s ease-out;

  img {
    width: 15px;
    margin-top: 5px;
  }

  &:hover {
    opacity: 0.8;
    transform: scale(1.1);
  }
`;
