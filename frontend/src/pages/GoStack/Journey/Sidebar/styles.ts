import styled from "styled-components";

export const Container = styled.aside`
  width: 350px;
  background: #202024;
  padding: 32px;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  section + section {
    width: 100%;
    margin-top: 40px;
    padding-top: 40px;
    border-top: 1px solid #323238;
  }
`;

export const UserInfo = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    border: 4px solid #04d361;
    padding: 8px;
    margin-bottom: 24px;
  }
`;

export const Inventory = styled.section`
  h2 {
    margin-bottom: 32px;
  }

  .inventory-items {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(56px, 1fr));
    grid-gap: 8px;

    &:hover > div {
      opacity: 0.5;
    }

    > div {
      position: relative;
      background: #121214;
      width: 100%;
      height: 65.5px;
      border-radius: 5px;
      transition: opacity 0.2s;

      &:hover {
        opacity: 1;
      }

      &:hover > div {
        visibility: visible;
        opacity: 1;
        transform: translateY(-10px);
      }

      img {
        padding: 10px;
      }
    }
  }
`;

export const InventoryPopUp = styled.div`
  position: absolute;
  bottom: -80px;
  left: calc(50% - 18px);
  width: 140px;
  max-width: 250px;
  padding: 8px;
  border-radius: 5px;
  font-size: 15px;
  line-height: 1.1;
  color: #e1e1e6;
  background: #121214;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.565);
  border: 2px solid #29292e;
  z-index: 2;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease 0s;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0px;
    width: 0px;
    height: 0px;
    left: 16px;
    transform: translate(-50%, -100%);
  }

  &::before {
    top: -1px;
    border-style: solid;
    border-width: 0px 10px 10px;
    border-color: transparent transparent #29292e;
  }

  &::after {
    z-index: 2;
    border-style: solid;
    border-width: 0px 8px 8px;
    border-color: transparent transparent #121214;
  }
`;

export const UtilsLinks = styled.section`
  h2 {
    margin-bottom: 32px;
  }

  nav {
    display: flex;
    flex-direction: column;

    a {
      color: #a8a8b3;
      padding-left: 16px;
      position: relative;
      transition: color 0.2s;

      & + a {
        margin-top: 16px;
      }

      &:hover {
        color: #7156c1;
      }

      &::before {
        content: "";
        position: absolute;
        left: 0px;
        top: 8px;
        width: 4px;
        height: 4px;
        background: #a8a8b3;
        border-radius: 50%;
      }
    }
  }
`;

export const Extra = styled.section`
  display: flex;

  a {
    width: 135px;
    background: #29292e;
    border: 2px solid #29292e;
    border-radius: 5px;
    padding: 24px;
    transition: border-color 0.2s;

    display: flex;
    flex-direction: column;
    justify-content: center;

    & + a {
      margin-left: 16px;
    }

    &:hover {
      border-color: #7159c1;
    }

    span {
      font-size: 14px;
      font-weight: bold;
      line-height: 1.5;
      margin-top: 16px;
    }
  }
`;
