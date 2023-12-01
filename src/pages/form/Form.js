import { useForm } from "react-hook-form";
import { useState } from "react";
import { useFirestore } from "../../hooks/useFirestore";
import { useNavigate } from "react-router";
import "./Form.css";
import Body from "./Body";
import CheckboxGroup from "./CheckboxGroup";

export default function Form() {
  const navigate = useNavigate();
  const { addDocument, response } = useFirestore("fichas");
  const [pains, setPains] = useState([]);

  const {
    reset,
    register,
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const ficha = {
        nome: data.nome,
        dadosPessoais: data.dadosPessoais,
        endereco: data.endereco,
        indicado: data.dadosPessoais?.indicacao || "Amigo",
        queixa: data["Queixa Principal2"] || "Nenhuma",
        localdor: pains,
        comments: [],
      };

      console.log("add", ficha);
      await addDocument(ficha);

      if (!response.error) {
        console.log("Document saved successfully!");
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

  const handleInput = (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
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
                <input required type="email" {...register("dadosPessoais.email", {})} />
              </label>
              <label>
                <span> Telefone</span>
                <input required type="tel" {...register("dadosPessoais.telefone", {})} />
              </label>
              <label>
                <span> CPF</span>
                <input required type="text" {...register("dadosPessoais.CPF", {})} />
              </label>
            </div>
            <div className="right-col-1-in">
              <label>
                <span> Data de Nascimento</span>
                <input required type="date" {...register("dadosPessoais.aniversario", {})} />
              </label>
              <label>
                <span>Idade</span>
                <input
                  type="number"
                  required
                  {...register("dadosPessoais.idade", {
                    valueAsNumber: true,
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Apenas números são permitidos",
                    },
                    max: {
                      value: 200,
                      message: "Idade Inválida",
                    },
                  })}
                  className="no-arrows"
                  onInput={handleInput}
                />
                {errors.dadosPessoais?.idade && <p>{errors.dadosPessoais.idade.message}</p>}
              </label>

              <label>
                <span> Ocupação</span>
                <input required type="text" {...register("dadosPessoais.ocupação", {})} />
              </label>
              <label>
                <span> Celular</span>
                <input required type="tel" {...register("dadosPessoais.celular", {})} />
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
        <div className="secao3">
          <div className="left-col-3">Indicação</div>
          <div className="right-col-3">
            <label>
              <select required {...register("dadosPessoais.indicacao")}>
                <option value="Amigo">Amigo</option>
                <option value="TV">TV</option>
                <option value="Familiar">Familiar</option>
                <option value="Internet">Internet</option>
              </select>
            </label>
          </div>
        </div>
        <div className="secao4">
          <div className="left-col-3">Queixa Principal</div>
          <div className="right-col-2">
            <textarea required {...register("Queixa Principal2", {})} />
          </div>
        </div>
        <div className="secao5">
          <div className="left-col-5">Dados Médicos</div>
          <div className="right-col-5">
            <CheckboxGroup control={control} name="Queixas" />
          </div>
        </div>
        <div className="secao6">
          <div className="left-col-6">Local da Dor</div>
          <Body setValue={setValue} setPains={setPains} />
        </div>

        <input type="submit" />
      </form>
    </div>
  );
}
