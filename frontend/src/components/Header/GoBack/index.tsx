import React from "react";
import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";

import { Container } from "./styles";

const GoBack: React.FC = () => {
  return (
    <Container>
      <Link to="/">
        <MdArrowBack color="#fff" />
        <span>Voltar</span>
      </Link>
    </Container>
  );
};

export default GoBack;
