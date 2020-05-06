import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import api from "../../services/api";

import Header from "../../components/Header";
import Loading from "./Loading";

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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadJourneys(): Promise<void> {
      setLoading(true);

      const response = await api.get("journeys");

      setJourneys(response.data);

      setLoading(false);
    }

    loadJourneys();
  }, []);

  return (
    <>
      <Header />

      <Container>
        <Content>
          {loading ? (
            <Loading />
          ) : (
            <Journeys>
              {journeys.map((journey) => (
                <Link to={journey.active ? journey.link_to : "#"}>
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
            </Journeys>
          )}
        </Content>
      </Container>
    </>
  );
};

export default Dashboard;
