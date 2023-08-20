import React, {useState} from 'react';

function SubeBaja(){
    const [cont, contadorActual] = useState(0);
    let incrementar = () =>{
        contadorActual(cont + 1);
    }
    let decrementar = () =>{
        contadorActual(cont-1)
    }

    return(
        <div>
            <p>Prueba de incremento: <p>{cont}</p></p>
            <button onClick={incrementar}>Inncrementar</button>

            <button onClick={decrementar}>Decrementar</button>
        </div>
    )
}

export default SubeBaja