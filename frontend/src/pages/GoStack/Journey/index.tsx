import React from "react";

import Header from "../../../components/Header";
import SideBar from "./Sidebar";

import { Container, Content, MainTitle, Game, Modules } from "./styles";

const GoStackJourney: React.FC = () => {
  return (
    <>
      <Header goBackLink="/gostack" />

      <Container>
        <Content>
          <MainTitle>
            <h1>
              Seja bem-vindo ao GoStack,
              <br />
              Matheus Pires
            </h1>
          </MainTitle>

          <hr />

          <Game>
            <SideBar />

            <Modules />
          </Game>
        </Content>
      </Container>
    </>
  );
};

export default GoStackJourney;
