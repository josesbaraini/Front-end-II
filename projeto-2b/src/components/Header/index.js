import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css"

const index = () =>{
    return (
        <header className={styles.header}>
            <Image className={styles.barras} src='/images/3Barras.png' alt="paia" width={100} height={100}></Image>
            <h2>Superformas Géometricas</h2>
            <nav className={styles.nav}>
                <ul className={styles.lista}>
                    <li className={styles.listaitem}>
                        <Link href='/'>Home</Link>
                    </li>
                    <li className={styles.listaitem}>
                        <Link href='/sobre'>Sobre</Link>
                    </li>
                    <li className={styles.listaitem}>
                        <Link href='/contato'>Coisas</Link>
                    </li>
                </ul>    
            </nav>

            <Image className={styles.images} src='/images/Logotipo.webp' alt="paia" width={100} height={100}></Image>
        </header>
    )
}

export default index