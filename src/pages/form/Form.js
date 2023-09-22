import { useState } from "react";

// styles
import "./Form.css";

export default function Form() {
  // form field values
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [dueDate, setDueDate] = useState("");
  // const [category, setCategory] = useState('')
  // const [assignedUsers, setAssignedUsers] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(name, details, dueDate);
  };

  return (
    <div className="create-form">
      <h2 className="page-title">Novo Paciente</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome:</span>
          <input
            required
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <label>
          <span>Detalhes:</span>
          <textarea
            required
            onChange={(e) => setDetails(e.target.value)}
            value={details}
          ></textarea>
        </label>
        <label>
          <span>Data:</span>
          <input
            required
            type="date"
            onChange={(e) => setDueDate(e.target.value)}
            value={dueDate}
          />
        </label>
        <label>
          <span>Dores:</span>
          {/* select here later */}
        </label>
        <label>
          <span>Outros:</span>
          {/* select here later */}
        </label>

        <button className="btn">Completar Formulário</button>
      </form>
    </div>
  );
}
