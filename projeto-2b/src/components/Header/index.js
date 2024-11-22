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
    const manipularBarra = () =>{
        setnav( navs === `${styles.navaumentado}`?styles.nav:`${styles.navaumentado}`)
        setbarra1( barr1 === `${styles.barra} ${styles.barra1}`?styles.barra:`${styles.barra} ${styles.barra1}`)
        setbarra2( barr2 === `${styles.barra} ${styles.barra2}`?styles.barra:`${styles.barra} ${styles.barra2}`)
        setbarra3( barr3 === `${styles.barra} ${styles.barra3}`?styles.barra:`${styles.barra} ${styles.barra3}`)
        

    };

   
    return (
        <header className={styles.header}>
            <div onClick={()=>manipularBarra()} className={styles.barras}>
                <div className={barr1}></div>
                <div className={barr2}></div>
                <div className={barr3}></div>

            </div>
            <h2 className={styles.h2}>Superformas Géometricas</h2>
            <nav className={navs}>
                <ul className={styles.lista}>
                    <li className={styles.listaitem}>
                        <Link href='/'>Home</Link>
                    </li>
                    <li className={styles.listaitem}>
                        <Link href='/sobre'>Sobre</Link>
                    </li>
                    <li className={styles.listaitem}>
                        <Link href='/state'>State</Link>
                    </li>
                </ul>    
            </nav>

            <Image className={styles.images} src='/images/Logo.png' alt="paia" width={100} height={100}></Image>
        </header>
    )
}

export default index