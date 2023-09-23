import { Link } from "react-router-dom";

// styles
import "./Fichas.css";

export default function Fichas({ projects }) {
  console.log(projects);

  return (
    <div className="fichas">
      {projects.length === 0 && <p>No projects yet!</p>}
      {projects.map((project) => (
        <Link to={`/projects/${project.id}`} key={project.id}>
          <h4>{project.createdBy.displayName}</h4>
          <p>{project.dueDate.toDate().toDateString()}</p>
          <div className="assigned-to">
            <ul>
              {project.categoriesList.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </Link>
      ))}
    </div>
  );
}
