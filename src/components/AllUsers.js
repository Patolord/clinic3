import { useCollection } from "../hooks/useCollection";

//styles
import "./AllUsers.css";

export default function AllUsers() {
  const { error, documents } = useCollection("users");

  return (
    <div className="user-list">
      <h2>Pacientes</h2>

      {error && <div className="error">{error}</div>}
      {documents &&
        documents.map((user) => (
          <div key={user.id}>
            <span>{user.displayName}</span>
          </div>
        ))}
    </div>
  );
}
