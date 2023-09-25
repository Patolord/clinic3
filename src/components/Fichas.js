import { Link } from "react-router-dom";

// styles
import "./Fichas.css";

export default function Fichas({ fichas }) {
  return (
    <div className="fichas">
      {fichas.length === 0 && <p>Nenhuma ficha</p>}
      {fichas.map((ficha) => (
        <Link to={`/fichas/${ficha.id}`} key={ficha.id}>
          <h4>{ficha.assignedUsers.displayName}</h4>
          <p>{ficha.dueDate.toDate().toLocaleDateString("pt-BR")}</p>
          <div className="assigned-to">
            <ul>
              {ficha.categoriesList.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </Link>
      ))}
    </div>
  );
}
