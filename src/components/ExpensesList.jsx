import React from "react";
import Expense from "./Expense";

const ExpensesList = ({ expenses }) => {
  return (
    <div className="listado-gastos contenedor">
      <h2>{expenses.length ? "Expenses" : "There's not expenses yet"}</h2>
      {expenses.map((expense) => (
        <Expense key={expense.id} expense={expense} />
      ))}
    </div>
  );
};

export default ExpensesList;
