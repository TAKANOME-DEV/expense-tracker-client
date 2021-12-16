import React, { useContext } from "react";
import { Context } from "../context/GlobalState";
import { formatMoney } from "../utils/formatMoney";
import { Total, Container, Title } from "./styles/Balance.styled";

const Balance = () => {
  const { transactions } = useContext(Context);

  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, num) => (acc += num), 0).toFixed(2);

  const color = total < 0 ? "var(--red-color)" : "var(--green-color)";

  return (
    <Container>
      <Title>Your Balance</Title>
      <Total color={color}>{formatMoney(total)}</Total>
    </Container>
  );
};

export default Balance;
