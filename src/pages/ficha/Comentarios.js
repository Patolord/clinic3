import { useState } from "react";
import { timestamp } from "../../firebase/config";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFirestore } from "../../hooks/useFirestore";
//import { formatDistanceToNow } from "date-fns";

export default function Comentarios({ ficha }) {
  const { user } = useAuthContext();
  const [newComment, setNewComment] = useState("");
  const { updateDocument, response } = useFirestore("fichas");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const commentToAdd = {
      displayName: user.displayName,
      content: newComment,
      createdAt: timestamp.fromDate(new Date()),
      id: Math.random(),
    };
    await updateDocument(ficha.id, {
      comments: [...ficha.comments, commentToAdd],
    });
    if (!response.error) {
      setNewComment("");
    }
  };

  return (
    <div className="project-comments">
      <h4>Comentários</h4>

      <ul>
        {ficha.comments.length > 0 &&
          ficha.comments.map((comment) => (
            <li key={comment.id}>
              <div className="comment-author">
                <p>{comment.displayName}</p>
              </div>
              <div className="comment-date">
                <p>{comment.createdAt.toDate().toLocaleString("pt-BR")}</p>
              </div>
              <div className="comment-content">
                <p>{comment.content}</p>
              </div>
            </li>
          ))}
      </ul>

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
