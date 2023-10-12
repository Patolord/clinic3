import { useCollection } from "../../hooks/useCollection";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useDocument } from "../../hooks/useDocument";

// components
import Fichas from "../../components/Fichas";

// styles
import "./Listings.css";

export default function Listings() {
  const { documents, error } = useCollection("fichas");
  const { user } = useAuthContext();
  const { document: document2, error: error2 } = useDocument(
    "users",
    user?.uid
  );

  console.log(user.uid);
  console.log(user);
  console.log(document2?.form);

  return (
    <div>
      <h2 className="page-title">Fichas</h2>

      {error && <p className="error">{error}</p>}
      {error2 && <p className="error">{error2}</p>}
      {document2?.form && documents && <Fichas fichas={documents} />}
    </div>
  );
}
