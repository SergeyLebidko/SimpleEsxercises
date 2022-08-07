import React, { useState } from 'react';
import styled from 'styled-components';

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const buttonClickHandler = () => setIsOpen(old => !old);

    return (
      <Container isOpen={isOpen}>
        <Button isOpen={isOpen} onClick={buttonClickHandler} />
      </Container>
    );
}

const Container = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: ${props => props.isOpen ? "0" : "-260"}px;
  width: 300px;
  height: 100vh;
  background-color: whitesmoke;
  border-right: 1px solid lightgray;
  transition: all 700ms;
  box-shadow: 3px 0 10px rgba(50, 50, 50, 0.2);
`;

const Button = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  transition: all 700ms;
  background-color: ${props => props.isOpen ? "DeepSkyBlue" : "LightGrey"};
  cursor: pointer;
`;

export default Menu;