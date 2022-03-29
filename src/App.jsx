import { useState, useEffect } from "react";
import Header from "./components/Header";
import Filters from "./components/Filters";
import ExpensesList from "./components/ExpensesList";
import NewBudget from "./components/NewBudget";
import { generateId } from "./helpers";
import NewBudgetIcon from "./img/nuevo-gasto.svg";

function App() {
  const [budget, setBudget] = useState(
    Number(localStorage.getItem("budget")) ?? 0
  );
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [newBudget, setNewBudget] = useState(false);
  const [animateNewBudget, setAnimateNewBudget] = useState(false);
  const [expenses, setExpenses] = useState(
    localStorage.getItem("expenses")
      ? JSON.parse(localStorage.getItem("expenses"))
      : []
  );
  const [expensesEdit, setExpensesEdit] = useState({});
  const [filter, setFilter] = useState("");
  const [expensesFiltered, setExpensesFiltered] = useState([]);

  useEffect(() => {
    if (Object.keys(expensesEdit).length > 0) {
      setNewBudget(true);
      setTimeout(() => {
        setAnimateNewBudget(true);
      }, 500);
    }
  }, [expensesEdit]);

  useEffect(() => {
    const budgetLS = Number(localStorage.getItem("budget")) ?? 0;
    if (budgetLS > 0) {
      setIsValidBudget(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("budget", budget ?? 0);
  }, [budget]);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses) ?? []);
  }, [expenses]);

  useEffect(() => {
    if (filter) {
      //Filter expenses by category
      const expensesFiltered = expenses.filter(
        (expense) => expense.category === filter
      );
      setExpensesFiltered(expensesFiltered);
    }
  }, [filter]);

  const handleNewBudget = () => {
    setNewBudget(true);
    setExpensesEdit({});
    setTimeout(() => {
      setAnimateNewBudget(true);
    }, 500);
  };

  const saveExpense = (expense) => {
    if (expense.id) {
      //Update
      const expensesUpdated = expenses.map((expenseState) =>
        expenseState.id === expense.id ? expense : expenseState
      );
      setExpenses(expensesUpdated);
      setExpensesEdit({});
    } else {
      //New Expense
      expense.id = generateId();
      expense.date = Date.now();
      setExpenses([...expenses, expense]);
    }
    setAnimateNewBudget(false);
    setTimeout(() => {
      setNewBudget(false);
    }, 500);
  };

  const deleteExpense = (id) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
  };

  return (
    <div className={newBudget ? "lock" : ""}>
      <Header
        expenses={expenses}
        setExpenses={setExpenses}
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />

      {isValidBudget && (
        <>
          <main>
            <Filters filter={filter} setFilter={setFilter} />
            <ExpensesList
              expenses={expenses}
              setExpensesEdit={setExpensesEdit}
              deleteExpense={deleteExpense}
              filter={filter}
              expensesFiltered={expensesFiltered}
            />
          </main>
          <div className="nuevo-gasto">
            <img
              src={NewBudgetIcon}
              alt="new budget icon"
              onClick={handleNewBudget}
            />
          </div>
        </>
      )}
      {newBudget && (
        <NewBudget
          setNewBudget={setNewBudget}
          animateNewBudget={animateNewBudget}
          setAnimateNewBudget={setAnimateNewBudget}
          saveExpense={saveExpense}
          expensesEdit={expensesEdit}
          setExpensesEdit={setExpensesEdit}
        />
      )}
    </div>
  );
}

export default App;
