import React, { useState } from "react";
//* Components
import { Balance, IncomeExpense, TransactionList, AddTransaction } from ".";
//* Styles
import { Info, Container } from "./styles/Main.styled";

const Main = ({ theme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(true);

  return (
    <Container>
      <Info>
        <Balance />
        <IncomeExpense />
      </Info>
      <TransactionList theme={theme} handleClick={handleClick} />
      {isOpen && <AddTransaction theme={theme} setIsOpen={setIsOpen} />}
    </Container>
  );
};

export default Main;
