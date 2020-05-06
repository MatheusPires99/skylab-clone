import React from "react";
import { Link } from "react-router-dom";

import Starter from "../../assets/starter.svg";
import Lauchbase from "../../assets/lauchbase.svg";
import GoStack from "../../assets/gostack.svg";

import Header from "../../components/Header";

import {
  Container,
  Content,
  Journeys,
  Journey,
  JourneyContent,
} from "./styles";

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />

      <Container>
        <Content>
          <Journeys>
            <Link to="/starter">
              <Journey type="starter" active>
                <JourneyContent>
                  <span>01</span>

                  <div>
                    <img src={Starter} alt="Starter" />
                  </div>

                  <p>
                    <strong>Torne-se um programador desejado</strong>
                    no mercado com esses cursos gratuitos
                  </p>
                </JourneyContent>
              </Journey>
            </Link>

            <div>
              <Journey type="lauchbase" active={false}>
                <JourneyContent>
                  <span>02</span>

                  <div>
                    <img src={Lauchbase} alt="Lauchbase" />
                  </div>

                  <p>
                    <strong>Domine programação do zero</strong>e tenha acesso às
                    melhores oportunidades do mercado
                  </p>
                </JourneyContent>

                <button type="button">
                  <strong>Garanta sua vaga </strong>
                  para a próxima turma!
                </button>
              </Journey>
            </div>

            <Link to="/">
              <Journey type="gostack" active>
                <JourneyContent>
                  <span>03</span>

                  <div>
                    <img src={GoStack} alt="GoStack" />
                  </div>

                  <p>
                    <strong>Treinamento imersivo</strong>
                    nas tecnologias mais modernas de desenvolvimento web e
                    mobile
                  </p>
                </JourneyContent>
              </Journey>
            </Link>
          </Journeys>
        </Content>
      </Container>
    </>
  );
};

export default Dashboard;
