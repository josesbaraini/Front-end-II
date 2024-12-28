'use client'
import styles from "./Card.module.css";

export default function CardF(props) {
    return (
      <div>
        <p style={{color: props.chance[1]}}>{props.chance[0]!=''?props.chance[0]+'%':''}</p>
        <p style={{color: props.chance[1]}}>{props.descricao}</p>
        <p style={{color: props.chance[1]}}>{props.habilidade}</p>
  
        
      </div>
    );
  }