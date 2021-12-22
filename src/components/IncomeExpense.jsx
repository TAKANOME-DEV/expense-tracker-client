import React, { useContext } from "react";
//* Context
import { Context } from "../context/GlobalState";
//* Utils
import { formatMoney } from "../utils/formatMoney";
//* Styles
import {
  Income,
  Container,
  Expense,
  Title,
  IncAmount,
  ExpAmount,
} from "./styles/IncExp.styled";

const IncomeExpense = () => {
  const { transactions } = useContext(Context);

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = amounts
    .filter((num) => num < 0)
    .reduce((acc, num) => (acc += num), 0)
    .toFixed(2);

  return (
    <Container>
      <Income>
        <Title>Income</Title>
        <IncAmount>{formatMoney(income)}</IncAmount>
      </Income>
      <Expense>
        <Title>Expense</Title>
        <ExpAmount>{formatMoney(expense)}</ExpAmount>
      </Expense>
    </Container>
  );
};

export default IncomeExpense;
