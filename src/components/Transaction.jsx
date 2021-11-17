import React, { useContext } from "react";
import { Context } from "../context/GlobalState";
import { numberWithCommas } from "../utils/format";
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
        {sign}${numberWithCommas(Math.abs(transaction.amount))}
      </Amount>
      <Button onClick={() => deleteTransaction(transaction.id)}>x</Button>
    </List>
  );
};

export default Transaction;
