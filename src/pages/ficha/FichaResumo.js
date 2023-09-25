export default function FichaResumo({ ficha }) {
  return (
    <div>
      <div className="project-summary">
        <h2 className="page-title">{ficha.name}</h2>
        <p className="due-date">
          {ficha.dueDate.toDate().toLocaleDateString("pt-BR")}
        </p>
        <p className="details">{ficha.details}</p>
        <h4>Responsável:</h4>
        {ficha.assignedUsers.displayName}
        <div className="assigned-users"></div>
      </div>
    </div>
  );
}
