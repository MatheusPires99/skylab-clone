import React from "react";

import avatar from "../../../../assets/avatar.jpg";

import {
  Container,
  UserInfo,
  Inventory,
  UtilsLinks,
  ExtraInfo,
} from "./styles";

const SideBar: React.FC = () => {
  return (
    <Container>
      <UserInfo>
        <img src={avatar} alt="Matheus Pires" />
        <h3>Matheus Pires</h3>
      </UserInfo>

      <Inventory>
        <h3>Inventário</h3>
      </Inventory>

      <UtilsLinks>
        <h3>Links úteis</h3>

        <nav>
          <a
            href="https://www.notion.so/Cronograma-de-libera-o-b54290a2b0db41239a260d1dbf5f695d"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cronograma de estudos
          </a>
          <a
            href="https://www.notion.so/Desafios-e-recompensas-49a52780fa0844b5bb77b51d4c5b89bf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Desafios e recompensas
          </a>
          <a
            href="https://www.notion.so/Suporte-aos-alunos-8011b127fe794183be1efad96afe5663"
            target="_blank"
            rel="noopener noreferrer"
          >
            Suporte aos alunos
          </a>
        </nav>
      </UtilsLinks>

      <ExtraInfo />
    </Container>
  );
};

export default SideBar;
