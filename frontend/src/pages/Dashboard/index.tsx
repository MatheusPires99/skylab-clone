import React from "react";
import { Link } from "react-router-dom";

import Starter from "../../assets/starter.svg";
import Lauchbase from "../../assets/lauchbase.svg";
import GoStack from "../../assets/gostack.svg";

import Header from "../../components/Header";

import { Container, Content, Journeys, Journey } from "./styles";

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />

      <Container>
        <Content>
          <Journeys>
            <Link to="/starter">
              <Journey type="starter" active>
                <span>01</span>

                <img src={Starter} alt="Starter" />

                <p>
                  <strong>Torne-se um programador desejado</strong>
                  no mercado com esses cursos gratuitos
                </p>
              </Journey>
            </Link>

            <Journey type="lauchbase" active={false}>
              <span>02</span>

              <img src={Lauchbase} alt="Lauchbase" />

              <p>
                <strong>Domine programação do zero</strong>e tenha acesso às
                melhores oportunidades do mercado
              </p>

              <button type="button">
                <strong>Garanta sua vaga </strong>
                para a próxima turma!
              </button>
            </Journey>

            <Link to="/">
              <Journey type="gostack" active>
                <span>03</span>

                <img src={GoStack} alt="GoStack" />

                <p>
                  <strong>Treinamento imersivo</strong>
                  nas tecnologias mais modernas de desenvolvimento web e mobile
                </p>
              </Journey>
            </Link>
          </Journeys>
        </Content>
      </Container>
    </>
  );
};

export default Dashboard;
