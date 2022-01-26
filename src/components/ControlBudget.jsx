import React from 'react';

const ControlBudget = ({ budget }) => {

    const formatBudgetQuantity = (quantity) => {
        return quantity.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }

    return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
            <div>
                <p>Grafica</p>
            </div>
            <div className="contenido-presupuesto">
                <p>
                    <span>Budget:</span>{formatBudgetQuantity(budget)}
                </p>
                <p>
                    <span>Available:</span>{formatBudgetQuantity(0)}
                </p>
                <p>
                    <span>Spended:</span>{formatBudgetQuantity(0)}
                </p>
            </div>
        </div>
    );
};

export default ControlBudget;