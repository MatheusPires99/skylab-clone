import styled from "styled-components";

export const Container = styled.div`
  max-width: 1180px;
  width: 100%;
  margin: 0 auto;
`;

export const Content = styled.div`
  width: 100%;

  display: flex;
`;

export const Sidebar = styled.aside`
  width: 350px;
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
