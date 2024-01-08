import React from "react";
import styled from "styled-components";
import { FoodCardContainer } from "./components/SearchResult/SearchResult";
import { Container } from "./App";

const Cartitems = (props) => {
  const { data } = props;
  return (
    <FoodCardContainer>
      <Cartcontainer>
        <Cartfood>
          <p className="heading">In Cart</p>
          {data.map((item) => (
            <Cartcard key={item.name}>
              <img className="cart-food-image" src={item.image} alt="" />
              <p>{item.name}</p>
            </Cartcard>
          ))}
        </Cartfood>
      </Cartcontainer>
    </FoodCardContainer>
  );
};

export default Cartitems;
const Cartcontainer = styled.section`
  display: flex;
  justify-content: center;
`;
const Cartfood = styled.section`
  .heading {
    display: flex;
    justify-content: center;
    font-size: 20px;
    margin-bottom: 3%;
  }
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  justify-content: center;
  align-content: center;
  padding-top: 80px;
`;
const Cartcard = styled.section`
  .cart-food-image {
    height: 45px;
  }
  display: flex;
  align-items: center;
  gap: 10px;
  width: 350px;
  height: 50px;
  border-radius: 20px;
  border: 0.659px solid #98f9ff;
  background: url(.png),
    lightgray 0% 0% / 50.8334219455719px 50.8334219455719px repeat,
    radial-gradient(
      151.92% 127.02% at 15.32% 21.04%,
      rgba(165, 239, 255, 0.2) 0%,
      rgba(110, 191, 244, 0.04) 77.08%,
      rgba(70, 144, 212, 0) 100%
    );
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(13.1842px);
`;
