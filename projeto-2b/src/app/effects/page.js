'use client'
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "./page.module.css";


const coisas = () =>{
    let [ufs, setUfs] = useState([])
    let [estado, setEstado] = useState('')

    let [cidades, setCidades] = useState([])
    let [cidade, setCidade] = useState('')
    const getUfs = async () =>{
        const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome');
        if (!response.ok) {
            throw new Error('Deu rum buscando os dados'+ response.statusText);
            }
        const data = await response.json();
        setUfs(data)


    }

    const getCidades = async () =>{
        const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado}/municipios?orderBy=nome`);
        if (!response.ok) {
            throw new Error('Deu rum buscando os dados'+ response.statusText);
            }
        const data = await response.json();
        setCidades(data)


    };
    useEffect(()=>{
        getUfs();
    },[]);

    useEffect(()=>{
        getCidades()
    },[estado]);




    return (
        <main>

            
            
            
            <select onChange={(ev)=>setEstado((ufs.find(estad => estad.nome == ev.target.value ).id))}>
                <option value=''>Selecione o Estado</option>
                {ufs.map((uf)=>(
                    <option
                    key={uf.id}
                    value={uf.nome}>
                        {uf.nome}
                        
                    </option>
                ))}

            </select>
            <select onChange={(ev)=>setCidade(ev.target.value)}>
                <option value=''>Selecione a cidade</option>
                {cidades.map((cidade)=>(
                    <option
                    key={cidade.id}
                    value={cidade.nome}>
                        {cidade.nome}
                    </option>
                ))}

            </select>

            


        </main>
    )
}

export default coisas