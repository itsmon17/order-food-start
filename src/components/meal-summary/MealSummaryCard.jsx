import React from "react";
import styled from "styled-components";

const MealSummaryCard = () => {
  return (
    <Container>
      <h1>Delicious Food, Delivered To You</h1>
      <Paragraph>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </Paragraph>
      <Paragraph>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by  experienced chefs!
      </Paragraph>
    </Container>
  );
};

const Container = styled.div`

  width: 856px;
  height: 270px;
  background: #383838;
  box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.3);
  border-radius: 16px;
  margin-left: 50px;
  position: absolute;
  z-index: 1;
  top: 358px;
  left: 257px;
  h1 {
    color: #fff;
    text-align: center;
    padding-top: 36px;
    margin-left: 10px;
    font-weight: 600;
    border-top: 36px;
    margin: 0;
  }
`;
const Paragraph = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  padding-top: 28px;
  margin-left: 54px;
  margin-right: 54px;
  margin: 0;
`;

const P = styled.p`
  color: #fff;
`;

export default MealSummaryCard;
