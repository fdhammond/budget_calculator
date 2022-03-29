import Message from "./Message";
import { useState, useEffect } from "react";
import CerrarBtn from "../img/cerrar.svg";

const NewBudget = ({
  setNewBudget,
  animateNewBudget,
  setAnimateNewBudget,
  saveExpense,
  expensesEdit,
  setExpensesEdit,
}) => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    if (Object.keys(expensesEdit).length > 0) {
      setName(expensesEdit.name);
      setQuantity(expensesEdit.quantity);
      setCategory(expensesEdit.category);
      setId(expensesEdit.id);
      setDate(expensesEdit.date);
    }
  }, []);

  const hideNewBudget = () => {
    setAnimateNewBudget(false);
    setExpensesEdit({});
    setTimeout(() => {
      setNewBudget(false);
    }, 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([name, quantity, category].includes("")) {
      setMessage("All fields are required");
      setTimeout(() => {
        setMessage("");
      }, 3000);
      return;
    }
    saveExpense({ name, quantity, category, id, date });
  };

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CerrarBtn} alt="cerrar modal" onClick={hideNewBudget} />
      </div>
      <form
        onSubmit={handleSubmit}
        className={`formulario ${animateNewBudget ? "animar" : "cerrar"}`}>
        <legend>{expensesEdit.name ? "Editing Expense" : "New Expense"}</legend>
        {message && <Message tipo="error">{message}</Message>}
        <div className="campo">
          <label htmlFor="name">Name Expense</label>
          <input
            id="name"
            type="text"
            placeholder="Add Expense's name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="campo">
          <label htmlFor="quantity">Quantity</label>
          <input
            id="quantity"
            type="text"
            placeholder="Add Expense's quantity. Example: 300"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
        </div>
        <div className="campo">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}>
            <option value="">-- Select --</option>
            <option value="saving">-- Saving --</option>
            <option value="food">-- Food --</option>
            <option value="house">-- House --</option>
            <option value="freetime">-- Free Time --</option>
            <option value="health">-- Health --</option>
            <option value="subscriptions">-- Subscriptions --</option>
            <option value="expenses">-- Expenses --</option>
          </select>
        </div>
        <input
          type="submit"
          value={expensesEdit.name ? "Save Changes" : "Add Expense"}
        />
      </form>
    </div>
  );
};

export default NewBudget;
