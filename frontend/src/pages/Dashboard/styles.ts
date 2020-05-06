import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 70px 30px 30px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const Content = styled.div`
  max-width: 1366px;
  width: 100%;
  margin: 0px auto;
`;

export const Journeys = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: minmax(650px, auto);
  grid-column-gap: 24px;
  grid-row-gap: 24px;

  @media (max-width: 1120px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, minmax(300px, auto));
  }
`;

interface JourneyProps {
  type: "starter" | "lauchbase" | "gostack";
  active: boolean;
}

const journeyTypeVariations = {
  starter: css`
    &:hover {
      border-color: #7159c1;
    }

    span {
      color: #7159c1;
      border: 2px solid #7159c1;
    }

    p {
      strong {
        color: #7159c1;
      }
    }

    button {
      border-color: #7159c1;
      background: #7159c1;
    }
  `,
  lauchbase: css`
    &:hover {
      border-color: #fd951f;
    }

    span {
      color: #fd951f;
      border: 2px solid #fd951f;
    }

    p {
      strong {
        color: #fd951f;
      }
    }

    button {
      border-color: #fd951f;
      background: #fd951f;
    }
  `,
  gostack: css`
    &:hover {
      border-color: #04d361;
    }

    span {
      color: #04d361;
      border: 2px solid #04d361;
    }

    p {
      strong {
        color: #04d361;
      }
    }

    button {
      border-color: #04d361;
      background: #04d361;
    }
  `,
};

export const Journey = styled.div<JourneyProps>`
  background: #0b0a0d;
  background-image: url("https://skylab.rocketseat.com.br/static/40a7d53e92496bfa7622792225a98d1c.png");
  background-size: cover;
  border-radius: 8px;
  padding: 64px;
  border: 2px solid #0b0a0d;
  height: 655px;
  transition: all 0.2s;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  ${(props) => journeyTypeVariations[props.type]}

  ${(props) =>
    !props.active &&
    css`
      &:hover {
        border-color: #0b0a0d;
      }
    `}

  ${(props) =>
    props.active &&
    css`
      &:hover {
        transform: translateY(-8px);
      }
    `}

  @media (max-width: 1120px) {
    height: auto;
    padding: 64px 48px;
  }

  @media (max-width: 768px) {
    padding: 30px;
  }

  button {
    margin-top: 32px;
    border-width: 2px;
    border-style: solid;
    border-radius: 4px;
    font-size: 15px;
    padding: 15px;
    color: #222;
    transition: all 0.2s;

    &:hover {
      color: #fff;
      background: transparent;
    }
  }
`;

export const JourneyContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;

  span {
    width: 48px;
    height: 48px;
    font-weight: bold;
    border-radius: 50%;
    margin-bottom: 105px;

    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 1120px) {
      margin-bottom: 50px;
    }
  }

  div {
    height: 145px;

    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 1120px) {
      height: auto;
    }

    @media (max-width: 768px) {
      img {
        width: 80%;
      }
    }
  }

  p {
    text-align: center;
    margin-top: 55px;
    color: #87868b;
    line-height: 26px;
    max-width: 270px;

    @media (max-width: 1120px) {
      margin-top: 20px;
      font-size: 15px;
    }

    strong {
      margin-right: 6px;
    }
  }
`;
