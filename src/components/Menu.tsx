import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const buttonClickHandler = useCallback(() => setIsOpen(old => !old), []);

    const closeMenu = useCallback(() => setIsOpen(false), []);

    return (
      <Container isOpen={isOpen}>
        <Button isOpen={isOpen} onClick={buttonClickHandler} />
        <Items>
          <Item>
            <Link to="/page1" onClick={closeMenu}>Проект 1</Link>
          </Item>
          <Item>
            <Link to="/page2" onClick={closeMenu}>Проект 2</Link>
          </Item>
          <Item>
            <Link to="/page3" onClick={closeMenu}>Проект 3</Link>
          </Item>
          <Item>
            <Link to="/page4" onClick={closeMenu}>Проект 4</Link>
          </Item>
        </Items>
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

const Item = styled.li`
  a {
    display: block;
    padding: 16px 24px;
    font-family: Roboto;
    text-decoration: none;
    text-transform: uppercase;
    color: black;
    letter-spacing: 2px;
    transition: all 300ms;
  }

  &:hover a {
    color: dodgerblue;
    padding-left: 32px;
  }
`;

const Items = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 50px;

  ${Item} + ${Item} {
    border-top: 1px dashed silver;
  }
`;



export default Menu;