import React, { useState } from "react";
import styled from "styled-components";
import { FoodCardContainer } from "./components/SearchResult/SearchResult";
import { Container } from "./App";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeItem } from "./features/cartSlice";
import { Button } from "./App";
import Summary from "./Summary";
import {
  increaseItemQuantity,
  decreaseItemQuantity,
} from "./features/cartSlice";
import { getCartTotal } from "./features/cartSlice";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Cartitems = (props) => {
  const { data } = props;
  const dispatch = useDispatch();
  const { cart, totalQuantity, totalPrice, itemTotal } = useSelector(
    (state) => state.allCart
  );
  const [showtotalprice, setShowtotalprice] = useState(true);
  useEffect(() => {
    dispatch(getCartTotal());
    if (cart.length === 0) {
      setShowtotalprice(false);
    } else {
      setShowtotalprice(true);
    }
  }, [cart]);

  return (
    <FoodCardContainer>
      <Cartcontainer>
        <Cartfood>
          <p className="heading">In Cart</p>
          {data.map((item) => (
            <Cartcard key={item.name}>
              <div className="item-info">
                <img className="cart-food-image" src={item.image} alt="" />
                <p>{item.name}</p>
              </div>
              <div class="quantity-container">
                <button
                  class="quantity-btn"
                  onClick={() => {
                    dispatch(decreaseItemQuantity(item.id));
                  }}
                >
                  -
                </button>
                <input
                  type="text"
                  class="quantity-input"
                  value={item.quantity}
                  readonly
                />
                <button
                  class="quantity-btn"
                  onClick={() => {
                    dispatch(increaseItemQuantity(item.id));
                  }}
                >
                  +
                </button>
              </div>
              <div>₹{item.price}</div>
              <div className="delete-icon">
                <Button
                  onClick={() => {
                    dispatch(removeItem(item.id));
                  }}
                >
                  <MdDelete />
                </Button>
              </div>
            </Cartcard>
          ))}
        </Cartfood>
      </Cartcontainer>
      {showtotalprice ? (
        <Summary quantity={totalQuantity} price={totalPrice} />
      ) : (
        <></>
      )}
    </FoodCardContainer>
  );
};

export default Cartitems;
const Cartcontainer = styled.section`
  display: flex;
  justify-content: center;
`;
const Cartfood = styled.section`
  .item-info {
    display: flex;
    align-items: center;
  }
  .delete-icon {
    margin-right: 10px;
    color: #ff4343;
  }
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
  .quantity-container {
    display: flex;
    align-items: center;
  }
  .quantity-input {
    height: 20px;
    width: 29px;
    text-align: center;
    font-size: 10px;
    border: 1px solid #3498db;
    border-radius: 4px;
    caret-color: transparent;
    padding: 8px;
    outline: none;
  }

  .quantity-btn {
    height: 20px;
    width: 20px;
    text-align: center;
    cursor: pointer;
    background-color: #ff4343;
    color: #fff;
    border: 1px solid #ff4343;
    border-radius: 4px;
    margin: 0 5px;
    transition: background-color 0.3s ease;
  }
  .cart-food-image {
    height: 45px;
  }
  display: flex;
  align-items: center;
  justify-content: space-between;
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
