import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 70px 25px 25px;

  @media (max-width: 1120px) {
    padding: 20px;
  }
`;

export const Content = styled.div`
  max-width: 1366px;
  padding: 0 30px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1120px) {
    padding: 0px;
  }
`;
