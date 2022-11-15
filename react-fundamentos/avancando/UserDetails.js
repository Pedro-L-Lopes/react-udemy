const UserDetails = ({nome, idade, profissao}) => {
    //let resp = idade>=18 ? "Pode tirar carteira de Motorista" : "Não pode tirar carteira de Motoristas"
  return (
    <div>
        <h1>Registro</h1>
        <p className="testando">Nome: {nome}</p>
        <p>idade: {idade}</p>
        <p>profissão: {profissao}</p>
        {/* </div><p className="testando">{resp}</p> */}
        {idade >= 18 ? (
            <p>Pode tirar carteira de Motorista</p>
        ) : (
            <p>Não pode tirar carteira de Motorista</p>
        )}
    </div>
  )
}

export default UserDetails