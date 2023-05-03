import React from "react";
import styled from "styled-components";
import summaryImage from "../../assets/images/summary-image.png";
import MealSummaryCard from "./MealSummaryCard";

const MealSummary = () => {
  return (
    <Container>
      <img src={summaryImage}></img>
      <MealSummaryCard />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: 432px;
  }
`;

export default MealSummary;

const Aa = styled.div`
display: flex`;
