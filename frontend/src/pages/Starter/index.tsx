import React, { useState, useEffect } from "react";
import { MdPlayCircleFilled, MdAccountBox } from "react-icons/md";

import api from "../../services/api";

import starter2 from "../../assets/starter2.svg";

import Header from "../../components/Header";

import { Container, Content, Sidebar, StarterClasses, Class } from "./styles";

interface StarterClass {
  id: string;
  content: "js" | "es6" | "nodejs" | "reactjs" | "reactnative";
  image_url: string;
  title: string;
  modules: number;
  classes_number: 23;
  teacher: string;
  percentage_completed: number;
}

const Starter: React.FC = () => {
  const [starterClasses, setStarterClasses] = useState<StarterClass[]>([]);

  useEffect(() => {
    async function loadStarterClasses(): Promise<void> {
      const response = await api.get("/starter");

      setStarterClasses(response.data);
    }

    loadStarterClasses();
  }, []);

  return (
    <>
      <Header goBackLink="/" />
      <Container>
        <Content>
          <Sidebar>
            <img src={starter2} alt="Starter" />

            <p>
              Torne-se um programador desejado no mercado com esses cursos
              gratuitos
            </p>
          </Sidebar>

          <StarterClasses>
            {starterClasses.map((starterClass) => (
              <Class
                percentage={starterClass.percentage_completed}
                content={starterClass.content}
                key={starterClass.id}
              >
                <img src={starterClass.image_url} alt={starterClass.title} />

                <h1>{starterClass.title}</h1>

                <section>
                  <div>
                    <MdPlayCircleFilled size={20} />
                    <span>
                      {starterClass.modules > 1 && (
                        <>
                          {starterClass.modules} módulos
                          <span>|</span>
                        </>
                      )}
                      {starterClass.classes_number} aulas
                    </span>
                  </div>

                  <div>
                    <MdAccountBox size={20} />
                    <span>{starterClass.teacher}</span>
                  </div>
                </section>

                <strong>
                  {starterClass.percentage_completed}%<span>completo</span>
                </strong>
              </Class>
            ))}
          </StarterClasses>
        </Content>
      </Container>
    </>
  );
};

export default Starter;
