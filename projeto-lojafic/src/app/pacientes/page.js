'use client'
import { useEffect, useState } from "react";
import styles from "./page.module.css";


export default function Afis() {
    let [nome, setNome] = useState(undefined)
    let [medicos, setMedicos] = useState([
    ])
    const getMedicos = async (nome) => {
        let response = await fetch('https://api-clinica-2a.onrender.com/pacientes');
        let data = await response.json();
        console.log(data, nome)
        if (typeof nome == 'undefined') {
            setMedicos(data);

        } else {
            data = data.filter(item => item.nome.toLowerCase().includes(nome.toLowerCase()));
            setMedicos(data);



        }

        if (!response.ok) {
            throw new Error('Deu rum buscando os dados' + response.statusText);
        }




    }

    useEffect(() => {
        getMedicos(nome);
    }, [nome]);
    return (
        <>
            <div className={styles.conteiner}>
                <h1 className={styles.titulo}>Lista de Pacientes</h1>
                <input onChange={(e) => setNome(e.target.value)} ></input>
                <table className={styles.tabela}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Telefone</th>
                            <th>Email</th>
                            <th>CPF</th>
                        </tr>
                    </thead>
                    <tbody >
                        {medicos.map((medico) => (
                            <tr key={medico.id}>
                                <td>{medico.id}</td>
                                <td>{medico.nome}</td>
                                <td>{medico.telefone}</td>
                                <td>{medico.email}</td>
                                <td>{medico.cpf}</td>

                            </tr>

                        ))}
                    </tbody>
                </table>
            </div>

        </>
    );
}