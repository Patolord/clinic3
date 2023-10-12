import { useForm } from "react-hook-form";
import { useState } from "react";
import { useFirestore } from "../../hooks/useFirestore";
import { useHistory } from "react-router";

import "./Form2.css";
import Body from "./Body";

export default function Form2() {
  const history = useHistory();
  const { addDocument, response } = useFirestore("fichas");
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

  const onSubmit = async (data) => {
    const ficha = {
      nome: data.nome,
      dadosPessoais: data.dadosPessoais,
      endereco: data.endereco,
      indicado: data["Indicado por"],
      queixa: data["Queixa Principal2"],
      localdor: pains,
      comments: [],
    };
    await addDocument(ficha);
    if (!response.error) {
      history.push("/success");
    } else {
      console.log(response.error);
    }
  };

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
                <input type="text" {...register("nome", {})} />
              </label>
              <label>
                <span> Email</span>
                <input type="email" {...register("dadosPessoais.email", {})} />
              </label>
              <label>
                <span> Telefone</span>
                <input type="tel" {...register("dadosPessoais.telefone", {})} />
              </label>
              <label>
                <span> CPF</span>
                <input type="text" {...register("dadosPessoais.CPF", {})} />
              </label>
            </div>
            <div className="right-col-1-in">
              <label>
                <span> Data de Nascimento</span>
                <input
                  type="date"
                  {...register("dadosPessoais.aniversario", {})}
                />
              </label>
              <label>
                <span> Idade</span>
                <input
                  type="number"
                  {...register("dadosPessoais.idade", { min: 0 })}
                />
              </label>
              <label>
                <span> Ocupação</span>
                <input
                  type="text"
                  {...register("dadosPessoais.ocupação", {})}
                />
              </label>
              <label>
                <span> Celular</span>
                <input type="tel" {...register("dadosPessoais.celular", {})} />
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
                <input type="text" {...register("endereco.endereco", {})} />
              </label>

              <label>
                <span> Cidade</span>
                <input type="text" {...register("endereco.cidade", {})} />
              </label>
              <label>
                <span> Estado</span>
                <select {...register("endereco.estado")}>
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
                <input type="number" {...register("endereco.cep", {})} />
              </label>
              <label>
                <span> Bairro</span>
                <input type="text" {...register("endereco.bairro", {})} />
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
                  value="Dor de Cabeça"
                  placeholder="Dor de Cabeça"
                  {...register("Dor", { valueasArray: true })}
                />
                Dor de Cabeça
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  value="Dor nas Costas"
                  placeholder="Dor nas Costas"
                  {...register("Dor", { valueasArray: true })}
                />
                Dor nas Costas
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  value="Dificuldade de Aprendizado"
                  placeholder="Dificuldade de Aprendizado"
                  {...register("Dor", { valueasArray: true })}
                />
                Dificuldade de Aprendizado
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  placeholder="Falta de Concentração"
                  {...register("Dor", { valueasArray: true })}
                />
                Falta de Concentração
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  placeholder="Diabetes"
                  {...register("Dor", { valueasArray: true })}
                />
                Diabetes
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  placeholder="Problemas digestivos"
                  {...register("Dor", { valueasArray: true })}
                />
                Problemas digestivos
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  placeholder="Tontura"
                  {...register("Dor", { valueasArray: true })}
                />
                Tontura
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  placeholder="8"
                  {...register("Dor", { valueasArray: true })}
                />
                8
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  placeholder="9"
                  {...register("Dor", { valueasArray: true })}
                />
                9
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  placeholder="10"
                  {...register("Dor", { valueasArray: true })}
                />
                10
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  placeholder="11"
                  {...register("Dor", { valueasArray: true })}
                />
                11
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  placeholder="12"
                  {...register("Dor", { valueasArray: true })}
                />
                12
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  placeholder="13"
                  {...register("Dor", { valueasArray: true })}
                />
                13
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  placeholder="14"
                  {...register("Dor", { valueasArray: true })}
                />
                14
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  placeholder="15"
                  {...register("Dor", { valueasArray: true })}
                />
                15
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  placeholder="16"
                  {...register("Dor", { valueasArray: true })}
                />
                16
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  placeholder="17"
                  {...register("Dor", { valueasArray: true })}
                />
                17
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  placeholder="18"
                  {...register("Dor", { valueasArray: true })}
                />
                18
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  placeholder="19"
                  {...register("Dor", { valueasArray: true })}
                />
                19
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  placeholder="20"
                  {...register("Dor", { valueasArray: true })}
                />
                20
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  placeholder="21"
                  {...register("Dor", { valueasArray: true })}
                />
                21
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  placeholder="22"
                  {...register("Dor", { valueasArray: true })}
                />
                22
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  placeholder="23"
                  {...register("Dor", { valueasArray: true })}
                />
                23
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  placeholder="24"
                  {...register("Dor", { valueasArray: true })}
                />
                24
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  placeholder="25"
                  {...register("Dor", { valueasArray: true })}
                />
                25
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  placeholder="26"
                  {...register("Dor", { valueasArray: true })}
                />
                26
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  placeholder="27"
                  {...register("Dor", { valueasArray: true })}
                />
                27
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  placeholder="28"
                  {...register("Dor", { valueasArray: true })}
                />
                28
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  {...register("Dor", { valueasArray: true })}
                />
                29
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  {...register("Dor", { valueasArray: true })}
                />
                30
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  {...register("Dor", { valueasArray: true })}
                />
                31
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  {...register("Dor", { valueasArray: true })}
                />
                32
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  {...register("Dor", { valueasArray: true })}
                />
                33
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  {...register("Dor", { valueasArray: true })}
                />
                34
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  placeholder="35"
                  {...register("Dor", { valueasArray: true })}
                />
                35
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  placeholder="36"
                  {...register("Dor", { valueasArray: true })}
                />
                36
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  placeholder="37"
                  {...register("Dor", { valueasArray: true })}
                />
                37
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  placeholder="38"
                  {...register("Dor", { valueasArray: true })}
                />
                38
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  placeholder="39"
                  {...register("Dor", { valueasArray: true })}
                />
                39
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  placeholder="40"
                  {...register("Dor", { valueasArray: true })}
                />
                40
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  placeholder="41"
                  {...register("Dor", { valueasArray: true })}
                />
                41
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  placeholder="42"
                  {...register("Dor", { valueasArray: true })}
                />
                42
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  placeholder="43"
                  {...register("Dor", { valueasArray: true })}
                />
                43
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  placeholder="44"
                  {...register("Dor", { valueasArray: true })}
                />
                44
              </label>
            </div>
          </div>
        </div>
        <div className="secao6">
          <div className="left-col-6">Local da Dor</div>
          <Body handleBodyClick={handleBodyClick} fillColors={fillColors} />
        </div>

        <input type="submit" />
      </form>
    </div>
  );
}
