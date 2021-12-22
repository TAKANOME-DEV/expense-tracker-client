import React, { useContext } from "react";
//* Context
import { Context } from "../context/GlobalState";
//* Utils
import { formatMoney } from "../utils/formatMoney";
//* Styles
import { Amount, Button, List } from "./styles/Transaction.styled";

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(Context);

  const color =
    transaction.amount > 0 ? "var(--green-color)" : "var(--red-color)";

  return (
    <List color={color}>
      {transaction.name}
      <Amount>{formatMoney(transaction.amount)}</Amount>
      <Button onClick={() => deleteTransaction(transaction.id)}>x</Button>
    </List>
  );
};

export default Transaction;
