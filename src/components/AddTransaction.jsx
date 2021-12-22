import React, { useContext, useState } from "react";
//* Context
import { Context } from "../context/GlobalState";
//* SVG
import LightClose from "./svg/LightClose";
import DarkClose from "./svg/DarkClose";
//* Styles
import {
  Overlay,
  Container,
  Head,
  Title,
  Form,
  Button,
  Label,
  Input,
} from "./styles/AddTransaction.styled";

const AddTransaction = ({ theme, setIsOpen }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const { addTransaction } = useContext(Context);

  const handleTextChange = (e) => setName(e.target.value);

  const handleAmountChange = (e) => setAmount(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      name,
      amount,
    };
    addTransaction(newTransaction);
    setName("");
    setAmount("");
    setIsOpen(false);
  };

  const handleClose = (e) => {
    if (e.target.id === "overlay") {
      setIsOpen(false);
    }
  };

  return (
    <Overlay onClick={handleClose} id="overlay">
      <Container>
        <Head>
          <Title>New Transaction</Title>
          {theme === "light" ? (
            <div onClick={() => setIsOpen(false)}>
              <DarkClose />
            </div>
          ) : (
            <div onClick={() => setIsOpen(false)}>
              <LightClose />
            </div>
          )}
        </Head>
        <Form onSubmit={handleSubmit}>
          <Label>Name</Label>
          <Input
            required
            value={name}
            placeholder="Enter Name..."
            type="text"
            onChange={handleTextChange}
          />
          <Label>Amount</Label>
          <Input
            required
            value={amount}
            placeholder="Enter Amount..."
            type="number"
            onChange={handleAmountChange}
          />
          <Button>Add Transaction</Button>
        </Form>
      </Container>
    </Overlay>
  );
};

export default AddTransaction;
