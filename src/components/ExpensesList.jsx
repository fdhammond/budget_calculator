import React from "react";
import Expense from "./Expense";

const ExpensesList = ({ expenses, setExpensesEdit }) => {
  return (
    <div className="listado-gastos contenedor">
      <h2>{expenses.length ? "Expenses" : "There's not expenses yet"}</h2>
      {expenses.map((expense) => (
        <Expense
          key={expense.id}
          expense={expense}
          setExpensesEdit={setExpensesEdit}
        />
      ))}
    </div>
  );
};

export default ExpensesList;
