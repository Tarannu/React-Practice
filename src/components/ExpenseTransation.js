import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const ExpenseTransaction = ({ expenseTransaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <li className="transaction">
      <span>{expenseTransaction.expenseText}</span>{"  "}
      <span className="transaction-amount">
        ${expenseTransaction.expenseAmount}
      </span>{"  "}
      <button
        onClick={() => deleteTransaction(expenseTransaction.id)}
        className="delete-btn"
      >
        Delete
      </button>
    </li>
  );
};

export default ExpenseTransaction;