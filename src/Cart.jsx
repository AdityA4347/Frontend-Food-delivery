import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { FoodCardContainer } from "./components/SearchResult/SearchResult";
import { Container, TopContainer } from "./App";
import { FaCartArrowDown } from "react-icons/fa6";
import { useLocation } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0; 
  }
  body{
    background-color: #323334;
    color: white;
    min-height: 100vh;
    font-family: 'Inter', sans-serif;
  }
`;
const Cart = () => {
  const { state } = useLocation();
  const data = state;
  console.log(data);
  return (
    <React.StrictMode>
      <GlobalStyle />
      <Container>
        <TopContainer>
          <div className="logo">
            <img src="/logo.svg" alt="logo" />
          </div>
          <div className="my-food">
            <p>MyFood</p>
            <FaCartArrowDown></FaCartArrowDown>
          </div>
        </TopContainer>
      </Container>
      <CartCardContainer></CartCardContainer>
    </React.StrictMode>
  );
};

export default Cart;

const CartCardContainer = styled.section`
  min-height: calc(100vh - 140px);
  width: 100%;
  background-image: url("/bg.png");
  background-size: cover;
`;
