import { useForm } from "react-hook-form";
import { useState } from "react";

import "./Form2.css";
import Body from "./Body";

export default function Form2() {
  const [pains, setPains] = useState([]);
  const [fillColors, setFillColors] = useState({
    Peito: "none",
    Perna: "none",
  });

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleBodyClick = (e, name) => {
    e.preventDefault();

    setFillColors((prevFillColors) => ({
      ...prevFillColors,
      [name]: prevFillColors[name] === "none" ? "green" : "none",
    }));

    setPains((prevPains) => {
      const isChecked = !prevPains.includes(name);

      switch (name) {
        case "Peito":
          if (isChecked) {
            setValue("Pains", [...prevPains, "Peito"]);

            return [...prevPains, "Peito"];
          } else {
            setValue(
              "Pains",
              prevPains.filter((item) => item !== "Peito")
            );

            return prevPains.filter((item) => item !== "Peito");
          }

        case "Perna":
          if (isChecked) {
            setValue("Pains", [...prevPains, "Perna"]);

            return [...prevPains, "Perna"];
          } else {
            setValue(
              "Pains",
              prevPains.filter((item) => item !== "Perna")
            );

            return prevPains.filter((item) => item !== "Perna");
          }

        default:
          return prevPains;
      }
    });
  };

  console.log(pains);
  console.log(errors);

  const onSubmit = (data) => {};

  //console.log(watch("sobrenome")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */

    <div className="create-form">
      <h2 className="page-title">Criar nova ficha:</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="secao1">
          <div className="left-col">Dados Pessoais</div>
          <div className="right-col">
            <div className="left-col-1-in">
              <label>
                <span> Nome Completo</span>
                <input type="text" {...register} />
              </label>
              <label>
                <span> Email</span>
                <input type="email" {...register("Email", {})} />
              </label>
              <label>
                <span> Telefone</span>
                <input
                  type="tel"
                  placeholder="(DDD) + Número"
                  {...register("Telefone", {})}
                />
              </label>
              <label>
                <span> CPF</span>
                <input
                  type="number"
                  placeholder="000.000.000-00"
                  {...register("CPF", {})}
                />
              </label>
            </div>
            <div className="right-col-1-in">
              <label>
                <span> Data de Nascimento</span>
                <input
                  type="datetime"
                  placeholder="DD/MM/AAAA"
                  {...register("Data de Nascimento", {})}
                />
              </label>
              <label>
                <span> Idade</span>
                <input type="number" {...register("Idade", {})} />
              </label>
              <label>
                <span> Ocupação</span>
                <input type="text" {...register("Ocupação", {})} />
              </label>
              <label>
                <span> Celular</span>
                <input
                  type="tel"
                  placeholder="(DDD) + Número"
                  {...register("Celular", {})}
                />
              </label>
            </div>
          </div>
        </div>

        <div className="secao2">
          <div className="left-col-2">Endereço</div>
          <div className="right-col-2">
            <div className="left-col-2-in">
              <label>
                <span> Endereço</span>
                <input type="text" {...register("Endereço", {})} />
              </label>

              <label>
                <span> Cidade</span>
                <input type="text" {...register("Cidade", {})} />
              </label>
              <label>
                <span> Estado</span>
                <select {...register("Estado")}>
                  <option value="SP">SP</option>
                  <option value="RJ">RJ</option>
                  <option value="MG">MG</option>
                  <option value="RS">RS</option>
                  <option value="BA">BA</option>
                  <option value="RN">RN</option>
                </select>
              </label>
            </div>
            <div className="right-col-2-in">
              <label>
                <span> CEP</span>
                <input type="number" {...register("CEP", {})} />
              </label>
              <label>
                <span> Bairro</span>
                <input type="text" {...register("Bairro", {})} />
              </label>
            </div>
          </div>
        </div>
        <div className="secao4">
          <div className="left-col-4">Indicado</div>
          <div className="right-col-4">
            <label>
              <input {...register("Indicado por")} type="radio" value="Amigo" />
              Amigo
            </label>
            <label>
              <input
                {...register("Indicado por")}
                type="radio"
                value="Familiar"
              />
              Familiar
            </label>
            <label>
              <input
                {...register("Indicado por")}
                type="radio"
                value="Internet"
              />
              Internet
            </label>
            <label>
              <input {...register("Indicado por")} type="radio" value="TV" />
              TV
            </label>
          </div>
        </div>
        <div className="secao3">
          <div className="left-col-3">Queixa Principal</div>
          <div className="right-col-2">
            <textarea {...register("Queixa Principal2", {})} />
          </div>
        </div>
        <div className="secao5">
          <div className="left-col-5">Dados Médicos</div>
          <div className="right-col-5">
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  placeholder="Dor de Cabeça"
                  {...register("Dor de Cabeça", {})}
                />
                Dor de Cabeça
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  placeholder="Dor nas Costas"
                  {...register("Dor nas Costas", {})}
                />
                Dor nas Costas
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  placeholder="Dificuldade de Aprendizado"
                  {...register("Dificuldade de Aprendizado", {})}
                />
                Dificuldade de Aprendizado
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  placeholder="Falta de Concentração"
                  {...register("Falta de Concentração", {})}
                />
                Falta de Concentração
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  placeholder="Diabetes"
                  {...register("Diabetes", {})}
                />
                Diabetes
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  placeholder="Problemas digestivos"
                  {...register("Problemas digestivos", {})}
                />
                Problemas digestivos
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  placeholder="Tontura"
                  {...register("Tontura", {})}
                />
                Tontura
              </label>
            </div>
            <div className="campo">
              <label>
                <input type="checkbox" placeholder="8" {...register("8", {})} />
                8
              </label>
            </div>
            <div className="campo">
              <label>
                <input type="checkbox" placeholder="9" {...register("9", {})} />
                9
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  placeholder="10"
                  {...register("10", {})}
                />
                10
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  placeholder="11"
                  {...register("11", {})}
                />
                11
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  placeholder="12"
                  {...register("12", {})}
                />
                12
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  placeholder="13"
                  {...register("13", {})}
                />
                13
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  placeholder="14"
                  {...register("14", {})}
                />
                14
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  placeholder="15"
                  {...register("15", {})}
                />
                15
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  placeholder="16"
                  {...register("16", {})}
                />
                16
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  placeholder="17"
                  {...register("17", {})}
                />
                17
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  placeholder="18"
                  {...register("18", {})}
                />
                18
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  placeholder="19"
                  {...register("19", {})}
                />
                19
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  placeholder="20"
                  {...register("20", {})}
                />
                20
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  placeholder="21"
                  {...register("21", {})}
                />
                21
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  placeholder="22"
                  {...register("22", {})}
                />
                22
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  placeholder="23"
                  {...register("23", {})}
                />
                23
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  placeholder="24"
                  {...register("24", {})}
                />
                24
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  placeholder="25"
                  {...register("25", {})}
                />
                25
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  placeholder="26"
                  {...register("26", {})}
                />
                26
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  placeholder="27"
                  {...register("27", {})}
                />
                27
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  placeholder="28"
                  {...register("28", {})}
                />
                28
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  placeholder="29"
                  {...register("29", {})}
                />
                29
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  placeholder="30"
                  {...register("30", {})}
                />
                30
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  placeholder="31"
                  {...register("31", {})}
                />
                31
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  placeholder="32"
                  {...register("32", {})}
                />
                32
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  placeholder="33"
                  {...register("33", {})}
                />
                33
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  placeholder="34"
                  {...register("34", {})}
                />
                34
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  placeholder="35"
                  {...register("35", {})}
                />
                35
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  placeholder="36"
                  {...register("36", {})}
                />
                36
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  placeholder="37"
                  {...register("37", {})}
                />
                37
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  placeholder="38"
                  {...register("38", {})}
                />
                38
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  placeholder="39"
                  {...register("39", {})}
                />
                39
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  placeholder="40"
                  {...register("40", {})}
                />
                40
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  placeholder="41"
                  {...register("41", {})}
                />
                41
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  placeholder="42"
                  {...register("42", {})}
                />
                42
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  placeholder="43"
                  {...register("43", {})}
                />
                43
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  placeholder="44"
                  {...register("44", {})}
                />
                44
              </label>
            </div>
          </div>
        </div>
        <div className="secao6">
          <div className="left-col-6">Local da Dor</div>
          <div className="right-col-6">
            <Body handleBodyClick={handleBodyClick} fillColors={fillColors} />
          </div>
        </div>

        <input type="submit" />
      </form>
    </div>
  );
}
