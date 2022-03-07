import React from "react";
import Budget from "./Budget";
import ControlBudget from "./ControlBudget";

const Header = ({
  expenses,
  budget,
  setBudget,
  isValidBudget,
  setIsValidBudget,
  expense,
}) => {
  return (
    <header>
      <h1>Budget Calculator</h1>
      {isValidBudget ? (
        <ControlBudget expenses={expenses} budget={budget} />
      ) : (
        <Budget
          budget={budget}
          setBudget={setBudget}
          setIsValidBudget={setIsValidBudget}
        />
      )}
    </header>
  );
};

export default Header;
