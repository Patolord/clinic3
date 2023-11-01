export default function FichaResumo({ ficha }) {
  return (
    <div>
      <div className="project-summary">
        <h2 className="page-title">{ficha.nome}</h2>
        <p className="due-date">
          {ficha.createdAt
            ?.toDate()
            .toLocaleDateString("pt-BR", { hour: "2-digit", minute: "2-digit", second: "2-digit" })}
        </p>

        <p className="details">{ficha.queixa}</p>

        <div>
          <h4>Informações Pessoais:</h4>
          <p>CPF: {ficha.dadosPessoais?.CPF}</p>
          <p>Aniversário: {ficha.dadosPessoais?.aniversario}</p>
          <p>Celular: {ficha.dadosPessoais?.celular}</p>
          <p>Email: {ficha.dadosPessoais?.email}</p>
          <p>Idade: {ficha.dadosPessoais?.idade}</p>
          <p>Indicação: {ficha.dadosPessoais?.indicacao}</p>
          <p>Ocupação: {ficha.dadosPessoais?.ocupação}</p>
          <p>Telefone: {ficha.dadosPessoais?.telefone}</p>
        </div>

        <div>
          <h4>Endereço:</h4>
          <p>Bairro: {ficha.endereco?.bairro}</p>
          <p>CEP: {ficha.endereco?.cep}</p>
          <p>Cidade: {ficha.endereco?.cidade}</p>
          <p>Endereço: {ficha.endereco?.endereco}</p>
          <p>Estado: {ficha.endereco?.estado}</p>
        </div>

        <div>
          <h4>Indicado:</h4>
          <p>{ficha.indicado}</p>
        </div>

        <div>
          <h4>Local da Dor:</h4>
          {ficha.localdor?.map((dor, index) => (
            <p key={index}>{dor}</p>
          ))}
        </div>

        <h4>Responsável:</h4>
      </div>
    </div>
  );
}

/*

ficha.queixa
ficha.nome
ficha.localdor.[0]
ficha.dadosPessoais.CPF
ficha.dadosPessoais.aniversario
ficha.dadosPessoais.celular
ficha.dadosPessoais.email
ficha.dadosPessoais.idade
ficha.indicado
ficha.dadosPessoais.ocupação
ficha.dadosPessoais.telefone

*/
