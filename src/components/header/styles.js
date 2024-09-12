import styled from "styled-components";

export const Container = styled.div`
  img {
    width: 100%;

    @media (min-width: 1024px) {
      height: 250px;
      object-fit: cover;
    }
  }
`;
