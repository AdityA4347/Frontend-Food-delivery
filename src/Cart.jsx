import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { FoodCardContainer } from "./components/SearchResult/SearchResult";
import { Button, Container, TopContainer } from "./App";
import { FaCartArrowDown } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
import Cartitems from "./Cartitems";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  getCartTotal,
  removeItem,
  decreaseItemQuantity,
  increaseItemQuantity,
} from "./features/cartSlice";

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
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1); // This will go back to the previous page
  };
  const { cart } = useSelector((state) => state.allCart);
  console.log(cart);
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
      <CartCardContainer>
        <Cartitems data={cart} />

        <Back>
          <Button onClick={goBack}>
            <IoArrowBack />
            Back
          </Button>
        </Back>
      </CartCardContainer>
    </React.StrictMode>
  );
};

export default Cart;
const Back = styled.section`
  display: flex;
  align-items: center;
  padding-left: 4%;
`;

const CartCardContainer = styled.section`
  min-height: calc(100vh - 140px);
  width: 100%;
  background-image: url("/bg.png");
  background-size: cover;
`;
