import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 180px 25px 25px;

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

export const Game = styled.div`
  width: 100%;

  display: flex;
`;

export const Journey = styled.main`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const Nivel = styled.div`
  display: flex;
  flex-direction: column;

  & + div {
    margin-top: 100px;
  }

  h2 {
    font-size: 24px;
    color: #04d361;
    margin-bottom: 48px;
  }
`;

export const Module = styled.div`
  background: #202024;
  border: 2px solid #202024;
  border-radius: 5px;
  padding: 32px;
  cursor: pointer;
  transition: border-color 0.2s;

  & + div {
    margin-top: 32px;
  }

  &:hover {
    border-color: #04d361;
  }
`;

export const ModuleDetails = styled.div`
  display: flex;
  align-items: flex-start;

  img {
    width: 80px;
    background: #121214;
    margin-right: 32px;
  }

  > div {
    margin-bottom: 32px;

    display: flex;
    flex-direction: column;

    div {
      margin-bottom: 16px;

      display: flex;
      justify-content: space-between;
      align-items: center;

      h3 {
        font-size: 24px;
      }
      span {
        font-size: 12px;
        color: #a8a8b3;
      }
    }

    p {
      line-height: 1.75;
      color: #a8a8b3;
    }
  }
`;

interface PercentageCompletedProps {
  percentageCompleted: number;
}

export const PercentageCompleted = styled.div<PercentageCompletedProps>`
  display: flex;
  align-items: center;

  span {
    font-size: 12px;
    font-weight: bold;
    color: #04d361;
    white-space: nowrap;
    margin-right: 28px;
  }

  div {
    position: relative;
    background: #323238;
    border-radius: 2px;
    width: 100%;
    height: 4px;

    &::after {
      content: "";
      position: absolute;
      bottom: 0px;
      left: 0px;
      width: ${(props) => props.percentageCompleted}%;
      height: 4px;
      background: #04d361;
      border-radius: 2px;
    }
  }
`;

interface ChallengeProps {
  status: boolean;
}

export const Challenge = styled.div<ChallengeProps>`
  background: ${(props) => (props.status ? "#1c2a24" : "#262115")};
  padding: 32px;
  border-radius: 5px;
  margin-bottom: 32px;

  h3 {
    font-size: 24px;
    margin-bottom: 16px;
  }

  p {
    line-height: 1.75;
    color: #a8a8b3;
    margin-bottom: 32px;
  }

  .challenge-status {
    font-size: 15px;

    display: flex;
    align-items: center;

    div:nth-child(1) {
      margin-right: 24px;

      strong {
        color: ${(props) => (props.status ? "#04d361" : "#f7df1e")};
      }
    }

    div:nth-child(2) {
      span {
        margin-right: 8px;
      }

      strong {
        color: ${(props) => (props.status ? "#04d361" : "#f7df1e")};
      }
    }
  }
`;
