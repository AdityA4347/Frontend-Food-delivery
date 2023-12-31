import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Homeui = () => {
  return (
    <Front>
      <Navitems>
        <ul>
          <li>
            <a href="\">Log in</a>
          </li>
          <li>
            <a href="\">Sign up</a>
          </li>
        </ul>
      </Navitems>
      <div className="midcont">
        <div className="content">
          <img src="logo.svg" alt="" />
          <p>Find and Order the best food in India </p>
          <Link to="food">
            <button className="foodbutton">Order now {">"}</button>
          </Link>
        </div>
      </div>
    </Front>
  );
};
export default Homeui;

const Front = styled.section`
  min-height: 85vh;
  width: 100%;
  background-image: url("/foodimg.png");
  background-size: cover;

  .midcont {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 85vh;
    .foodbutton {
      width: 200px;
      display: inline-block;
      padding: 10px 20px;
      background-color: #e21c05; /* Red color */
      color: #ffffff; /* White text color */
      text-align: center;
      text-decoration: none;
      font-size: 20px;
      font-weight: normal;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;
      border: 2px solid #ffffff;
    }
    .foodbutton:hover {
      background-color: #b33123;
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    align-items: center;
  }

  .content p {
    font-size: 35px;
  }
`;
const Navitems = styled.section`
  padding-top: 10px;
  padding-right: 10%;
  font-weight: bold;
  font-size: 20px;
  ul {
    display: flex;
    justify-content: flex-end;
    list-style: none;
  }
  li {
    margin-left: 4%;
  }
  a {
    color: white;
    text-decoration: none;
  }
`;
