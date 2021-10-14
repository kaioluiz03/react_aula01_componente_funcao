import React, { useState } from 'react';

export const Contador = () => {
    const [number, setNumber] = useState(0);

    return(
        <div className='container'>

            <div className='contResult'>
                <h1>Contador</h1>
                <h2>Você clicou {number} vezes!</h2>
            </div>
            <div className='ContButtons'>

                <button onClick={() => {
                    setNumber(number + 1);
                }}>Decremento</button>
                <button onClick={() => {
                    setNumber(number + 1);
                }}>Incremento</button>

            </div>

        </div>
    )
} 