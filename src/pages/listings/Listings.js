import { useCollection } from "../../hooks/useCollection";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useState } from "react";

// components
import Fichas from "../../components/Fichas";
import Search from "./Search";

// styles
import "./Listings.css";

export default function Listings() {
  const { documents, error } = useCollection("fichas");
  const { user } = useAuthContext();
  const [searchTerm, setSearchTerm] = useState("");

  console.log(user.uid);
  console.log(user);

  const filteredDocuments = documents?.filter((document) => {
    // Assuming 'title' is the field you want to search by. Adjust as needed. <input type="text" placeholder="Pesquisar" onChange={handleSearch} />
    return document.nome.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <div className="search">
        <h2 className="page-title">Fichas cadastradas</h2>
        <Search onSearch={setSearchTerm} />
      </div>
      <div>
        {error && <p className="error">{error}</p>}
        {filteredDocuments && <Fichas fichas={filteredDocuments} />}
      </div>
    </div>
  );
}
