import styles from "./Card.module.css";

export default function CardF(props) {
    return (
      <div>
        <p>{props.chance}%</p>
        <p>{props.descricao}</p>
        <p>{props.habilidade}</p>
  
        
      </div>
    );
  }