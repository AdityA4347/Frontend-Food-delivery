import React from "react";
import styled from "styled-components";
import { Button } from "./App";
const Summary = (props) => {
  return (
    <>
      <SummaryContainer>
        <Button className="button">Total price : ₹{props.price}</Button>
      </SummaryContainer>
    </>
  );
};

export default Summary;
const SummaryContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  .button {
    font-size: 15px;
    width: 30%;
    padding-left: 10%;
  }
`;
