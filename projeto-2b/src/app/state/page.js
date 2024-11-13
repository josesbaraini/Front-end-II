'use client';
import { useState } from "react";

export default function () {
    const [msg , setMsg] = useState('');
    const [mostrarDiv, setmostrarDiv] = useState(true)

    // const alterarMsg = () =>{
    //     setMsg('bomdia');
    //     console.log(msg);
    // }
    //  alterarMsg();
    const manipularInput = (evento) =>{
        
        
        setMsg((evento.target.value).toUpperCase());

    };



    return(
        <div>
            {/* <p> {msg} </p>
            <button onClick={alterarMsg}>alterar</button> */}

            <p>Sua mensagem: {msg}</p>
            <input type="text" onChange={manipularInput} />
            <button onClick={()=>setmostrarDiv(!mostrarDiv)}>{mostrarDiv?'Esconder':'Mostrar'}</button>
            {mostrarDiv && (
                <div>
                <p>nOSSASAS ASS</p>
                

            </div>)}

        </div>

    );

};