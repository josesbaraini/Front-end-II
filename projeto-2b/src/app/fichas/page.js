'use client';
import { useEffect, useState } from "react";
import styles from "./page.module.css";

const personagens =[
  {id: 1,
    'classe':
  {'id':2,
    'descricao':'Uma Classe com um poder incomensuravel',
    'nome':'Matador de Deuses',
    'bonus':
    '-6_emp,6_stp',
    'passiva':
    {'descricao':'Não pode ser machucado por Humanos',
      'nome':'Ser Superior'},
    'ativa':
    {'descricao':'Pode negar uma ação de um Dragão',
      'nome':'Capacidade Infinita'},
    'sub':
    {}},
    'infoJ':
    {'nome':'José','senha':''},
    'infoP':
    {'nome':'Jusefu',
      'familia':{
        "id": 2, "nome": "Juseferson", 'bonus': {'descricao':"Uma familia de Pessoas Invenciveis",'habilidade':"Ganha 99 pra todos os status todos os niveis"}, 'chance':[ 5,'rgb(255, 153, 0)'],
    }},
  'estatisticas':{
    'str':99,
    'wis':99,
    'dex':99,
    'int':99,
    'con':99,
    'amp':99,
    'emp':99,
    'cha':99

  },
  'dracos':[

  ],
  'inv':[

  ]

  },
    {id: 2,
      'classe':
    {'id':1, 'descricao':'Uma classe de Pessoas fortes e destemidas, prontas para lutar frente a frente com um dragão',
      'nome':
      'Guerreiro',
      'bonus':
      '-2_Emp,-4_Int,2_Con,2_Con,2_Con',
      'passiva':
      {'descricao':'Soma os Bonus de Str,Con e Dex como Redução de dano(A Rd é Máxima é 4X seu nivel)',
        'nome':'Resiliencia Viking'},
      'ativa':
      {'descricao':'1X por Rodada o usuario pode somar um Str, Con, ou dex a um Teste ou dano',
        'nome':'Fisico descomunal'},
      'sub':
      {}},
      'infoJ':
      {'nome':'Pedro','senha':'Pedroapplek8'},
      'infoP':
      {'nome':'Urias Belchson',
        'familia':{
        "id": 6, "nome": "Belchson", 'bonus': {'descricao':'Uma familia não conhecida por sua inteligencia e sim pela engenhoside','habilidade':'Uma parte do corpo é "mecanica"'}, 'chance':[ 7,'rgb(250, 0, 0)'],
    }},
    'estatisticas':{
      'str':16,
      'wis':8,
      'dex':14,
      'int':10,
      'con':15,
      'amp':8,
      'emp':13,
      'cha':13

    },
    'dracos':[

    ],
    'inv':[

    ]

    },
    {id: 3,
      'classe':
    {'id':1, 
      'nome':'Guerreiro','descricao':'Uma classe de Pessoas fortes e destemidas, prontas para lutar frente a frente com um dragão',
      'bonus':
      '-2_Emp,-4_Int,2_Con,2_Con,2_Con',
      'passiva':
      {'descricao':'Soma os Bonus de Str,Con e Dex como Redução de dano(A Rd é Máxima é 4X seu nivel)',
        'nome':'Resiliencia Viking'},
      'ativa':
      {'descricao':'1X por Rodada o usuario pode somar um Str, Con, ou dex a um Teste ou dano',
        'nome':'Fisico descomunal'},
      'sub':
      {}},
      'infoJ':
      {'nome':'Lucas','senha':'Lucaslgk10'},
      'infoP':
      {'nome':'Bodil Blorage the Deranged',
        'familia':{
          "id": 7, "nome": "Blorage", 'bonus': {'descricao':'A familia dos lideres da tribo dos Bersekers', 'habilidade':'Almenta em 1 dado o numeros de dados de uma arma, para cada 4 niveis'}, 'chance':[ 7,'rgb(250, 0, 0)'],
      }},
    'estatisticas':{
      'str':15,
      'wis':8,
      'dex':15,
      'int':9,
      'con':15,
      'amp':8,
      'emp':13,
      'cha':13

    },
    'dracos':[

    ],
    'inv':[

    ]

    },
    
    {id: 4,
      'classe':
    {'id':2, 'nome':'Matador de Dragões','descricao':'Uma classe de Pessios obstinadas e descididas a exterminar os dragões da terra.',
      'bonus':
      '-6_emp,6_stp',
      'passiva':
      {'descricao':'Vantegem em qualquer teste que envolva matar Dragões',
        'nome':'Dom natural'},
      'ativa':
      {'descricao':'Pode negar uma ação de um Dragão(Cooldown vai ser 1.5X o cooldonw da ação cancelada)',
        'nome':'Capacidade avançada'},
      'sub':
      {}},
      'infoJ':
      {'nome':'Guilherme','senha':'Guilhermemotorolak9'},
      'infoP':
      {'nome':'Volkihar hofferson',
        'familia':{
          "id": 2, "nome": "Hofferson", 'bonus': {'descricao':"Uma familia de Pessoas fortes e Graciosas",'habilidade':"Ganha 3 de Dex a cada 2 niveis"}, 'chance':[ 5,'rgb(255, 153, 0)'],
      }},
    'estatisticas':{
      'str':15,
      'wis':15,
      'dex':15,
      'int':11,
      'con':15,
      'amp':15,
      'emp':2,
      'cha':8

    },
    'dracos':[

    ],
    'inv':[

    ]

    },
    {id: 5,
      'classe':
    {'id':3, 'nome':'Cavaleiro','descricao':'Uma classe de Pessoas capazes de se conecatr profundamente a qualquer dragão.',
      'bonus':
      '-2_Str,-2_Con,2_Emp',
      'passiva':
      {'descricao':'+2 em qualuquer teste que envolva dragão',
        'nome':'Ligação Forte'},
      'ativa':
      {'descricao':'2X por dia O Usuario ou Dragão se estivrem juntos ganham Adv em um teste',
        'nome':'Trabalho em Equipe'},
      'sub':
      {}},
      'infoJ':
      {'nome':'Pastel','senha':'Pastelxiaomek4'},
      'infoP':
      {'nome':'tem que me falar um nome ne',
        'familia':{
          "id": 5, "nome": "Ingerman", 'bonus': {'descricao':'Uma familia de pessoas estudiosas e empaticas','habilidade':'Ganha 1 ponto de empatia ou inteligencia por nivel'}, 'chance':[ 7,'rgb(250, 0, 0)'],
      }},
    'estatisticas':{
      'str':9,
      'wis':12,
      'dex':12,
      'int':15,
      'con':10,
      'amp':8,
      'emp':15,
      'cha':15

    },
    'dracos':[

    ],
    'inv':[

    ]

    },
    {id: 6,
      'classe':
    {'id':3, 'nome':'Cavaleiro','descricao':'Uma classe de Pessoas capazes de se conecatr profundamente a qualquer dragão.',
      'bonus':
      '-2_Str,-2_Con,2_Emp',
      'passiva':
      {'descricao':'+2 em qualuquer teste que envolva dragão',
        'nome':'Ligação Forte'},
      'ativa':
      {'descricao':'2X por dia O Usuario ou Dragão se estivrem juntos ganham Adv em um teste',
        'nome':'Trabalho em Equipe'},
      'sub':
      {}},
      'infoJ':
      {'nome':'Yuri','senha':'Yuripositivok4'},
      'infoP':
      {'nome':'tem que me falar um nome ne',
        'familia':{
          "id": 8, "nome": "Furane", 'bonus': {'descricao':"Uma Familia de pessoas obcedas com seus Objetivos",'habilidade':'Ganha 1 ponto em uma habiliade da propria escolha por nivel (Menos Apatia e Empatia)'}, 'chance':[ 3,'rgb(255, 255, 0)'],
      }},
    'estatisticas':{
      'str':10,
      'wis':13,
      'dex':10,
      'int':15,
      'con':10,
      'amp':8,
      'emp':15,
      'cha':15

    },
    'dracos':[

    ],
    'inv':[

    ]

    },


];







export default function Props() {
  const escolhePers=()=>{

  }
  const [personagen , setPersonagen] = useState(personagens[0]);
  const [selectJ,setSelectJ] = useState('')
  const [senhaD,setSenhaD] = useState('')



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
              <p>Força: {personagen.estatisticas.str}</p>
              <p>Destreza: {personagen.estatisticas.dex}</p>
              <p>Constituicao: {personagen.estatisticas.con}</p>
              <p>Carisma: {personagen.estatisticas.cha}</p>
              <p>Inteligencia: {personagen.estatisticas.int}</p>
              <p>Sabedoria: {personagen.estatisticas.wis}</p>
              <p>Apatia: {personagen.estatisticas.amp}</p>
              <p>Empatia: {personagen.estatisticas.emp}</p>

            </div> 
          </div>
          </div>

          
        </div>
        <input onChange={(ev)=>(setSenhaD(ev.target.value))}></input>
        <button onClick={()=>setPersonagen(personagens.find(per=> per.infoJ.senha == senhaD)||personagens[0])}>Confirmar Senha</button>
      </div>

    </div>
  );
}
