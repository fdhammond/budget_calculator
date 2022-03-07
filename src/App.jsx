import { useState, useEffect } from "react";
import Header from "./components/Header";
import ExpensesList from "./components/ExpensesList";
import NewBudget from "./components/NewBudget";
import { generateId } from "./helpers";
import NewBudgetIcon from "./img/nuevo-gasto.svg";

function App() {
  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [newBudget, setNewBudget] = useState(false);
  const [animateNewBudget, setAnimateNewBudget] = useState(false);
  const [expenses, setExpenses] = useState([]);
  const [expensesEdit, setExpensesEdit] = useState({});

  useEffect(() => {
    if (Object.keys(expensesEdit).length > 0) {
      setNewBudget(true);
      setExpensesEdit({});
      setTimeout(() => {
        setAnimateNewBudget(true);
      }, 500);
    }
  }, [expensesEdit]);

  const handleNewBudget = () => {
    setNewBudget(true);
    setTimeout(() => {
      setAnimateNewBudget(true);
    }, 500);
  };

  const saveExpense = (expense) => {
    expense.id = generateId();
    expense.date = Date.now();
    setExpenses([...expenses, expense]);

    setAnimateNewBudget(false);
    setTimeout(() => {
      setNewBudget(false);
    }, 500);
  };

  return (
    <div className={newBudget ? "fijar" : ""}>
      <Header
        expenses={expenses}
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />

      {isValidBudget && (
        <>
          <main>
            <ExpensesList
              expenses={expenses}
              setExpensesEdit={setExpensesEdit}
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
        />
      )}
    </div>
  );
}

export default App;
