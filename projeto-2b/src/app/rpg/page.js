'use client'
import _ from "lodash";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Importa useRouter para navegação
import styles from './page.module.css'; // Importa os estilos

export default function App() {
  const targetDate = '2024-12-28T20:00:00';
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft());
  const [isClient, setIsClient] = useState(false);
  const [selects, setSelects] = useState([[], [], [], [], [], [], []]);
  
  const [selections, setSelections] = useState(Array(7).fill('null')); // Para armazenar os valores selecionados em cada select
  const [selectionsSort, setSelectionsSort] = useState(Array(7).fill('null'));
  const router = useRouter(); // Instancia o hook de navegação

  function calculateTimeLeft() {
    const difference = new Date(targetDate) - new Date();
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      return null;
    }
  }

  const [certos, setCertos] = useState(_.sortBy(['Rei', 'Raios', 'Magia', 'Tremer', 'Mundo', 'Abandono', 'Força'], (item) => item.toLowerCase()));
  const [errados, setErrados] = useState([
    'Puresa', 'Sabedoria', 'Coragem', 'Gelo', 'Totalida', 'Sombras', 'Monarca', 'Invencivel', 'Poder', 'Burro', 'Calor', 'Amor', 
    'Sniper', 'Longitude', 'Lua', 'Oraculo', 'Tempo', 'Sangue', 'Macaco', 'Enigma', 
    'Abibos', 'Dilatação', 'Gosma', 'Espada', 'Ether', 'Evolução', 'Arma', 'Alquimia',
    
    'Corrupção', 'Burridão', 'Medo', 'Fogo', 'Parcialidade', 'Luz', 'Aldeão', 'Vencivel', 'Apoder', 'Inteligente', 'Frio', 'Amor2', 
    'Pugilista', 'Latitude', 'Anti-magia', 'Estabilide', 'Cuidado', 'Fraqueza', 'Eletrisidades', 'Abibos2', 
    'Atração', 'Constripação', 'Asperidade', 'Machado', 'Magicule', 'Involução', 'Paz', 'Desalquimia'
  ]);

  useEffect(() => {
    const generateSelects = () => {
      let newSelects = [];
      let remainingCertos = [...certos];
      let remainingErrados = [...errados];

      // Gerar cada select com 1 certo e 4 errados
      for (let i = 0; i < 7; i++) {
        const selectedCerto = _.sample(remainingCertos); // Pega 1 certo
        const selectedErrados = _.sampleSize(remainingErrados, 8); // Pega 4 errados
        let selectTemp = [selectedCerto, ...selectedErrados]
        selectTemp = _.sampleSize(selectTemp, 9)
        // Adiciona o certo e os errados no select correspondente
        newSelects.push(selectTemp);

        // Remove os itens usados da lista de certos e errados
        remainingCertos = remainingCertos.filter(item => item !== selectedCerto);
        remainingErrados = remainingErrados.filter(item => !selectedErrados.includes(item));
      }

      setSelects(newSelects); // Atualiza o estado com as listas de selects
    };

    generateSelects(); // Chama a função para gerar as listas de selects
  }, []);

  useEffect(() => {
    setIsClient(true); // Marca que o cliente está renderizando
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
      
    }, 1000);


    return () => clearInterval(timer); // Cleanup
  }, [targetDate]);

  // Timer para recarregar a página a cada 60 segundos
  useEffect(() => {
    const reloadTimer = setInterval(() => {
      window.location.reload(); // Recarrega a página a cada 60 segundos
    }, 30000); // 60000 ms = 60 segundos

    return () => clearInterval(reloadTimer); // Cleanup do timer
  }, []);



  const handleSelectChange = (index, value) => {
    const newSelections = [...selections];
    newSelections[index] = value;
    setSelections(newSelections);
    setSelectionsSort(_.sortBy(newSelections, (item) => item.toLowerCase()))
  };


  const handleRedirect = () => {
    const sortedSelections = _.sortBy(selections, (item) => item.toLowerCase());
    if (_.isEqual(sortedSelections, certos)) {
      router.push('https://i.pinimg.com/736x/e6/b2/71/e6b271792a254c6ed907bb28b169efbb.jpg');
    } else {
      window.alert('Essa merdinha só existe pq o yuri pediu');
    }
  };
  

  if (!isClient) return null; // Evita renderizar durante a fase de SSR

  if (!timeLeft) {
    return <div>Tempo esgotado!</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.timer}>
        <p>
          {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
        </p>
      </div>

      <div className={styles.selectsContainer}>
        {/* Renderizando os 7 selects */}
        {selects.map((select, index) => (
          <div key={index} className={styles.selectItem}>
            <div className={styles.selectWrapper}>
              <select
                value={selections[index] || ''}
                onChange={(e) => handleSelectChange(index, e.target.value)}
              >
                <option value="">Selecione</option>
                {select.map((item, itemIndex) => (
                  <option key={itemIndex} value={item}>{item}</option>
                ))}
              </select>
            </div>
          </div>
        ))}
      </div>

      {/* Botão de redirecionamento */}
      <div className={styles.buttonWrapper}>
        <button className={styles.botao}
          onClick={handleRedirect}
        >
          Ir para a próxima página
        </button>
      </div>
    </div>
  );
}
