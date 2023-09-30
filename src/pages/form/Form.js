import { useState, useEffect } from "react";
import { useCollection } from "../../hooks/useCollection";
import { useAuthContext } from "../../hooks/useAuthContext";
import { timestamp } from "../../firebase/config";
import { useFirestore } from "../../hooks/useFirestore";
import { useHistory } from "react-router";
import Select from "react-select";

// styles
import "./Form.css";

const categories = [
  { value: "dores nas costas", label: "dores nas costas" },
  { value: "mal estar", label: "mal estar" },
  { value: "diabetes", label: "diabetes" },
  { value: "dor de cabeca", label: "dor de cabeca" },
];

export default function Form() {
  const history = useHistory();
  const { addDocument, response } = useFirestore("fichas");
  const { user } = useAuthContext();
  const { documents } = useCollection("users");
  const [users, setUsers] = useState([]);

  // form field values
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [category, setCategory] = useState([]);
  const [assignedUsers, setAssignedUsers] = useState("");
  const [formError, setFormError] = useState(null);

  // create user values for react-select
  useEffect(() => {
    if (documents) {
      setUsers(
        documents.map((user) => {
          return { value: { ...user, id: user.id }, label: user.displayName };
        })
      );
    }
  }, [documents]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(null);

    if (category.length < 1) {
      setFormError("Please select a project category.");
      return;
    }
    if (!assignedUsers) {
      setFormError("Please assign the project to at least 1 user");
      return;
    }

    const categoriesList = category.map((c) => c.value);

    const createdBy = {
      displayName: user.displayName,
      id: user.uid,
    };

    const project = {
      name,
      details,
      assignedUsers: assignedUsers.value,
      createdBy,
      categoriesList,
      dueDate: timestamp.fromDate(new Date(dueDate)),
      comments: [],
    };

    await addDocument(project);
    if (!response.error) {
      history.push("/fichas");
    }
  };

  return (
    <div className="create-form">
      <h2 className="page-title">Criar nova ficha:</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome Completo:</span>
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
          <span>Categoria:</span>
          <Select
            onChange={(option) => setCategory(option)}
            options={categories}
            placeholder="Selecionar"
            isMulti
          />
        </label>
        <label>
          <span>Paciente:</span>
          <Select
            onChange={(option) => setAssignedUsers(option)}
            options={users}
            placeholder="Selecionar"
          />
        </label>

        <button className="btn">Adicionar Ficha</button>

        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  );
}
