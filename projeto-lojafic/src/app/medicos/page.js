'use client'
import { useEffect, useState } from "react";
import styles from "./page.module.css";


export default function Afis() {
    let [nome,setNome] = useState('')
    let [medicos,setMedicos] = useState([{
        "id": 1,
        "nome": "Alice Alves Nogueira",
        "telefone": "(69) 99932-9014",
        "especialidade":"Anestesiologia"},
        {
          "id": 2,
          "nome": "Alce Silva",
          "telefone": "(99) 99999-9999",
          "especialidade":"Anestesiologia"}
      ])
    const getMedicos = async () =>{
        const response = await fetch('https://back-end-ii-3xed.onrender.com/medicos');
        if (!response.ok) {
            throw new Error('Deu rum buscando os dados'+ response.statusText);
            }
        const data = await response.json();
        setMedicos(data);


    }

    useEffect(()=>{
        getMedicos();
    },[]);
    return (
      <>
        <div className={styles.conteiner}>
            <h1 className={styles.titulo}>Lista de Médicos</h1>
            <input onChange={(e) => setNome(e.target.value)} ></input><h1 >Clica ai men</h1>
            <table className={styles.tabela}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Telefone</th>
                        <th>Especialidade</th>
                    </tr>
                </thead>
                <tbody >
                {medicos.map((medico)=>(
                    <tr key={medico.id}>
                        <td>{medico.id}</td>
                        <td>{medico.nome}</td>
                        <td>{medico.telefone}</td>
                        <td>{medico.especialidade}</td>
                    </tr>

                ))}
                </tbody>
            </table>
        </div>
       
      </>
    );
  }