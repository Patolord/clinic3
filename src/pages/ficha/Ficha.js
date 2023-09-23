import { useParams } from "react-router-dom";
import { useDocument } from "../../hooks/useDocument";

// styles
import "./Ficha.css";
import FichaResumo from "./FichaResumo";

export default function Ficha() {
  const { id } = useParams();
  const { document, error } = useDocument("fichas", id);

  if (error) {
    return <div className="error">{error}</div>;
  }
  if (!document) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="project-details">
      <FichaResumo ficha={document} />
    </div>
  );
}
