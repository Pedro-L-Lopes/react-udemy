const Challeng = () =>{

    const n1 = 5;
    const n2 = 2;

    const handleSoma = (e) =>{
        console.log('A soma é: ' + (n1 + n2))
    }

    return (
        <div>
            <h1>N1: {n1} N2: {n2}</h1>
            <button onClick={handleSoma}>Clique aqui para somar</button>
        </div>
    )
}

export default Challeng;