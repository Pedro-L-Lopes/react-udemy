import { useState } from "react";

const ListRender = () => {
    
    const [list] = useState (["Matheus", "Crebin", "Marquinhos"])

    const [users, setUsers] = useState ([
        {id: 1, name: "Crebin do grau", age: 18},
        {id: 2, name: "Relmapago", age: 20},
        {id: 3, name: "Creito", age: 27},
    ])

    const deleteRandom = () =>{

        const randomNumber = Math.floor(Math.random() * 4)
         
        setUsers((prevUsers) =>{
            return prevUsers.filter((user) => randomNumber !== user.id)
        }) 

    }

    return(
        <div>   
            <ul>
                {list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.age}
                    </li>
                ))}
            </ul>
            <button onClick={deleteRandom}>Delete random user</button>
        </div>
    )
}

export default ListRender