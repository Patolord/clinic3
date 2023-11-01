import React from "react";
import { Controller } from "react-hook-form";

import "./CheckboxGroup.css";

const checkboxOptions = [
  { value: "Dor de Cabeça", label: "Dor de Cabeça / Enxaqueca" },
  { value: "Dor nas Costas", label: "Dor nas Costas" },
  { value: "Dor de Cabeça", label: "Dor de Cabeça / Enxaqueca" },
  { value: "Dor nas Costas", label: "Dor nas Costas" },
  { value: "Dor de Cabeça", label: "Dor de Cabeça / Enxaqueca" },
  { value: "Dor nas Costas", label: "Dor nas Costas" },
  { value: "Dor de Cabeça", label: "Dor de Cabeça / Enxaqueca" },
  { value: "Dor nas Costas", label: "Dor nas Costas" },
  { value: "Dor nas Costas", label: "Dor nas Costas" },
  { value: "Dor nas Costas", label: "Dor nas Costas" },
  { value: "Dor nas Costas", label: "Dor nas Costas" },
  { value: "Dor nas Costas", label: "Dor nas Costas" },
  { value: "Dor nas Costas", label: "Dor nas Costas" },
  { value: "Dor nas Costas", label: "Dor nas Costas" },
  { value: "Dor nas Costas", label: "Dor nas Costas" },
  { value: "Dor nas Costas", label: "Dor nas Costas" },
  { value: "Dor nas Costas", label: "Dor nas Costas" },
  { value: "Dor nas Costas", label: "Dor nas Costas" },
  { value: "Dor nas Costas", label: "Dor nas Costas" },
  { value: "Dor nas Costas", label: "Dor nas Costas" },
  { value: "Dor nas Costas", label: "Dor nas Costas" },
  { value: "Dor nas Costas", label: "Dor nas Costas" },
  { value: "Dor nas Costas", label: "Dor nas Costas" },
  { value: "Dor nas Costas", label: "Dor nas Costas" },
  { value: "Dor nas Costas", label: "Dor nas Costas" },
  { value: "Dor nas Costas", label: "Dor nas Costas" },
  { value: "Dor nas Costas", label: "Dor nas Costas" },
  { value: "Dor nas Costas", label: "Dor nas Costas" },
  { value: "Dor nas Costas", label: "Dor nas Costas" },
  { value: "Dor nas Costas", label: "Dor nas Costas" },
  { value: "Dor nas Costas", label: "Dor nas Costas" },
  { value: "Dor nas Costas", label: "Dor nas Costas" },
  { value: "Dor nas Costas", label: "Dor nas Costas" },
];

const CheckboxGroup = ({ control, name }) => {
  return (
    <>
      {checkboxOptions.map((option, index) => (
        <div className="campo" key={index}>
          <label>
            <Controller
              name={name}
              control={control}
              rules={{ required: true }}
              render={({ field }) => <input type="checkbox" value={option.value} {...field} />}
            />
            {option.label}
          </label>
        </div>
      ))}
    </>
  );
};

export default CheckboxGroup;
