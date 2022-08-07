import React from 'react';
import { HashRouter } from 'react-router-dom';
import Menu from './Menu';
import styled from 'styled-components';

function App() {
  return (
    <HashRouter>
      <Menu />
      <Container>
        Приложение для отработки навыков и приемов работы с React и его инфораструктурой
      </Container>
    </HashRouter>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default App;
