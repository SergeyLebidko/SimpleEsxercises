import React from "react";
import { HashRouter, Route, Router, Routes } from "react-router-dom";
import Menu from "./Menu";
import styled, { createGlobalStyle } from "styled-components";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import MainPage from "./pages/MainPage";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <HashRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/page1" element={<Page1 />}/>
          <Route path="/page2" element={<Page2 />}/>
          <Route path="/page3" element={<Page3 />}/>
          <Route path="/page4" element={<Page4 />}/>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
