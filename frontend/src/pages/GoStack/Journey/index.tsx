import React from "react";

import Header from "../../../components/Header";

import { Container, Content } from "./styles";

const GoStackJourney: React.FC = () => {
  return (
    <>
      <Header goBackLink="/gostack" />

      <Container>
        <Content>
          <h1>teste</h1>
        </Content>
      </Container>
    </>
  );
};

export default GoStackJourney;
