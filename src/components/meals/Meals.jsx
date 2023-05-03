import React from "react";
import styled from "styled-components";
import Input from "../UI/Input";
import Button from "../UI/Button";

const StyleInput = {
  width: "60px",
  height: "32px",
  borderRadius: "6px",
  border: "1px solid #d6d6d6",
};

const arrayMeals = [
  {
    menu: "Sushi",
    composition: "Finest fish and veggies",
    price: "$22.99",
    text: "Amount",
  },
  {
    menu: "Schnitzel",
    composition: "A german specialty!",
    price: "$16.0",
    text: "Amount",
  },
  {
    menu: "Barbecue Burger",
    composition: "American, raw, meaty",
    price: "$12.99",
    text: "Amount",
  },
  {
    menu: "Green Bowl",
    composition: "Healthy...and green...",
    price: "$19.99",
    text: "Amount",
  },
];

const Meals = () => {
  return (
    <Block>
      {arrayMeals.map((i) => {
        return (
          <Divide>
            <Container>
              <Menu>{i.menu}</Menu>
              <Composition>{i.composition}</Composition>
              <Price>{i.price}</Price>
            </Container>
            <DivInputAndButtonAdd>
              <Box>
                <Amount>{i.text}</Amount>
                <Input style={StyleInput} />
              </Box>
              <Button style={ButtonStyle}> + Add</Button>
            </DivInputAndButtonAdd>
          </Divide>
        );
      })}
    </Block>
  );
};

const Block = styled.div`
  width: 1039px;
  height: auto;
  border-radius: 16px;
  background-color: #fff;
  margin-left: 201px;
  margin-top: 135px;
  padding-bottom: 36px;
`;

const Menu = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
`;

const Composition = styled.p`
  font-family: "Poppins";
  font-style: italic;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #222222;
  width: 184px;
  margin-top: 5px;
`;

const Price = styled.div`
  color: #ad5502;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 2;
`;

const Divide = styled.div`
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  margin-left: 40px;
  margin-top: 40px;
  margin-right: 620px;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 12px;
`;

const Amount = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  /* margin-right: 20px; */
`;
const ButtonStyle = {
  width: "99px",
  background: "#8A2B06",
  height: "41px",
  borderRadius: "20px",
  border: "none",
  color: "#fff",
  cursor: "pointer",
  textTransform: "uppercase",
  "&:hover": {
    background: " #4d1601",
  },
  marginLeft: "60px",
};

const DivInputAndButtonAdd = styled.div`
  width: 155px;
  height: 85px;
  margin-top: 40px;
`;

export default Meals;
