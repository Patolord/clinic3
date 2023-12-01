import React from "react";
import { Controller } from "react-hook-form";

import "./CheckboxGroup.css";

const checkboxOptions = [
  { value: "Dor de Cabeça", label: "Dor de Cabeça / Enxaqueca" },
  { value: "Falta de Concentração", label: "Falta de Concentração" },
  { value: "Diabetes", label: "Diabetes" },
  { value: "Dor nas costas", label: "Dor nas costas" },
  { value: "Dificuldade de aprendizagem", label: "Dificuldade de aprendizagem" },
  { value: "Alergias/Sinusite", label: "Alergias/Sinusite" },
  { value: "Dor no pescoço", label: "Dor no pescoço" },
  { value: "Alteração de Humor", label: "Alteração de Humor" },
  { value: "", label: "" },
  { value: "", label: "" },
  { value: "", label: "" },
  { value: "", label: "" },
  { value: "", label: "" },
  { value: "", label: "" },
  { value: "", label: "" },
  { value: "", label: "" },
  { value: "", label: "" },
  { value: "", label: "" },
  { value: "", label: "" },
  { value: "", label: "" },
  { value: "", label: "" },
  { value: "", label: "" },
  { value: "", label: "" },
  { value: "", label: "" },
  { value: "", label: "" },
  { value: "", label: "" },
  { value: "", label: "" },
  { value: "", label: "" },
  { value: "", label: "" },
  { value: "", label: "" },
  { value: "", label: "" },
  { value: "", label: "" },
  { value: "", label: "" },
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
