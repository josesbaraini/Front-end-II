'use client';
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { SessionProvider, useSession} from "next-auth/react";
import { floor } from "lodash";








export default function Props() {
  const { data: session, status } = useSession();
  const [personagen, setPersonagen] = useState(null);

  useEffect(() => {
    if (status === "authenticated" && session.user) {
      // Só atualiza o estado quando a sessão estiver disponível
      setPersonagen(session.user);
      console.log(session.user.classe.comp.hp);
      
    }
  }, [session, status]);

  
  

  
  // const personagen = personagens[session.user.id -1] 

  if (status!="authenticated") {
    return <p>Calma la paizão, vc nem verificou sua conta</p>;
    
  }
  if (!personagen) {
    return <p>Carregando personagem...</p>;
  }
  else {
    
    
  
    return (
    
      <div>
        <div className={styles.main}>
          <div>
            <h1>{personagen.infoP.nome}</h1>
          </div>
          <div className={styles.info}>
            <div className={styles.habilidades}>
              <h2>Habilidades</h2>
              <div className={styles.habilidadesLista}>
                <p>Passivas:</p>
                <p>{personagen.classe.passiva.nome}</p>
                <p>{personagen.classe.passiva.descricao}</p>
                <p>Passiva da Familia</p>
                <p>{personagen.infoP.familia.bonus.habilidade}</p>
                <p>Ativas:</p>
                <p>{personagen.classe.ativa.nome}</p>
                <p>{personagen.classe.ativa.descricao}</p>
              </div>
            </div>
            <div className={styles.famaclassesta}>
            <div className={styles.familiaClassDiv}>
              <div className={styles.familiaClassNome}>
                <p>Familia: {personagen.infoP.familia.nome}</p><br></br><br></br>
                <p>Classe: {personagen.classe.nome}</p>
              </div>
              <div className={styles.familiaClassDescricao}>
          
                
                <p>{personagen.infoP.familia.bonus.descricao}</p><br></br>
                <p>{personagen.classe.descricao}</p>
              </div>
              
            </div>
            <div className={styles.estatisticas}>
  
              
              <h1>Estatisticas:</h1>
              <div>
                <p>Força: {personagen.estatisticas.str} ({Math.floor(((personagen.estatisticas.str)-10)/2)})</p>
                <p>Destreza: {personagen.estatisticas.dex} ({Math.floor(((personagen.estatisticas.dex)-10)/2)})</p>
                <p>Constituicao: {personagen.estatisticas.con} ({Math.floor(((personagen.estatisticas.con)-10)/2)})</p>
                <p>Carisma: {personagen.estatisticas.cha} ({Math.floor(((personagen.estatisticas.cha)-10)/2)})</p>
                <p>Inteligencia: {personagen.estatisticas.int} ({Math.floor(((personagen.estatisticas.int)-10)/2)})</p>
                <p>Sabedoria: {personagen.estatisticas.wis} ({Math.floor(((personagen.estatisticas.wis)-10)/2)})</p>
                <p>Apatia: {personagen.estatisticas.amp} (X{Math.round((((personagen.estatisticas.amp)/10)*0.75) * 4) / 4})</p>
                <p>Empatia: {personagen.estatisticas.emp} (X{Math.round((((personagen.estatisticas.emp)/10)*0.75) * 4) / 4})</p>
  
              </div> 
            </div>
            </div>
  
            
          </div>
         
        </div>
  
      </div>
    
    );
    
  }
  
}
