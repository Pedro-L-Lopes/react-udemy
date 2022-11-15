import { useState } from "react"

const ConditionalRender = () =>{

    const [x] = useState(true)

    const [name, setName] = useState("crebin")

    return (
        <div>
            <h1>Isso será exibido</h1>
            {x && <p>Se x for true, sim!</p>}
            {!x && <p>Agora x é falso</p>}

            <h1>if ternário</h1>
            {name === "zeca" ? (
                <div>
                    <p>O nome é Zeca</p>
                </div>
            ) : (
                <div>
                    <p>Nome não encontrado</p>
                </div>
            )}

            <button onClick={() => setName("zeca")}>Clique aqui</button>
        </div>
    )
}

export default ConditionalRender