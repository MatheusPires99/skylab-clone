import styled from "styled-components";

export const Container = styled.div`
  @media (max-width: 768px) {
    width: 100%;
  }

  > div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: minmax(650px, auto);
    grid-column-gap: 24px;
    grid-row-gap: 24px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(3, minmax(300px, auto));
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  background: rgba(17, 17, 22, 0.8);
  background-image: url("https://skylab.rocketseat.com.br/static/40a7d53e92496bfa7622792225a98d1c.png");
  border: 3px solid #0b0a0d;
  height: 650px;
  border-radius: 4px;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 40px;
  }

  > span:nth-child(1) {
    position: absolute;
    top: 64px;
  }

  > span:nth-child(2) {
    margin-bottom: 50px;
  }
`;
