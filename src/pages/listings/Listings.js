import { useCollection } from "../../hooks/useCollection";
import { useAuthContext } from "../../hooks/useAuthContext";

// components
import Fichas from "../../components/Fichas";

// styles
import "./Listings.css";

export default function Listings() {
  const { documents, error } = useCollection("fichas");
  const { user } = useAuthContext();

  console.log(user.uid);
  console.log(user);

  return (
    <div>
      <h2 className="page-title">Fichas</h2>

      {error && <p className="error">{error}1</p>}

      {documents && <Fichas fichas={documents} />}
    </div>
  );
}
