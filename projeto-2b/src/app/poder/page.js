'use client'
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "./page.module.css";


const coisas = () =>{
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
                
        </main>
    )
}

export default coisas