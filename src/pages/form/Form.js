import { useForm } from "react-hook-form";
import { useState } from "react";
import { useFirestore } from "../../hooks/useFirestore";
import { useNavigate } from "react-router";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import "./Form.css";
import Body from "./Body";

const schema = yup
  .object({
    nome: yup.string().required("Nome é obrigatório").max(100, "Nome muito longo"),
    dadosPessoais: yup.object({
      email: yup.string().email("Email inválido"),
      telefone: yup.string(),
      CPF: yup.string().length(11, "CPF deve ter 11 dígitos"),
      idade: yup.number().positive("Idade Invalida").integer("Idade Invalida 2").required("Idade é obrigatória"),
      ocupação: yup.string(),
      celular: yup.string(),
    }),
  })
  .required();

export default function Form() {
  const navigate = useNavigate();
  const { addDocument, response } = useFirestore("fichas");
  const [pains, setPains] = useState([]);
  const [fillColors, setFillColors] = useState({
    Peito: "none",
    Perna: "none",
  });

  const {
    reset,
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      dadosPessoais: {
        email: "",
        telefone: "",
        CPF: "",
        idade: 0,
        ocupação: "",
        celular: "",
      },
    },
  });
  console.log(errors);
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
    console.log(data);
    try {
      const ficha = {
        nome: data.nome,
        dadosPessoais: data.dadosPessoais,
        endereco: data.endereco,
        indicado: data["Indicado por"],
        queixa: data["Queixa Principal2"],
        localdor: pains,
        comments: [],
      };

      console.log(ficha);
      await addDocument(ficha);

      if (!response.error) {
        reset();
        setPains([]);
        navigate("/success");
      } else {
        console.log("Error saving document:");
        // Handle the error appropriately, you might want to show a notification to the user.
      }
    } catch (error) {
      console.log("Submission error:");
      // Handle the error appropriately, you might want to show a notification to the user.
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
                <input required type="text" {...register("nome", {})} />
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
                <input type="date" {...register("dadosPessoais.aniversario", {})} />
              </label>
              <label>
                <span> Idade</span>
                <input type="number" {...register("dadosPessoais.idade", { min: 0 })} />
                {errors.dadosPessoais?.idade && <p>{errors.dadosPessoais.idade.message}</p>}
              </label>

              <label>
                <span> Ocupação</span>
                <input type="text" {...register("dadosPessoais.ocupação", {})} />
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
          <div className="left-col-4">Indicação</div>
          <div className="right-col-4">
            <label>
              <select {...register("dadosPessoais.indicacao")}>
                <option value="Amigo">Amigo</option>
                <option value="TV">TV</option>
                <option value="Familiar">Familiar</option>
                <option value="Internet">Internet</option>
              </select>
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
                Dor de Cabeça / Enxaqueca
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
                Falta de Concentração
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
                Diabetes
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  placeholder="Falta de Concentração"
                  {...register("Dor", { valueasArray: true })}
                />
                Dor nas Costas
              </label>
            </div>
            <div className="campo">
              <label>
                <input type="checkbox" placeholder="Diabetes" {...register("Dor", { valueasArray: true })} />
                Dificuldade de Aprendizagem
              </label>
            </div>
            <div className="campo">
              <label>
                <input
                  type="checkbox"
                  placeholder="Problemas digestivos"
                  {...register("Dor", { valueasArray: true })}
                />
                Alergias / Sinusite
              </label>
            </div>
            <div className="campo">
              <label>
                <input type="checkbox" placeholder="Tontura" {...register("Dor", { valueasArray: true })} />
                Dor no Pescoço
              </label>
            </div>
            <div className="campo">
              <label>
                <input type="checkbox" placeholder="8" {...register("Dor", { valueasArray: true })} />
                Alteração do Humor
              </label>
            </div>
            <div className="campo">
              <label>
                <input type="checkbox" placeholder="9" {...register("Dor", { valueasArray: true })} />
                Depressão
              </label>
            </div>
            <div className="campo">
              <label>
                <input type="checkbox" placeholder="10" {...register("Dor", { valueasArray: true })} />
                Refluxo
              </label>
            </div>
            <div className="campo">
              <label>
                <input type="checkbox" placeholder="11" {...register("Dor", { valueasArray: true })} />
                Infecções de Ouvido
              </label>
            </div>
            <div className="campo">
              <label>
                <input type="checkbox" placeholder="12" {...register("Dor", { valueasArray: true })} />
                Insônia / Sono Ruim
              </label>
            </div>
            <div className="campo">
              <label>
                <input type="checkbox" placeholder="13" {...register("Dor", { valueasArray: true })} />
                Problemas Intestinais
              </label>
            </div>
            <div className="campo">
              <label>
                <input type="checkbox" placeholder="14" {...register("Dor", { valueasArray: true })} />
                Fraturas
              </label>
            </div>
            <div className="campo">
              <label>
                <input type="checkbox" placeholder="15" {...register("Dor", { valueasArray: true })} />
                Fadiga
              </label>
            </div>
            <div className="campo">
              <label>
                <input type="checkbox" placeholder="16" {...register("Dor", { valueasArray: true })} />
                Problemas Estomacais
              </label>
            </div>
            <div className="campo">
              <label>
                <input type="checkbox" placeholder="17" {...register("Dor", { valueasArray: true })} />
                Convulsões / Epilepsia
              </label>
            </div>
            <div className="campo">
              <label>
                <input type="checkbox" placeholder="18" {...register("Dor", { valueasArray: true })} />
                Problemas na Tireóide
              </label>
            </div>
            <div className="campo">
              <label>
                <input type="checkbox" placeholder="19" {...register("Dor", { valueasArray: true })} />
                Digestão
              </label>
            </div>
            <div className="campo">
              <label>
                <input type="checkbox" placeholder="20" {...register("Dor", { valueasArray: true })} />
                Problemas de Pele
              </label>
            </div>
            <div className="campo">
              <label>
                <input type="checkbox" placeholder="21" {...register("Dor", { valueasArray: true })} />
                Perda de Peso Recente
              </label>
            </div>
            <div className="campo">
              <label>
                <input type="checkbox" placeholder="22" {...register("Dor", { valueasArray: true })} />
                Úlceras
              </label>
            </div>
            <div className="campo">
              <label>
                <input type="checkbox" placeholder="23" {...register("Dor", { valueasArray: true })} />
                Câncer
              </label>
            </div>
            <div className="campo">
              <label>
                <input type="checkbox" placeholder="24" {...register("Dor", { valueasArray: true })} />
                Stress Excessivo
              </label>
            </div>
            <div className="campo">
              <label>
                <input type="checkbox" placeholder="25" {...register("Dor", { valueasArray: true })} />
                Formigamentos
              </label>
            </div>
            <div className="campo">
              <label>
                <input type="checkbox" placeholder="26" {...register("Dor", { valueasArray: true })} />
                Gripes / Resfriados
              </label>
            </div>
            <div className="campo">
              <label>
                <input type="checkbox" placeholder="27" {...register("Dor", { valueasArray: true })} />
                Doença Cardíaca
              </label>
            </div>
            <div className="campo">
              <label>
                <input type="checkbox" placeholder="28" {...register("Dor", { valueasArray: true })} />
                Adormecimentos
              </label>
            </div>
            <div className="campo">
              <label>
                <input type="checkbox" {...register("Dor", { valueasArray: true })} />
                Dor no Maxilar
              </label>
            </div>
            <div className="campo">
              <label>
                <input type="checkbox" {...register("Dor", { valueasArray: true })} />
                Mãos e/ou Pés Frios
              </label>
            </div>
            <div className="campo">
              <label>
                <input type="checkbox" {...register("Dor", { valueasArray: true })} />
                Tortura / Vertigem
              </label>
            </div>
            <div className="campo">
              <label>
                <input type="checkbox" {...register("Dor", { valueasArray: true })} />
                Perda de Audição
              </label>
            </div>
            <div className="campo">
              <label>
                <input type="checkbox" {...register("Dor", { valueasArray: true })} />
                Pressão Alta
              </label>
            </div>
            <div className="campo">
              <label>
                <input type="checkbox" {...register("Dor", { valueasArray: true })} />
                Zumbido
              </label>
            </div>
            <div className="campo">
              <label>
                <input type="checkbox" placeholder="35" {...register("Dor", { valueasArray: true })} />
                Visão Embaçada / Dupla
              </label>
            </div>
            <div className="campo">
              <label>
                <input type="checkbox" placeholder="36" {...register("Dor", { valueasArray: true })} />
                Derrame Cerebral
              </label>
            </div>
            <div className="campo">
              <label>
                <input type="checkbox" placeholder="37" {...register("Dor", { valueasArray: true })} />
                Dor Menstrual / Irregularidade
              </label>
            </div>
            <div className="campo">
              <label>
                <input type="checkbox" placeholder="38" {...register("Dor", { valueasArray: true })} />
                Irritabilidade
              </label>
            </div>
            <div className="campo">
              <label>
                <input type="checkbox" placeholder="39" {...register("Dor", { valueasArray: true })} />
                Osteopenia
              </label>
            </div>
            <div className="campo">
              <label>
                <input type="checkbox" placeholder="40" {...register("Dor", { valueasArray: true })} />
                Perda de Controle da Baxiga
              </label>
            </div>
            <div className="campo">
              <label>
                <input type="checkbox" placeholder="41" {...register("Dor", { valueasArray: true })} />
                Problemas de Próstata
              </label>
            </div>
            <div className="campo">
              <label>
                <input type="checkbox" placeholder="42" {...register("Dor", { valueasArray: true })} />
                Osteoporose
              </label>
            </div>
            <div className="campo">
              <label>
                <input type="checkbox" placeholder="43" {...register("Dor", { valueasArray: true })} />
                Dificuldade de Respirar
              </label>
            </div>
            <div className="campo">
              <label>
                <input type="checkbox" placeholder="44" {...register("Dor", { valueasArray: true })} />
                Asma
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
