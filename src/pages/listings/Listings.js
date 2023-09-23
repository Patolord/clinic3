import { useCollection } from "../../hooks/useCollection";

// components
import Fichas from "../../components/Fichas";

// styles
import "./Listings.css";

export default function Listings() {
  const { documents, error } = useCollection("fichas");

  return (
    <div>
      <h2 className="page-title">Fichas</h2>
      {error && <p className="error">{error}</p>}
      {documents && <Fichas fichas={documents} />}
    </div>
  );
}
