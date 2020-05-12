import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 100px 25px 25px;

  @media (max-width: 1120px) {
    padding: 20px;
  }
`;

export const Content = styled.div`
  max-width: 1180px;
  padding: 0 30px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1120px) {
    padding: 0px;
  }

  hr {
    margin: 72px 0px;
    border-width: 1px 0px 0px;
    border-top: 1px solid #29292e;
  }
`;

export const MainTitle = styled.div`
  text-align: center;

  h1 {
    font-size: 36px;
    font-weight: 900;
    line-height: 1.35;
  }
`;

export const Game = styled.div``;

export const Modules = styled.main``;
