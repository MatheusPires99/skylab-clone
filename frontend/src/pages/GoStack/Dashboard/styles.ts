import styled from "styled-components";
import { Link } from "react-router-dom";

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

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: 330px 330px;
  grid-row-gap: 24px;
  grid-column-gap: 24px;

  @media (max-width: 1120px) {
    grid-template-columns: 1fr;
    grid-template-rows: minmax(300px, auto);
    grid-row-gap: 20px;
  }
`;

export const Card = styled(Link)`
  background: #0b0a0d;
  background-image: url("https://skylab.rocketseat.com.br/static/40a7d53e92496bfa7622792225a98d1c.png");
  background-size: cover;
  border-radius: 8px;
  padding: 64px;
  border: 2px solid #0b0a0d;
  transition: all 0.2s;

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

  &:hover {
    border-color: #04d361;
    transform: translateY(-8px);
  }

  &:first-child {
    grid-column: span 1 / auto;
    grid-row: span 2 / auto;

    align-items: center;

    @media (max-width: 768px) {
      grid-column: span 1 / auto;
    }

    div {
      width: 240px;
      margin-bottom: 52px;

      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 240px;

        @media (max-width: 768px) {
          width: 200px;
        }
      }
    }

    p {
      text-align: center;
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

    div {
      margin-bottom: 24px;

      display: flex;
      align-items: center;

      h1 {
        font-size: 30px;
        color: #fff;
        margin-left: 16px;

        @media (max-width: 768px) {
          font-size: 24px;
        }
      }
    }
  }

  p {
    color: #87868b;
    line-height: 25px;
    max-width: 310px;

    @media (max-width: 1120px) {
      font-size: 15px;
    }
  }
`;
