'use client'
import { useEffect, useState } from "react";
import styles from "./page.module.css";


export default function Afis() {
    let [nomeM,setNomeM] = useState(undefined)
    let [nomeP,setNomeP] = useState(undefined)
    let [medicos,setMedicos] = useState([
      ])
    const getMedicos = async (nomeM,nomeP) =>{


        if (typeof nomeM == 'undefined' && typeof nomeP == 'undefined') {
            let response = await fetch('https://api-clinica-2a.onrender.com/consultas');
            let data = await response.json();
            setMedicos(data);
            
        }else if(typeof nomeM == 'undefined'){
            let response = await fetch('https://api-clinica-2a.onrender.com/consultas');
            let data = await response.json();
            data = data.filter(item => item.paciente.toLowerCase().includes(nomeP.toLowerCase()));
            setMedicos(data);


        }else {
            let response = await fetch('https://api-clinica-2a.onrender.com/consultas');
            let data = await response.json();
            data = data.filter(item => item.medico.toLowerCase().includes(nomeM.toLowerCase()));
            setMedicos(data);

        
            
        }
    
        
        


    }

    function functionNomeP(event) {
        setNomeM(undefined)
        setNomeP(event.target.value)
        
    }
    function functionNomeM(event) {
        setNomeP(undefined)
        setNomeM(event.target.value)
        
    }
    

    useEffect(()=>{
        getMedicos(nomeM,nomeP);
    },[nomeM,nomeP]);
    return (
      <>
        <div className={styles.conteiner}>
            <h1 className={styles.titulo}>Lista de Consultas</h1>
            <input placeholder="Paciente" onChange={(e) => functionNomeP(e)} ></input><input placeholder="Medico" onChange={(e) => functionNomeM(e)} ></input>
            <table className={styles.tabela}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Especialidade</th>
                        <th>Medico</th>
                        <th>Paciente</th>
                        <th>Tipo</th>
                    </tr>
                </thead>
                <tbody >
                {medicos.map((medico)=>(
                    <tr key={medico.id}>
                        <td>{medico.id}</td>
                        <td>{medico.especialidade}</td>
                        <td>{medico.medico}</td>
                        <td>{medico.paciente}</td>
                        <td>{medico.tipo}</td>
                    </tr>

                ))}
                </tbody>
            </table>
        </div>
       
      </>
    );
  }