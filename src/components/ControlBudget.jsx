import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ControlBudget = ({
  expenses,
  setExpenses,
  budget,
  setBudget,
  setIsValidBudget,
}) => {
  const [percentage, setPercentage] = useState(0);
  const [available, setAvailable] = useState(0);
  const [expended, setExpended] = useState(0);

  useEffect(() => {
    const totalExpended = expenses.reduce(
      (total, expend) => expend.quantity + total,
      0
    );
    const totalAvailable = budget - totalExpended;

    // Calculate expended expenses
    const newPercentage = (((budget - totalAvailable) / budget) * 100).toFixed(
      2
    );

    setExpended(totalExpended);
    setAvailable(totalAvailable);
    setTimeout(() => {
      setPercentage(newPercentage);
    }, 1000);
  }, [expenses]);

  const formatBudgetQuantity = (quantity) => {
    return quantity.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const handleResetApp = () => {
    const result = confirm("Are you sure you want to reset the App?");
    if (result) {
      setExpenses([]);
      setBudget(0);
      setIsValidBudget(false);
    }
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <CircularProgressbar
          value={percentage}
          text={`${percentage}% Expended`}
          styles={buildStyles({
            pathColor: percentage > 100 ? "#DC2626" : "#3B82F6",
            trailColor: "#F5F5F5",
            textColor: percentage > 100 ? "#DC2626" : "#3B82F6",
          })}
        />
      </div>
      <div className="contenido-presupuesto">
        <button className="reset-app" type="button" onClick={handleResetApp}>
          Reset App
        </button>
        <p>
          <span>Budget:</span>
          {formatBudgetQuantity(budget)}
        </p>
        <p className={`${available < 0 ? "negativo" : ""}`}>
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
