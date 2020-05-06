import styled from "styled-components";
import { lighten } from "polished";

export const Container = styled.header`
  background: #111116;
  width: 100%;
  height: 80px;
  padding: 0 30px;

  display: flex;

  @media (max-width: 768px) {
    height: 60px;
    padding: 0 20px;
  }
`;

export const Content = styled.div`
  max-width: 1366px;
  width: 100%;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LeftContent = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    img {
      width: 112px;
    }
  }
`;

export const BackToPreviousPage = styled.div`
  margin-left: 56px;

  display: flex;
  align-items: center;

  span {
    color: #fff;
    font-size: 15px;
    margin-left: 8px;
    font-weight: bold;

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const RightContent = styled.div`
  display: flex;
  align-items: center;

  button {
    background: #19181f;
    border: 0;
    border-radius: 4px;
    padding: 10px;
    margin-right: 16px;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background: ${lighten(0.05, "#19181f")};

      > svg {
        color: #7159c1;
      }
    }

    svg {
      color: #fff;
    }
  }

  a {
    display: flex;
    align-items: center;

    div {
      margin-right: 16px;
      text-align: right;

      display: flex;
      flex-direction: column;

      @media (max-width: 768px) {
        display: none;
      }

      strong {
        color: #fff;
        margin-bottom: 6px;
      }

      small {
        color: #87868b;
        font-size: 12px;
      }
    }

    img {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      border: 3px solid #7159c1;

      @media (max-width: 768px) {
        width: 36px;
        height: 36px;
      }
    }
  }
`;
