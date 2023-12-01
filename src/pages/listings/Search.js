import { useState, useEffect } from "react";

export default function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [typingTimeout, setTypingTimeout] = useState(0);

  const handleSearch = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);

    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    setTypingTimeout(
      setTimeout(() => {
        onSearch(newSearchTerm);
      }, 250)
    );
  };

  useEffect(() => {
    return () => {
      if (typingTimeout) {
        clearTimeout(typingTimeout);
      }
    };
  }, [typingTimeout]);

  return <input type="text" className="searchbar" placeholder="Pesquisar" value={searchTerm} onChange={handleSearch} />;
}
