///COMPONENTS 
import ManageData from './avancando/ManageData';
import ListRender from './avancando/ListRender';
import ConditionalRender from './avancando/ConditionalRender';
import ShowUserName from './avancando/ShowUserName';
import CarDetails from './avancando/CarDetails';
import Fragment from './avancando/Fragment';
import Container from './avancando/Container';
import ExecuteFuntcion from './avancando/ExecuteFunction';
import Message from './avancando/Message';
import ChangeMessageState from './avancando/ChangeMessageState';
import UserDetails from './avancando/UserDetails';
import MyComponents from './cssReact/MyComponents';
import CarDetailsCss from './cssReact/CarDetailsCss';

import { useState } from 'react';

//IMAGENS
//import City from './assets/city.jpg'; //Só usar a variavel {city} no src do img

//STYLES / CSS
import './App.css';

function App() {
  //const name = "katiau"
  const [userName] = useState("Jeffin do Grau")

  const cars = [
    {id: 1, brand: 'ford', color: "branco", newCar: true, km: 0}, 
    {id: 2, brand: 'Kia', color: "amarelo", newCar: true, km: 0}, 
    {id: 3, brand: 'Bugatti', color: "preto", newCar: false, km: 2541}, 
  ]

  const showMensage = ()=> {
      console.log("Evento do componente pai!")
  }

  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg)
  }

  const pessoas = [
    {id: 1, nome: "Crebin", idade: 18, profissao: 'programdor'},
    {id: 2, nome: "Zé do grau", idade: 17, profissao: 'Professor de grau'},
    {id: 3, nome: "Jeffin", idade: 35, profissao: 'Vendedor de coxinha'},
  ]

  const n = 10
  const redTitle = false

  return (
    <div className="App">

        <h1>React com Css</h1>
        {/* Inline css */}
        <p style={{backgroundColor: "black", color: "red", padding: "25px", borderTop: "2px solid red"}}>
          estilizando de forma inline 
        </p>
        {/* Css inline dinamico */}
        <h2 style={n < 10 ? {color: "purple"} : {color: "yellow"}}>
              Css inline dinamico
        </h2>
        <h2 style={n >= 10 ? {color: "purple"} : {color: "yellow"}}>
              Css inline dinamico
        </h2>
        {/* Classe dinamica */}
        <h2 className={redTitle ? "red-title" : "blue-title"}>
            Classe dinamica
        </h2>
        {/* Css modules */}
        <MyComponents/>
        {/* Desafio da sessão */}
        <h1>Detalhes:</h1>
        <div className='car-container'>
          {cars.map((car) => (
              <CarDetailsCss car={car}/>
          ))}
        </div>

        <ManageData/>
        <ListRender/>
        <ConditionalRender/>
        {/* Props */}
        <ShowUserName name={userName}/>
        {/* Destructoring em props */}
        <CarDetails brand="Ford" km={500} color="azul" newCar={false}/>
        {/* Reaproveitadno */}
        <CarDetails brand="Chevrolet" km={0} color="preto" newCar={true}/>
        <CarDetails brand="Fiat" km={2400} color="vermelho" newCar={false}/>
        {/* Loop em array de objetos */}
        {cars.map((car) => (
          <CarDetails key={car.id} brand={car.brand} color={car.color} km={car.km} newCar={car.newCar } />
        ))}
        <Fragment propFragment="teste"/>
        {/* Children */}
        <Container myValue="testing">
            <p>E esté é o conteudo</p>
        </Container>
        <Container myValue="testing 2">
          <h5>Testando de novo</h5>
        </Container>
        <ExecuteFuntcion myFunction={showMensage}/>
        {/* State Lift */}
        <Message msg={message} />
        <ChangeMessageState handleMessage={handleMessage}/>
        {pessoas.map((pessoa) => (
         <UserDetails key={pessoa.id} nome={pessoa.nome} idade={pessoa.idade} profissao={pessoa.profissao}/> 
        ))}
        
    </div>
  );
}

export default App;
