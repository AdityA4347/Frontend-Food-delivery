import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { FoodCardContainer } from "./components/SearchResult/SearchResult";
import { Button, Container, TopContainer } from "./App";
import { FaCartArrowDown } from "react-icons/fa6";
import Cartitems from "./Cartitems";
// import { useNavigate } from "react-router-dom";
// import { useLocation } from "react-router-dom";
import { MdOutlineDeleteOutline } from "react-icons/md";

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
const Cart = (data, { clearCart }) => {
  // const { state } = useLocation();
  // const data = state;
  // const navigate = useNavigate();
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
      <CartCardContainer>
        {/* <Cartitems data={data} />*/}
        <FoodCardContainer>
          <Cartcontainer>
            <Cartfood>
              <p className="heading">My-Cart</p>
              {data.data.map((item) => (
                <Cartcard key={item.name}>
                  <div className="fooditem">
                    <img className="cart-food-image" src={item.image} alt="" />
                    <p>{item.name}</p>
                  </div>
                  <div className="options">
                    {/* <MdOutlineDeleteOutline /> */}
                  </div>
                </Cartcard>
              ))}
            </Cartfood>
          </Cartcontainer>
          <div className="clear-button">
            <Clearbutton>clear-items</Clearbutton>
          </div>
        </FoodCardContainer>
      </CartCardContainer>
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
  .fooditem {
    display: flex;
    align-items: center;
  }
  .options {
    display: flex;
    justify-content: right;
  }
  .cart-food-image {
    height: 45px;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 10px;
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
const Clearbutton = styled.button`
  padding: 6px 12px;
  border-radius: 5px;
  background: #ff4343;
  border: none;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #da0d0d;
  }
`;
