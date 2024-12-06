import styles from "./Card.module.css";

export default function Card(props) {
    return (
      <div>
        <h1>{props.id} - {props.modelo}</h1>
  
        
      </div>
    );
  }