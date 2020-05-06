import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: rgba(17, 17, 22, 0.8);
  width: 700px;
  height: 380px;
  border-radius: 4px;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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
