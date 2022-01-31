import React from "react";
import { formatDate } from "../helpers";
import IconSaving from "../img/icono_ahorro.svg";
import IconHouse from "../img/icono_casa.svg";
import IconFood from "../img/icono_comida.svg";
import IconExpenses from "../img/icono_gastos.svg";
import IconFreeTime from "../img/icono_ocio.svg";
import IconHealth from "../img/icono_salud.svg";
import IconSubscriptions from "../img/icono_suscripciones.svg";

const dictionaryIcons = {
  saving: IconSaving,
  food: IconFood,
  house: IconHouse,
  freetime: IconFreeTime,
  health: IconHealth,
  subscriptions: IconSubscriptions,
  expenses: IconExpenses,
};

const Expense = ({ expense }) => {
  const { category, name, quantity, id, date } = expense;
  return (
    <div className="gasto sombra">
      <div className="contenido-gasto">
        <img src={dictionaryIcons[category]} alt="icon expenses" />
        <div className="descripcion-gasto">
          <p className="categoria">{category}</p>
          <p className="nombre-gasto">{name}</p>
          <p className="fecha-gasto">
            Add on Date: {""}
            <span>{formatDate(date)}</span>
          </p>
        </div>
      </div>
      <div className="cantidad-gasto">${quantity}</div>
    </div>
  );
};

export default Expense;
