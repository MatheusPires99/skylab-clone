import React from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "./routes";

import GlobalStyles from "./styles/global";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
};

export default App;
