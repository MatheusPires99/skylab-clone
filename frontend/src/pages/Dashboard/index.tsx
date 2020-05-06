import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import api from "../../services/api";

import Header from "../../components/Header";

import {
  Container,
  Content,
  Journeys,
  Journey,
  JourneyContent,
} from "./styles";

interface Journey {
  id: number;
  content: "starter" | "lauchbase" | "gostack";
  number: number;
  image_url: string;
  description: string;
  link_to: string;
  active: boolean;
}

const Dashboard: React.FC = () => {
  const [journeys, setJourneys] = useState<Journey[]>([]);

  useEffect(() => {
    async function loadJourneys(): Promise<void> {
      const response = await api.get("journeys");

      setJourneys(response.data);
    }

    loadJourneys();
  }, []);

  return (
    <>
      <Header />

      <Container>
        <Content>
          <Journeys>
            {journeys.map((journey) => (
              <Link to="/starter">
                <Journey type={journey.content} active={journey.active}>
                  <JourneyContent>
                    <span>{journey.number}</span>

                    <div>
                      <img src={journey.image_url} alt="Skylab" />
                    </div>

                    <p>{journey.description}</p>

                    {journey.active ? (
                      <div />
                    ) : (
                      <button type="button">
                        <strong>Garanta sua vaga </strong>
                        para a próxima turma!
                      </button>
                    )}
                  </JourneyContent>
                </Journey>
              </Link>
            ))}

            {/* <div>
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
            </div> */}
          </Journeys>
        </Content>
      </Container>
    </>
  );
};

export default Dashboard;
