import React, { useContext, useEffect } from "react";
import { Context } from "../context/GlobalState";
import Transaction from "./Transaction";
import styled from "styled-components";

const Container = styled.div`
  margin: 40px 0;
`;
const Title = styled.h3`
  margin-bottom: 10px;
  text-transform: uppercase;
`;

const TransactionList = () => {
  const { transactions, getTransactions } = useContext(Context);

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <Container>
      <Title>History</Title>
      <hr />
      <ul>
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </Container>
  );
};

export default TransactionList;
