import { useForm } from "react-hook-form";
import Costas from "../../assets/costas.svg";
import Frente from "../../assets/frente.svg";

import "./Form2.css";

export default function Form2() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log(watch("sobrenome")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */

    <div className="create-form">
      <h2 className="page-title">Criar nova ficha:</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="secao1">
          <div className="left-col">Contato</div>
          <div className="right-col">
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
              <input type="tel" {...register("Telefone", {})} />
            </label>
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
            </div>
            <div className="right-col-2-in">
              <label>
                <span> CEP</span>
                <input type="number" {...register("CEP", {})} />
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
          </div>
        </div>
        <div className="secao3">
          <div className="left-col-3">Dados Pessoais</div>
          <div className="right-col-2">
            <div className="left-col-2-in">
              <label>
                <span> Idade</span>
                <input type="number" {...register("Idade", {})} />
              </label>

              <label>
                <span> Ocupação</span>
                <input type="text" {...register("Ocupação", {})} />
              </label>

              <label>
                <span> Data de Nascimento</span>
                <input
                  type="datetime"
                  {...register("Data de Nascimento", {})}
                />
              </label>
            </div>
            <div className="right-col-2-in">
              <label>
                <span> Celular</span>
                <input type="tel" {...register("Celular", {})} />
              </label>
              <label>
                <span> Telefone</span>
                <input type="tel" {...register("Telefone", {})} />
              </label>
            </div>
          </div>
        </div>
        <div className="secao4">
          <div className="left-col-4">Dados Médicos</div>
          <div class="right-col-4">
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
        <div className="secao5">
          <div className="left-col-5">Dados Médicos</div>
          <div class="right-col-5">
            <label>
              <input
                type="checkbox"
                placeholder="Dor de Cabeça"
                {...register("Dor de Cabeça", {})}
              />
              Dor de Cabeça
            </label>
            <label>
              <input
                type="checkbox"
                placeholder="Dor nas Costas"
                {...register("Dor nas Costas", {})}
              />
              Dor nas Costas
            </label>
            <label>
              <input
                type="checkbox"
                placeholder="Dificuldade de Aprendizado"
                {...register("Dificuldade de Aprendizado", {})}
              />
              Dificuldade de Aprendizado
            </label>
            <label>
              <input
                type="checkbox"
                placeholder="Falta de Concentração"
                {...register("Falta de Concentração", {})}
              />
              Falta de Concentração
            </label>
            <label>
              <input
                type="checkbox"
                placeholder="Diabetes"
                {...register("Diabetes", {})}
              />
              Diabetes
            </label>
            <label>
              <input
                type="checkbox"
                placeholder="Problemas digestivos"
                {...register("Problemas digestivos", {})}
              />
              Problemas digestivos
            </label>
            <label>
              <input
                type="checkbox"
                placeholder="Tontura"
                {...register("Tontura", {})}
              />
              Tontura
            </label>
          </div>
        </div>
        <div className="secao6">
          <div className="left-col-6">Local da Dor</div>
          <div class="right-col-6">
            <svg
              className="svg1"
              width="44"
              height="74"
              viewBox="0 0 44 74"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 43.0845L19.9 73C21.475 71.9859 29.875 38.5211 29.875 32.9437C29.875 28.4817 38.625 27.3662 43 27.3662C42.125 24.662 39.85 18.138 37.75 13.6761C35.65 9.21408 18.675 3.3662 10.45 1L3.625 2.52113L1 43.0845Z"
                stroke="black"
              />
            </svg>
            <img className="frente" src={Frente} alt="frente" />
          </div>
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}
