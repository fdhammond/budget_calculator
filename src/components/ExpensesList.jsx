import React from "react";
import Expense from "./Expense";

const ExpensesList = ({
  expenses,
  setExpensesEdit,
  deleteExpense,
  filter,
  expensesFiltered,
}) => {
  return (
    <div className="listado-gastos contenedor">
      {filter ? (
        <>
          <h2>
            {expensesFiltered.length
              ? "Expenses"
              : "There are not expenses yet"}
          </h2>
          {expensesFiltered.map((expense) => (
            <Expense
              key={expense.id}
              expense={expense}
              setExpensesEdit={setExpensesEdit}
              deleteExpense={deleteExpense}
            />
          ))}
        </>
      ) : (
        <>
          <h2>{expenses.length ? "Expenses" : "There are not expenses yet"}</h2>
          {expenses.map((expense) => (
            <Expense
              key={expense.id}
              expense={expense}
              setExpensesEdit={setExpensesEdit}
              deleteExpense={deleteExpense}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default ExpensesList;
