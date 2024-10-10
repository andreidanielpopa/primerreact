function Saludo(props) {
    let dato = 'Mañana es viernes';
    // let nombre = props.nombre;
    // let edad = props.edad;
    const { edad, nombre } = props;
    return (
        <div>
            <h1>React en Jueves</h1>
            <h2>Dato objetivo: {dato} </h2>
            <h2>
                Su nombre es {nombre} y tiene {edad} años
            </h2>
        </div>
    );
}

export default Saludo;
