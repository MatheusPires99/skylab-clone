import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  .css-si1nq6-SkeletonTheme {
    width: 100%;

    display: flex;
  }
`;

export const Sidebar = styled.aside`
  min-width: 350px;
  height: 100%;
  background: #202024;
  padding: 32px;
  border-radius: 5px;
  margin-right: 60px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  section + section {
    width: 100%;
    margin-top: 40px;
    padding-top: 40px;
    border-top: 1px solid #323238;

    .title {
      margin-bottom: 32px;
    }
  }
`;

export const UserInfo = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  > span {
    margin-bottom: 32px;
  }
`;

export const Inventory = styled.section`
  > span {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(56px, 1fr));
    grid-gap: 8px;
  }
`;

export const UtilsLinks = styled.section`
  span + span {
    margin-top: 16px;
  }
`;

export const Extra = styled.section`
  display: flex;

  span + span {
    margin-left: 16px;
  }
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

  > span {
    margin-bottom: 48px;
  }
`;

export const Module = styled.div`
  background: #202024;
  border: 2px solid #202024;
  border-radius: 5px;
  padding: 32px;

  & + div {
    margin-top: 32px;
  }
`;

export const ModuleDetails = styled.div`
  margin-bottom: 24px;

  display: flex;
  align-items: flex-start;

  > span {
    margin-right: 32px;
  }

  div {
    > span:nth-child(1) {
      span {
        margin-bottom: 24px;
      }
    }

    > span:nth-child(2) {
      display: flex;
      flex-direction: column;

      span + span {
        margin-top: 8px;
      }
    }
  }
`;

export const PercentageCompleted = styled.div`
  display: flex;
  align-items: center;

  > span {
    display: flex;
    align-items: center;

    > span {
      margin-right: 28px;
    }
  }
`;
