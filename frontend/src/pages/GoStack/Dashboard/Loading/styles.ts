import styled from "styled-components";

export const Container = styled.div`
  max-width: 1366px;
  width: 100%;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: 330px 330px;
  grid-row-gap: 24px;
  grid-column-gap: 24px;

  @media (max-width: 1120px) {
    padding: 20px;

    grid-template-columns: 1fr;
    grid-template-rows: minmax(300px, auto);
    grid-row-gap: 20px;
  }
`;

export const Content = styled.div`
  background: #0b0a0d;
  background-image: url("https://skylab.rocketseat.com.br/static/40a7d53e92496bfa7622792225a98d1c.png");
  background-size: cover;
  border-radius: 8px;
  padding: 64px;
  border: 2px solid #0b0a0d;

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1120px) {
    height: auto;
    padding: 64px 48px;
  }

  @media (max-width: 768px) {
    padding: 30px;
  }

  &:first-child {
    grid-column: span 1 / auto;
    grid-row: span 2 / auto;

    align-items: center;

    > span:nth-child(2) {
      margin: 16px 0;
    }
  }

  &:nth-child(2),
  &:nth-child(3) {
    background-position: center bottom -40px;

    grid-column: span 2 / auto;

    align-items: flex-start;

    @media (max-width: 1120px) {
      display: flex;

      grid-column: auto;
    }

    > div {
      margin-bottom: 24px;

      display: flex;
      align-items: center;

      > span:nth-child(1) {
        margin-right: 16px;
      }
    }

    > span {
      width: 100%;
    }
  }

  @media (max-width: 1120px) {
  }
`;
