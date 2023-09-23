import { useState } from "react";
import { timestamp } from "../../firebase/config";
import { useAuthContext } from "../../hooks/useAuthContext";

export default function Comentarios() {
  const { user } = useAuthContext();
  const [newComment, setNewComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const commentToAdd = {
      displayName: user.displayName,
      content: newComment,
      createdAt: timestamp.fromDate(new Date()),
      id: Math.random(),
    };
    console.log(commentToAdd);
  };

  return (
    <div className="project-comments">
      <h4>Comentários</h4>

      <form className="add-comment" onSubmit={handleSubmit}>
        <label>
          <span>Adicionar novo comentário:</span>
          <textarea
            required
            onChange={(e) => setNewComment(e.target.value)}
            value={newComment}
          ></textarea>
        </label>
        <button className="btn">Comentar</button>
      </form>
    </div>
  );
}
