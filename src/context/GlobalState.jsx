import React, { createContext, useReducer } from "react";
import axios from "axios";
import Reducer from "./Reducer";
import {
  GET_TRANSACTIONS,
  ADD_TRANSACTION,
  DELETE_TRANSACTION,
  TRANSACTION_ERROR,
} from "./Constant";

const initialState = {
  transactions: [],
  error: null,
  loading: true,
};

export const Context = createContext(initialState);

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const getTransactions = async () => {
    try {
      const response = await axios.get(
        "https://expense-server-tracker.herokuapp.com/transactions"
      );

      dispatch({
        type: GET_TRANSACTIONS,
        payload: response.data,
      });
    } catch (err) {
      dispatch({
        type: TRANSACTION_ERROR,
        payload: err.response.data,
      });
    }
  };

  const addTransaction = async (transaction) => {
    try {
      const response = await axios.post(
        "https://expense-server-tracker.herokuapp.com/transactions",
        transaction,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      dispatch({
        type: ADD_TRANSACTION,
        payload: response.data[0],
      });
    } catch (err) {
      dispatch({
        type: TRANSACTION_ERROR,
        payload: err.response.data[0],
      });
    }
  };

  const deleteTransaction = async (id) => {
    try {
      const response = await axios.delete(
        `https://expense-server-tracker.herokuapp.com/transactions/${id}`
      );

      dispatch({
        type: DELETE_TRANSACTION,
        payload: response.data.id,
      });
    } catch (err) {
      dispatch({
        type: TRANSACTION_ERROR,
        payload: err.response.data,
      });
    }
  };

  const value = {
    transactions: state.transactions,
    error: state.error,
    loading: state.loading,
    addTransaction,
    deleteTransaction,
    getTransactions,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
