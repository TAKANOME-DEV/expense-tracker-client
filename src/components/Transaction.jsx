import React, { useContext } from "react";
import { Context } from "../context/GlobalState";
import { formatMoney } from "../utils/formatMoney";
import { Amount, Button, List } from "./styles/Transaction.styled";

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(Context);

  const sign = transaction.amount < 0 ? "-" : "+";

  const color =
    transaction.amount > 0 ? "var(--green-color)" : "var(--red-color)";

  return (
    <List color={color}>
      {transaction.name}
      <Amount>
        {sign}
        {formatMoney(transaction.amount)}
      </Amount>
      <Button onClick={() => deleteTransaction(transaction.id)}>x</Button>
    </List>
  );
};

export default Transaction;
