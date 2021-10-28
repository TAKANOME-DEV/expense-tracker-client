import React, { useContext, useState } from "react";
import { Context } from "../context/GlobalState";
import styled from "styled-components";

const Title = styled.h3`
  margin-bottom: 10px;
  text-transform: uppercase;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px 0;
  font-size: 28px;
  font-weight: bold;
  box-shadow: ${({ theme }) => theme.boxShadow};
  background-color: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.body};
  border-radius: 20px;
  cursor: pointer;
`;
const Label = styled.label`
  font-size: 20px;
  margin-bottom: 10px;
`;
const Input = styled.input`
  font-size: 20px;
  padding: 8px 10px;
  border-radius: 10px;
  border: 3px solid ${({ theme }) => theme.text};
  outline: none;
`;

const AddTransaction = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(Context);

  const handleTextChange = (e) => {
    setName(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      name,
      amount,
    };
    addTransaction(newTransaction);
  };

  return (
    <div>
      <Title>Add New Transaction</Title>
      <hr />
      <form onSubmit={handleSubmit}>
        <Section>
          <Label>Text</Label>
          <Input
            required
            value={name}
            placeholder="Enter Text..."
            type="text"
            onChange={handleTextChange}
          />
        </Section>
        <Section>
          <Label>Amount</Label>
          <Input
            required
            value={amount}
            placeholder="Enter Amount..."
            type="number"
            onChange={handleAmountChange}
          />
        </Section>
        <Button>Add Transaction</Button>
      </form>
    </div>
  );
};

export default AddTransaction;
