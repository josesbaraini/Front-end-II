import styles from "./props.module.css";
import Card from "@/components/Card"
const carros =[
    {id: 1,
        modelo:'gol',
        ano: 2000,
    
        cor:'azul'
    },
    {id: 2,
        modelo:'celta',
        ano: 2020,
    
        cor:'preto'
    },
    
    {id: 3,
    modelo:'fusca',
    ano: 1999,

    cor:'azul'
    }


]
    


export default function Props() {
  return (
    <div>
      <h1>Props</h1>
      {carros.map((carro)=>( 
      <Card
      key={carro.id}
      id={carro.id}
      modelo={carro.modelo}
      ano={carro.ano}
      cor={carro.cor}
      />

    ))}  
    </div>
  );
}
