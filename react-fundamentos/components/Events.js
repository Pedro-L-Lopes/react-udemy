const Events = () =>{

    const handleMyEvent = (e) =>{
        console.log(e)
        console.log("Ativou o evento")
    }

const renderSomthing = (x) =>{
    if(x){
        return <h1>Renderizando isso</h1>
    }else{
        return <h1>Também posso renderizar isso!</h1>
    }
}

    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui</button>
            </div>
            <div>
                <button onClick={() => console.log('Cliclou')}>Clique aqui também</button>
            </div>  
            {renderSomthing()}
        </div>
    );
};

export default Events;