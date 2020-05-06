import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 100px 30px 30px;

  @media (max-width: 768px) {
    padding: 25px 20px 20px;
  }
`;

export const Content = styled.div`
  max-width: 1166px;
  width: 100%;
  margin: 0 auto;

  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Sidebar = styled.aside`
  position: sticky;
  top: 71px;
  width: 325px;
  height: calc(100vh - 80px);

  @media (max-width: 768px) {
    top: 0px;
    width: 100%;
    height: auto;
    margin-bottom: 32px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      width: 72px;
    }
  }

  p {
    color: #87868b;
    line-height: 1.5;
    margin-top: 16px;

    @media (max-width: 768px) {
      font-size: 12px;
      margin: 0px;
      padding-left: 16px;
    }
  }
`;

export const StarterClasses = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 1 0%;
`;

interface ClassProps {
  percentage: number;
  content: "js" | "es6" | "nodejs" | "reactjs" | "reactnative";
}

const ClassTypeVariations = {
  js: css`
    &:hover {
      border-color: #f7de20;
    }

    &::after {
      background: #f7de20;
    }

    section div svg {
      color: #f7de20;
    }

    strong {
      color: #f7de20;
    }
  `,
  es6: css`
    &:hover {
      border-color: #ff7d40;
    }

    &::after {
      background: #ff7d40;
    }

    section div svg {
      color: #ff7d40;
    }

    strong {
      color: #ff7d40;
    }
  `,
  nodejs: css`
    &:hover {
      border-color: #8cc84b;
    }

    &::after {
      background: #8cc84b;
    }

    section div svg {
      color: #8cc84b;
    }

    strong {
      color: #8cc84b;
    }
  `,
  reactjs: css`
    &:hover {
      border-color: #2ac7e3;
    }

    &::after {
      background: #2ac7e3;
    }

    section div svg {
      color: #2ac7e3;
    }

    strong {
      color: #2ac7e3;
    }
  `,
  reactnative: css`
    &:hover {
      border-color: #5568f9;
    }

    &::after {
      background: #5568f9;
    }

    section div svg {
      color: #5568f9;
    }

    strong {
      color: #5568f9;
    }
  `,
};

export const Class = styled.div<ClassProps>`
  background: rgba(17, 17, 22, 0.8);
  background-image: url("https://skylab.rocketseat.com.br/static/3b7ad20da6a7ef2aa482d4cd5aedf9d4.png");
  border: 3px solid #0b0a0d;
  border-bottom: 0px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  width: 700px;
  height: 380px;
  margin-bottom: 100px;
  position: relative;
  cursor: pointer;
  transition: border-color 0.2s;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${(props) => ClassTypeVariations[props.content]}

  &::after {
    content: "";
    position: absolute;
    bottom: 0px;
    left: 0px;
    height: 3px;
    width: ${(props) => props.percentage}%;
    transition: width 0.5s;
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 40px;
  }

  img {
    margin-bottom: 48px;
    width: 87px;
    height: 80px;

    @media (max-width: 768px) {
      margin-bottom: 32px;
    }
  }

  h1 {
    color: #fff;
    margin-bottom: 24px;
    font-size: 24px;

    @media (max-width: 768px) {
      font-size: 18px;
    }
  }

  section {
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
    }

    div {
      display: flex;
      align-items: center;

      & + div {
        margin-left: 24px;

        @media (max-width: 768px) {
          margin-left: 0px;
          margin-top: 8px;
        }
      }

      svg {
        margin-right: 8px;
      }

      span {
        color: #87868b;
        font-weight: bold;
        font-size: 14px;

        span {
          margin: 0 8px;
        }
      }
    }
  }

  strong {
    position: absolute;
    bottom: 24px;
    font-size: 14px;

    display: flex;

    > span {
      color: #87868b;
      font-weight: bold;
      margin-left: 8px;
    }
  }
`;
