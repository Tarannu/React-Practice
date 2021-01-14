import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeTransaction = ({ incomeTransaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <li className="transaction">
      <span >{incomeTransaction.incomeText}</span>
      <span >{"  "}
        ${incomeTransaction.incomeAmount}
      </span>{"  "}
      <button
        onClick={() => deleteTransaction(incomeTransaction.id)}
        className="delete-btn"
      >
        Delete
      </button>
    </li>
  );
};

export default IncomeTransaction;