import React, { useContext } from "react";
import { Context } from "../context/GlobalState";
import { numberWithCommas } from "../utils/format";
import styled from "styled-components";

const Title = styled.h2`
  margin: 0;
  text-transform: uppercase;
`;

const Total = styled.p`
  font-size: 30px;
  letter-spacing: 2px;
`;

const Balance = () => {
  const { transactions } = useContext(Context);

  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, num) => (acc += num), 0).toFixed(2);

  return (
    <div>
      <Title>Your Balance</Title>
      <Total>${numberWithCommas(total)}</Total>
    </div>
  );
};

export default Balance;
