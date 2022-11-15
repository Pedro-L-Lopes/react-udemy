//useState
import {useState} from 'react'

export const ManageData = () => {

    let someData = 10

    const [number, setNumber] = useState(15)

  return (
    <div>
        <div>
            <p>Valor: {someData}</p>
        </div>
        <div>
            <p>Valor: {number}</p>
            <button onClick={() => setNumber(25)}>Mudar o state</button>
        </div>
    </div>
  )
}

export default ManageData
