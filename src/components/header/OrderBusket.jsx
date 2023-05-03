import React from "react";
import styled from "styled-components";
import { ReactComponent as BasketIcon } from "../../assets/icons/Vector.svg";

const OrderBusket = ({ children }) => {
  return (
    <Button>
      <BasketIcon />{" "}
      <OrderBasketTitle>
        {" "}
        {children} <OrderBasketCount>7 </OrderBasketCount>{" "}
      </OrderBasketTitle>
    </Button>
  );
};

const Button = styled.button`
  width: 249px;
  height: 59px;
  background: #5a1f08;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #4d1601;
  }
`;

const OrderBasketTitle = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  margin: 0 24px 0 13px;
`;

const OrderBasketCount = styled.span`
  background: #8a2b06;
  border-radius: 30px;
  padding: 4px 13px;
  color: #fff;
`;

export default OrderBusket;
