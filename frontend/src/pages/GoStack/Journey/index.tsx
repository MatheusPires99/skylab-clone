import React, { useState, useEffect } from "react";

import api from "../../../services/api";

import Header from "../../../components/Header";
import SideBar from "./Sidebar";
import Loading from "./Loading";

import {
  Container,
  Content,
  MainTitle,
  Game,
  Journey,
  Nivel,
  Module,
  ModuleDetails,
  PercentageCompleted,
  Challenge,
} from "./styles";

interface Challenges {
  id: number;
  title: string;
  description: string;
  status: boolean;
  delivered_date: string;
  scored?: number;
}

interface Classes {
  id: number;
  image_url: string;
  title: string;
  description: string;
  percentage_completed: number;
  classes_number: 6;
  challenge?: Challenges;
}

interface Journey {
  id: number;
  title: string;
  classes: Classes[];
}

const GoStackJourney: React.FC = () => {
  const [goStackJourney, setGoStackJourney] = useState<Journey[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadGoStackJourney(): Promise<void> {
      setLoading(true);

      const response = await api.get("gostack-journey");

      setGoStackJourney(response.data);

      setLoading(false);
    }

    loadGoStackJourney();
  }, []);

  return (
    <>
      <Header goBackLink="/gostack" fixed />

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

          <>
            {loading ? (
              <Loading />
            ) : (
              <Game>
                <SideBar />

                <Journey>
                  {goStackJourney.map((journey) => (
                    <Nivel key={journey.id}>
                      <h2>{journey.title}</h2>

                      {journey.classes.map((journeyClass) => (
                        <>
                          <Module key={journeyClass.id}>
                            <ModuleDetails>
                              <img
                                src={journeyClass.image_url}
                                alt={journeyClass.title}
                              />

                              <div>
                                <div>
                                  <h3>{journeyClass.title}</h3>
                                  <span>
                                    {journeyClass.classes_number} aulas
                                  </span>
                                </div>
                                <p>{journeyClass.description}</p>
                              </div>
                            </ModuleDetails>

                            <PercentageCompleted
                              percentageCompleted={
                                journeyClass.percentage_completed
                              }
                            >
                              <span>
                                {journeyClass.percentage_completed}% completo
                              </span>
                              <div />
                            </PercentageCompleted>
                          </Module>

                          {journeyClass.challenge && (
                            <Challenge status={journeyClass.challenge.status}>
                              <h3>{journeyClass.challenge.title}</h3>
                              <p>{journeyClass.challenge.description}</p>

                              <div className="challenge-status">
                                <div>
                                  {journeyClass.challenge.status ? (
                                    <>
                                      <span>
                                        Nota:{" "}
                                        <strong>
                                          {journeyClass.challenge.scored}.00
                                        </strong>
                                      </span>
                                    </>
                                  ) : (
                                    <strong>Em análise</strong>
                                  )}
                                </div>

                                <div>
                                  <span>Entregue:</span>
                                  <strong>27/04/20</strong>
                                </div>
                              </div>
                            </Challenge>
                          )}
                        </>
                      ))}
                    </Nivel>
                  ))}
                </Journey>
              </Game>
            )}
          </>
        </Content>
      </Container>
    </>
  );
};

export default GoStackJourney;
