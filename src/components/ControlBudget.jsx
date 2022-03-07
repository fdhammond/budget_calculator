import { useEffect, useState } from "react";

const ControlBudget = ({ expenses, budget }) => {
  const [available, setAvailable] = useState(0);
  const [expended, setExpended] = useState(0);

  useEffect(() => {
    const totalExpended = expenses.reduce(
      (total, expend) => expend.quantity + total,
      0
    );
    const totalAvailable = budget - totalExpended;
    setExpended(totalExpended);
    setAvailable(totalAvailable);
  }, [expenses]);

  const formatBudgetQuantity = (quantity) => {
    return quantity.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <p>Grafica</p>
      </div>
      <div className="contenido-presupuesto">
        <p>
          <span>Budget:</span>
          {formatBudgetQuantity(budget)}
        </p>
        <p>
          <span>Available:</span>
          {formatBudgetQuantity(available)}
        </p>
        <p>
          <span>Spended:</span>
          {formatBudgetQuantity(expended)}
        </p>
      </div>
    </div>
  );
};

export default ControlBudget;
