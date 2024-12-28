'use client'
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <h1>Meu Titulo</h1>
      <Image className={styles.img} src="/images/Capturar.PNG" alt='paia' width={800} height={400}/>
      
    </div>
  );
}
