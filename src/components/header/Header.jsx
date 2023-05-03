import React from "react";
import styled from "styled-components";
import classes from "./Header,module.css";
import OrderBusket from "./OrderBusket";

const Header = () => {
  return (
    <Container>
      <h1>React Meals</h1>
      <OrderBusket>Your card</OrderBusket>
    </Container>
  );
};

const Container = styled.div`
  height: 101px;
  background-color: #8a2b06;
  padding: 0 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default Header;
