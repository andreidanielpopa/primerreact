function Metodos() {
    const mostrarMensaje = () => {
        console.log('Boton Pulsado');
    };
    return (
        <div>
            <h1>Ejemplo métodos React</h1>
            {mostrarMensaje()}
            <button onClick={()=>mostrarMensaje()}>Pulsa para cositas</button>
        </div>
    );
}

export default Metodos;
