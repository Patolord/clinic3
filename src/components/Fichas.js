import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

// styles
import "./Fichas.css";

export default function Fichas({ fichas }) {
  const { user, role, authError } = useAuthContext();
  console.log(user, role, authError);
  if (authError) {
    return <div>Error: {authError.message}</div>;
  }

  if (!user) {
    return <div>Please log in</div>;
  }

  if (role !== "admin") {
    return <div>You do not have access to this page</div>;
  }
  return (
    <div className="fichas">
      {fichas.length === 0 && <p>Nenhuma ficha</p>}
      {fichas.map((ficha) => (
        <Link to={`/fichas/${ficha.id}`} key={ficha.id}>
          <h4>{ficha.nome}</h4>
          <p>{ficha.createdAt.toDate().toLocaleDateString("pt-BR")}</p>
          <div className="assigned-to">
            <ul>
              {ficha.localdor.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </Link>
      ))}
    </div>
  );
}
