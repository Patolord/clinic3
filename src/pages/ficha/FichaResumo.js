export default function FichaResumo({ ficha }) {
  return (
    <div>
      <div className="project-summary">
        <h2 className="page-title">{ficha.nome}</h2>
        <p className="due-date">
          {ficha.createdAt.toDate().toLocaleDateString("pt-BR")}
        </p>
        <p className="details">{ficha.queixa}</p>
        <h4>Responsável:</h4>
      </div>
    </div>
  );
}
