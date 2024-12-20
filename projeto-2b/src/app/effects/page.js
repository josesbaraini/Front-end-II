'use client'
import Image from "next/image";
import { useState, useEffect } from "react";


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
        console.log(data);

    }

    const getCidades = async () =>{
        const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/33/municipios?orderBy=nome`);
        if (!response.ok) {
            throw new Error('Deu rum buscando os dados'+ response.statusText);
            }
        const data = await response.json();
        setCidades(data)
        console.log(estado);

    };
    useEffect(()=>{
        getUfs();
    },[]);

    useEffect(()=>{
        getCidades()
    },[estado]);




    return (
        <main>
            <select onChange={(ev)=>setEstado(ev.target.value)}>
                <option value=''>Selecione o Estado</option>
                {ufs.map((uf)=>(
                    <option
                    key={uf.id}
                    value={uf}>
                        {uf.nome}
                        {uf.id}
                        
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