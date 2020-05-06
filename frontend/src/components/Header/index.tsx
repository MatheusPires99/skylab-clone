import React from "react";
import { Link } from "react-router-dom";
import { MdNotifications, MdArrowBack } from "react-icons/md";

import RocketseatLogo from "../../assets/rocketseat-logo.svg";
import Avatar from "../../assets/avatar.jpg";

import {
  Container,
  Content,
  LeftContent,
  BackToPreviousPage,
  RightContent,
} from "./styles";

interface HeaderProps {
  goBackLink?: string;
}

const Header: React.FC<HeaderProps> = ({ goBackLink }) => {
  return (
    <Container>
      <Content>
        <LeftContent>
          <Link to="/">
            <img src={RocketseatLogo} alt="Rocketseat" />
          </Link>

          {goBackLink && (
            <BackToPreviousPage>
              <Link to={goBackLink}>
                <MdArrowBack color="#fff" size={18} />
                <span>Voltar</span>
              </Link>
            </BackToPreviousPage>
          )}
        </LeftContent>

        <RightContent>
          <button type="button">
            <MdNotifications size={24} />
          </button>

          <Link to="/">
            <div>
              <strong>Matheus Pires</strong>
              <small>matheushenriquepires99@gmail.com</small>
            </div>

            <img src={Avatar} alt="Matheus Pires" />
          </Link>
        </RightContent>
      </Content>
    </Container>
  );
};

export default Header;
