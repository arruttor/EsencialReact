'use client'

import { useState } from "react";
interface ContadorProps{
    valorInicial :number;
}
export default function Contador(props: ContadorProps){
    const [numero, alterarNumero] = useState(props.valorInicial ?? 0);
    

    function Decrementar(){
        alterarNumero(numero - 1);
    }
    function Incrementar(){
        alterarNumero(numero + 1);
    }



    return(
        <div>
            <h1>Contador</h1>
            <span>{numero}</span>

            <div className="flex gap-2">
                <button onClick={Decrementar} className="bg-red-500">Decrementar</button>
                <button onClick={Incrementar} className="bg-green-500">Incrementar</button>
            </div>
        </div>
    );
}