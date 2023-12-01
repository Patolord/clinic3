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
  { value: "Depressão", label: "Depressão" },
  { value: "Refluxo", label: "Refluxo" },
  { value: "Infecções de ouvidos", label: "Infecções de ouvidos" },
  { value: "Insônia/Sono Ruim", label: "Insônia/Sono Ruim" },
  { value: "Problemas Intestinais", label: "Problemas Intestinais" },
  { value: "Fraturas", label: "Fraturas" },
  { value: "Fadiga", label: "Fadiga" },
  { value: "Problemas Estomacais", label: "Problemas Estomacais" },
  { value: "Convulsões/Epilepsia", label: "Convulsões/Epilepsia" },
  { value: "Problemas na tireóide", label: "Problemas na tireóide" },
  { value: "Digestão", label: "Digestão" },
  { value: "Problemas de Pele", label: "Problemas de Pele" },
  { value: "Perda de peso recente", label: "Perda de peso recente" },
  { value: "Ùlceras", label: "Ùlceras" },
  { value: "Câncer", label: "Câncer" },
  { value: "Stress excessivo", label: "Stress excessivo" },
  { value: "Formigamento", label: "Formigamento" },
  { value: "Gripes e resfriados frequentes", label: "Gripes e resfriados frequentes" },
  { value: "Doença cardíaca", label: "Doença cardíaca" },
  { value: "Adormecimento", label: "Adormecimento" },
  { value: "Dor no maxilar", label: "Dor no maxilar" },
  { value: "Mãos/pés frios", label: "Mãos/pés frios" },
  { value: "Tontura/vertigem", label: "Tontura/vertigem" },
  { value: "Perda de audição", label: "Perda de audição" },
  { value: "Pressão alta", label: "Pressão alta" },
  { value: "Zumbido", label: "Zumbido" },
  { value: "Visão Embaçada/Dupla", label: "Visão Embaçada/Dupla" },
  { value: "Derrame cerebral", label: "Derrame cerebral" },
  { value: "Dor menstrual/irregularidade", label: "Dor menstrual/irregularidade" },
  { value: "Irritabilidade", label: "Irritabilidade" },
  { value: "Osteopenia", label: "Osteopenia" },
  { value: "Perda de controle da bexiga", label: "Perda de controle da bexiga" },
  { value: "Problemas de próstata/impotência", label: "Problemas de próstata/impotência" },
  { value: "Osteoporose", label: "Osteoporose" },
  { value: "Asma", label: "Asma" },
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
