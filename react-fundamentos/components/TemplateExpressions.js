const TemplateExpressions = () => {
    
    const name = 'Crebin';
    const objeto = {
        age: 31,
        job: "Programador",
    }

    return(
        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <p>você é {objeto.job.toLowerCase()} certo?</p>
        </div>
    );
};

export default TemplateExpressions;