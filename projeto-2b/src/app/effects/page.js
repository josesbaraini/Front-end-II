'use client'
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "./page.module.css";


const coisas = () =>{
    // let [ufs, setUfs] = useState([])
    // let [estado, setEstado] = useState('')

    // let [cidades, setCidades] = useState([])
    // let [cidade, setCidade] = useState('')
    // const getUfs = async () =>{
    //     const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome');
    //     if (!response.ok) {
    //         throw new Error('Deu rum buscando os dados'+ response.statusText);
    //         }
    //     const data = await response.json();
    //     setUfs(data)
    //     console.log(data);

    // }

    // const getCidades = async () =>{
    //     const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/33/municipios?orderBy=nome`);
    //     if (!response.ok) {
    //         throw new Error('Deu rum buscando os dados'+ response.statusText);
    //         }
    //     const data = await response.json();
    //     setCidades(data)
    //     console.log(estado);

    // };
    // useEffect(()=>{
    //     getUfs();
    // },[]);

    // useEffect(()=>{
    //     getCidades()
    // },[estado]);
    let [poder , setPoder] = useState(0)
    const manipularPoder = (evento) =>{

        setPoder(Number(evento.target.value))
    }




    return (
        <main className={styles.main}>
                <div className={styles.div}>
                <input className={styles.input} type="text" onChange={manipularPoder} />
                <p className={styles.texto}>Dano: {8 +(2*poder)}d8 + { 5*(4+poder)} </p>
                <p className={styles.texto}>Critico: {20 -(poder*2)} ou mais </p>
                <p className={styles.texto}>Dano critico: {(8 +(2*poder))*(2+poder)}d8 + { 5*(4+poder)}  </p>
                <p className={styles.texto}>Acerto: 1d20 + 15 ou 19 ou 21</p>
                </div>
            
            
            
            {/* <select onChange={(ev)=>setEstado(ev.target.value)}>
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

            </select> */}

            


        </main>
    )
}

export default coisas