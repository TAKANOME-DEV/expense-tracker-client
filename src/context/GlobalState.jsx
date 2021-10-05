import React, { createContext, useReducer } from "react";
import Reducer from "./Reducer";
import { ADD_TRANSACTION, DELETE_TRANSACTION } from "./Constant";

const initialState = {
  transactions: [],
};

export const Context = createContext(initialState);

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const addTransaction = (transaction) => {
    dispatch({
      type: ADD_TRANSACTION,
      payload: transaction,
    });
  };

  const deleteTransaction = (id) => {
    dispatch({
      type: DELETE_TRANSACTION,
      payload: id,
    });
  };

  const value = {
    transactions: state.transactions,
    addTransaction,
    deleteTransaction,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
