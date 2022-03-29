import { useEffect, useState } from "react";

const Filters = ({ filter, setFilter }) => {
  return (
    <div className="filtros sombra contenedor">
      <form>
        <div className="campo">
          <label>Filtrar Gastos</label>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="">-- All Categories --</option>
            <option value="saving">-- Saving --</option>
            <option value="food">-- Food --</option>
            <option value="house">-- House --</option>
            <option value="freetime">-- Free Time --</option>
            <option value="health">-- Health --</option>
            <option value="subscriptions">-- Subscriptions --</option>
            <option value="expenses">-- Expenses --</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Filters;
