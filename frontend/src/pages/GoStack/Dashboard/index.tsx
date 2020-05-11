import React, { useEffect, useState } from "react";

import api from "../../../services/api";

import Header from "../../../components/Header";
import Loading from "./Loading";

import { Container, Content, CardContainer, Card } from "./styles";

interface GostackCard {
  id: number;
  title?: string;
  image_url: string;
  description: string;
  link_to: string;
}

const GoStackDashboard: React.FC = () => {
  const [gostackCard, setGostackCard] = useState<GostackCard[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadGostackCard(): Promise<void> {
      setLoading(true);

      const response = await api.get("gostack");

      setGostackCard(response.data);

      setLoading(false);
    }

    loadGostackCard();
  }, []);

  return (
    <>
      <Header goBackLink="/" />

      <Container>
        <Content>
          {loading ? (
            <Loading />
          ) : (
            <CardContainer>
              {gostackCard.map((card) => (
                <Card to={card.link_to} key={card.id}>
                  <div>
                    <img src={card.image_url} alt="GoStack" />

                    <h1>{card.title}</h1>
                  </div>

                  <p>{card.description}</p>
                </Card>
              ))}
            </CardContainer>
          )}
        </Content>
      </Container>
    </>
  );
};

export default GoStackDashboard;
