import React from "react";
import { MdHelpOutline, MdCached } from "react-icons/md";

import avatar from "../../../../assets/avatar.jpg";

import {
  Container,
  UserInfo,
  Inventory,
  InventoryPopUp,
  UtilsLinks,
  Extra,
} from "./styles";

const SideBar: React.FC = () => {
  return (
    <Container>
      <UserInfo>
        <img src={avatar} alt="Matheus Pires" />
        <h2>Matheus Pires</h2>
      </UserInfo>

      <Inventory>
        <h2>Inventário</h2>

        <div className="inventory-items">
          <div>
            <img
              src="https://skylab.rocketseat.com.br/api/files/stickers-rocketseat.svg"
              alt="Combo: Stickers Rocketseat + GoStack"
            />
            <InventoryPopUp>
              Combo: Stickers Rocketseat + GoStack
            </InventoryPopUp>
          </div>
          <div>
            <img
              src="https://skylab.rocketseat.com.br/api/files/reward-5-apps.svg"
              alt="5 apps com layout para você criar"
            />
            <InventoryPopUp>5 apps com layout para você criar</InventoryPopUp>
          </div>
          <div>
            <img
              src="https://skylab.rocketseat.com.br/api/files/ui-workshop.svg"
              alt="Workshop de UI com Tiago Luchtenberg"
            />
            <InventoryPopUp>
              Workshop de UI com Tiago Luchtenberg
            </InventoryPopUp>
          </div>
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      </Inventory>

      <UtilsLinks>
        <h2>Links úteis</h2>

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

      <Extra>
        <a href="/gostack/journey">
          <MdHelpOutline size={24} color="#7159c1" />
          <span>PERGUNTAS TÉCNICAS</span>
        </a>

        <a href="/gostack/journey">
          <MdCached size={24} color="#7159c1" />
          <span>JORNADA ANTIGA</span>
        </a>
      </Extra>
    </Container>
  );
};

export default SideBar;
