import styled from "styled-components";

export const Container = styled.div`
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Content = styled.div`
  width: 100%;
  background: rgba(17, 17, 22, 0.8);
  background-image: url("https://skylab.rocketseat.com.br/static/3b7ad20da6a7ef2aa482d4cd5aedf9d4.png");
  border: 3px solid #0b0a0d;
  width: 700px;
  height: 380px;
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

  & + div {
    margin-top: 100px;
  }

  > span:nth-child(1) {
    margin-bottom: 50px;
  }

  > span:nth-child(2) {
    margin-bottom: 24px;
  }

  > span:nth-child(4) {
    position: absolute;
    bottom: 24px;
  }
`;
