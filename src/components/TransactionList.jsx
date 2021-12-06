import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { Context } from "../context/GlobalState";
import DarkPlus from "./svg/DarkPlus";
import LightPlus from "./svg/LightPlus";
import Transaction from "./Transaction";

const Container = styled.div`
  margin: 40px 0;
`;
const History = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.h3`
  margin-bottom: 10px;
  text-transform: uppercase;
`;

const TransactionList = ({ theme, handleClick }) => {
  const { transactions, getTransactions } = useContext(Context);

  useEffect(() => {
    getTransactions();
    //? eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <History>
        <Title>History</Title>
        {theme === "light" ? (
          <div onClick={handleClick}>
            <DarkPlus />
          </div>
        ) : (
          <div onClick={handleClick}>
            <LightPlus />
          </div>
        )}
      </History>
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
