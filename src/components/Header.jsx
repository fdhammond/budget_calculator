import React from 'react';
import Budget from './Budget';
import ControlBudget from './ControlBudget';

const Header = ({
    budget,
    setBudget,
    isValidBudget,
    setIsValidBudget }) => {
    return (
        <header>
            <h1>Budget Calculator</h1>
            {
                isValidBudget
                    ?
                    (
                <ControlBudget
                budget={budget}
                />
                    ) : (
                <Budget
                budget={budget}
                setBudget={setBudget}
                setIsValidBudget={setIsValidBudget}
                />
                    )
            }

        </header>
    );
};

export default Header;