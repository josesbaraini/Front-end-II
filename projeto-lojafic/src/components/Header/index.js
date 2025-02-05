'use client';
import { useState} from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css"



const index = () =>{
    const [barr1, setbarra1] = useState(styles.barra);
    const [barr2, setbarra2] = useState(styles.barra);
    const [barr3, setbarra3] = useState(styles.barra);
    const [navs , setnav] = useState(styles.nav)
    const [medDropM , setMedDropM] = useState(styles.divMedItem)
    const [medDropP , setMedDropP] = useState(styles.divMedItem)

    const [medDropC , setMedDropC] = useState(styles.divMedItem)
    const manipularBarra = () =>{
        setnav( navs === `${styles.navaumentado}`?styles.nav:`${styles.navaumentado}`)
        setbarra1( barr1 === `${styles.barra} ${styles.barra1}`?styles.barra:`${styles.barra} ${styles.barra1}`)
        setbarra2( barr2 === `${styles.barra} ${styles.barra2}`?styles.barra:`${styles.barra} ${styles.barra2}`)
        setbarra3( barr3 === `${styles.barra} ${styles.barra3}`?styles.barra:`${styles.barra} ${styles.barra3}`)
        

    };
    const manipularMedDropM = () =>{
        setMedDropM( medDropM === styles.divMedItem?styles.divMedItemAp:styles.divMedItem)


    }
    const manipularMedDropP = () =>{
        setMedDropP( medDropP === styles.divMedItem?styles.divMedItemAp:styles.divMedItem)


    }
    const manipularMedDropC = () =>{
        setMedDropC( medDropC === styles.divMedItem?styles.divMedItemAp:styles.divMedItem)


    }

    

   
    return (
        <header className={styles.header}>
            <div onClick={()=>manipularBarra()} className={styles.barras}>
                <div className={barr1}></div>
                <div className={barr2}></div>
                <div className={barr3}></div>

            </div>
            <h2 className={styles.h2}>Médicos, Paciente e consultas</h2>
            <nav className={navs}>
                <ul className={styles.lista}>
                    <li className={styles.listaitem}>
                        <h1 className={styles.teste} onClick={()=>manipularMedDropM()}>Médico</h1>
                        <div className={medDropM}>
                        <ul>
                            <li>
                                <Link href='/Medicos'>Lista de Medicos\n</Link>
                                

                            </li>
                            <li>
                                PApac
                            </li>
                            <li>
                                PacPac                                
                            </li>

                        </ul>
                    </div>
                    </li>

                    <li className={styles.listaitem}>
                        <h1 className={styles.teste} onClick={()=>manipularMedDropP()}>Paciente</h1>
                        <div className={medDropP}>
                        <ul>
                            <li>
                                <Link href='/consulta'>Lista de Pacientes</Link>
                                

                            </li>
                            <li>
                                PApac
                            </li>
                            <li>
                                PacPac                                
                            </li>

                        </ul>
                    </div>
                    </li>
                    <li className={styles.listaitem}>
                        <h1 className={styles.teste} onClick={()=>manipularMedDropC()}>Médico</h1>
                        <div className={medDropC}>
                        <ul>
                            <li>
                                <Link href='/consulta'>Lista de Consultas</Link>
                                

                            </li>
                            <li>
                                PApac
                            </li>
                            <li>
                                PacPac                                
                            </li>

                        </ul>
                    </div>
                    </li>
                </ul>    
            </nav>
            <Image className={styles.images} src='/images/logo.avif' alt="paia" width={100} height={100}></Image>

        </header>
    )
}

export default index