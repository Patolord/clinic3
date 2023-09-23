export default function FichaResumo({ ficha }) {
  return (
    <div>
      <div className="project-summary">
        <h2 className="page-title">{ficha.name}</h2>
        <p className="due-date">Data {ficha.dueDate.toDate().toDateString()}</p>
        <p className="details">{ficha.details}</p>
        <h4>Responsável:</h4>
        <div className="assigned-users"></div>
      </div>
    </div>
  );
}
