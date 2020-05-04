import React from "react";
import { Link } from "react-router-dom";
import { MdNotifications } from "react-icons/md";

import RocketseatLogo from "../../assets/rocketseat-logo.svg";
import Avatar from "../../assets/avatar.jpg";

import GoBack from "./GoBack";

import { Container, Content, LeftContent, RightContent } from "./styles";

interface HeaderProps {
  hasGoBack?: boolean;
}

const Header: React.FC<HeaderProps> = ({ hasGoBack }) => {
  return (
    <Container>
      <Content>
        <LeftContent>
          <Link to="/">
            <img src={RocketseatLogo} alt="Rocketseat" />
          </Link>

          {hasGoBack && <GoBack />}
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
