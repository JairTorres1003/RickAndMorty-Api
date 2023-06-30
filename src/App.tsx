import React from "react";
import Home from "./pages/Home/Home";
import Header from "./components/HeaderBar/HeaderBar";
import { GlobalStyle } from "./styles/GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FiltersTypes from "./components/FiltersTypes/FiltersTypes";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <main>
        <FiltersTypes />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
