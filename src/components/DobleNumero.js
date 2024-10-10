import './../App.css'

function DobleNumero() {
    var ejemplo = 'Soy una variable de dia';
    const numeroDoble = (numero) => {
        var doble = numero * 2;
        console.log(doble);
    };

    const cambiarVariable = () => {
        console.log('Valor Antes: ' + ejemplo);
        ejemplo = 'He cambiado de valor';
        console.log('Valor después: ' + ejemplo);
    };
    var miEstilo ={
        color:'blue',
        backgroundColor:'yellow'
    }
    return (
        <div className='App'>
            <h1 style={miEstilo}>Ejemplo métodos parámetros</h1>
            <h2>{ejemplo}</h2>
            <button onClick={() => cambiarVariable()}>Cambiar Variable</button>
            <button onClick={() => numeroDoble(922)}>Doblar 922</button>
            <button onClick={() => numeroDoble(928)}>Doblar 928</button>
        </div>
    );
}

export default DobleNumero;
