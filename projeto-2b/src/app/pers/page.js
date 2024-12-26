'use client';
import { useState, useEffect } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import CardF from "@/components/CardF"
import _ from 'lodash';

export default function () {



    const [pointLeft, setPointLeft] = useState(32);
    const [statStr, setStr] = useState({ 'pontos': 8, 'limite': 7 });
    const [statWis, setWis] = useState({ 'pontos': 8, 'limite': 7 });
    const [statAmp, setAmp] = useState({ 'pontos': 8, 'limite': 7 });
    const [statDex, setDex] = useState({ 'pontos': 8, 'limite': 7 });
    const [statEmp, setEmp] = useState({ 'pontos': 8, 'limite': 7 });
    const [statInt, setInt] = useState({ 'pontos': 8, 'limite': 7 });
    const [statCon, setCon] = useState({ 'pontos': 8, 'limite': 7 });
    const [statCha, setCha] = useState({ 'pontos': 8, 'limite': 7 });

    const aumentarAmp = (s) => {
        if (s) {
            if ((pointLeft + classPB) > 0 & statAmp.limite > 0) {
                setAmp({ 'pontos': statAmp.pontos + 1, 'limite': statAmp.limite - 1 })
                setPointLeft(pointLeft - 1)

            }
        }

        else {
            if (statAmp.limite <= 6) {
                setAmp({ 'pontos': statAmp.pontos - 1, 'limite': statAmp.limite + 1 })
                setPointLeft(pointLeft + 1)
            }

        };

    }
    const aumentarEmp = (s) => {
        if (s) {
            if ((pointLeft + classPB) > 0 & statEmp.limite > 0) {
                setEmp({ 'pontos': statEmp.pontos + 1, 'limite': statEmp.limite - 1 })
                setPointLeft(pointLeft - 1)
                console.log(statEmp.limite);
            }
        }

        else {
            if (statEmp.limite <= 6) {
                setEmp({ 'pontos': statEmp.pontos - 1, 'limite': statEmp.limite + 1 })
                setPointLeft(pointLeft + 1)
            }

        };

    }
    const aumentarCha = (s) => {
        if (s) {
            if ((pointLeft + classPB) > 0 & statCha.limite > 0) {
                setCha({ 'pontos': statCha.pontos + 1, 'limite': statCha.limite - 1 })
                setPointLeft(pointLeft - 1)
                console.log(statCha.limite);
            }
        }

        else {
            if (statCha.limite <= 6) {
                setCha({ 'pontos': statCha.pontos - 1, 'limite': statCha.limite + 1 })
                setPointLeft(pointLeft + 1)
            }

        };

    }
    const aumentarCon = (s) => {
        if (s) {
            if ((pointLeft + classPB) > 0 & statCon.limite > 0) {
                setCon({ 'pontos': statCon.pontos + 1, 'limite': statCon.limite - 1 })
                setPointLeft(pointLeft - 1)
                console.log(statCon.limite);
            }
        }

        else {
            if (statCon.limite <= 6) {
                setCon({ 'pontos': statCon.pontos - 1, 'limite': statCon.limite + 1 })
                setPointLeft(pointLeft + 1)
            }

        };

    }
    const aumentarInt = (s) => {
        if (s) {
            if ((pointLeft + classPB) > 0 & statInt.limite > 0) {
                setInt({ 'pontos': statInt.pontos + 1, 'limite': statInt.limite - 1 })
                setPointLeft(pointLeft - 1)
                console.log(statInt.limite);
            }
        }

        else {
            if (statInt.limite <= 6) {
                setInt({ 'pontos': statInt.pontos - 1, 'limite': statInt.limite + 1 })
                setPointLeft(pointLeft + 1)
            }

        };

    }
    const aumentarDex = (s) => {
        if (s) {
            if ((pointLeft + classPB) > 0 & statDex.limite > 0) {
                setDex({ 'pontos': statDex.pontos + 1, 'limite': statDex.limite - 1 })
                setPointLeft(pointLeft - 1)
                console.log(statDex.limite);
            }
        }

        else {
            if (statDex.limite <= 6) {
                setDex({ 'pontos': statDex.pontos - 1, 'limite': statDex.limite + 1 })
                setPointLeft(pointLeft + 1)
            }

        };

    }
    const aumentarStr = (s) => {
        if (s) {
            if ((pointLeft + classPB) > 0 & statStr.limite > 0) {
                setStr({ 'pontos': statStr.pontos + 1, 'limite': statStr.limite - 1 })
                setPointLeft(pointLeft - 1)
                console.log(statStr.limite);
            }
        }

        else {
            if (statStr.limite <= 6) {
                setStr({ 'pontos': statStr.pontos - 1, 'limite': statStr.limite + 1 })
                setPointLeft(pointLeft + 1)
            }

        };

    }
    const aumentarWis = (s) => {
        if (s) {
            if ((pointLeft + classPB) > 0 & statWis.limite > 0) {
                setWis({ 'pontos': statWis.pontos + 1, 'limite': statWis.limite - 1 })
                setPointLeft(pointLeft - 1)
                console.log(statWis.limite);
            }
        }

        else {
            if (statWis.limite <= 6) {
                setWis({ 'pontos': statWis.pontos - 1, 'limite': statWis.limite + 1 })
                setPointLeft(pointLeft + 1)
            }

        }
    }
    const classes = [
        { 'id': 1, 'nome': "Cavaleiro", "bonus": [+2,] },
        { 'id': 2, 'nome': "Guerreiro", "bonus": [-2,] },
        { 'id': 3, 'nome': "Matador", "bonus": [-6,] }

    ]
    const bonusClasse = (classe) => {
        let bonus = (classes.find((item) => item.nome == classe).bonus)
        setClassBe(bonus[0])
        if (classe === 'Cavaleiro') {
            setClassBS(-2)
            setClassBC(-2)
            setClassPB(0)
            setClassBI(0)
            setClassBD(0)


        } else if (classe === 'Matador') {
            setClassPB(+6)
            setClassBI(0)
            setClassBD(0)
            setClassBS(0)
            setClassBC(0)
        

        } else if (classe === 'Guerreiro') {
            setClassBI(-4)
            setClassBD(+2)
            setClassBS(+2)
            setClassBC(+2)
            setClassPB(0)

        }
    }
    let [classeBI, setClassBI] = useState(0)
    let [classBE, setClassBe] = useState(0)
    let [classBS, setClassBS] = useState(0)
    let [classBD, setClassBD] = useState(0)
    let [classBC, setClassBC] = useState(0)
    let [classPB, setClassPB] = useState(0)
    
    const pegaF = ()=>{
        return familiaList[19] || {'id':0,'infoComplete':familias[0]}

    }
    
    const retornaListaSpin = () => {
    

        const chances = familias.map((familia)=>(familia.chance[0]));
        const familiasI = familias.map((familia)=>(familia.id));

        const weightedArray = _.flatMap(familiasI, (value, index) =>
            (_.repeat(value +' ', chances[index]).split(" ")).filter((item)=> item!='')
        );
        let listaSpin = []
        for (let index = 0; index < 20; index++) {
            
            listaSpin.push(_.sample(weightedArray))

        }
        

        listaSpin = listaSpin.map((item, index)=>({
            'id':index,
            'infoComplete':familias.find((familia)=>((item==familia.id)))

        }))
        
        

        
        
        return listaSpin;


  






    }
    

    let familias = [
        {
            "id": 1, "nome": "Haddock", 'bonus': {'descricao':"A Familia do chefes de Berk com uma grande capacidade de crecimento",'habilidade':"Ganha 6 pontos aleatorios de Status a cada 2 nivel(Menos Apatia e Empatia)."}, 'chance':[ 1,'rgb(116, 0, 211)']
,
        }, {
            "id": 2, "nome": "Hofferson", 'bonus': {'descricao':"Uma familia de Pessoas fortes e Graciosas",'habilidade':"Ganha 3 de Dex a cada 2 niveis"}, 'chance':[ 5,'rgb(255, 153, 0)'],
        }, {
            "id": 3, "nome": "Jorgenson", 'bonus': {'descricao':"Uma familia conhecida com por sua proeza fisica e resistencia","habilidade":"Ganha 1 ponto de Força ou Contituição por nivel"}, 'chance':[ 7,'rgb(250, 0, 0)'],
        }, {
            "id": 4, "nome": "Thorston", 'bonus': {'descricao':'Uma familia de pessoa brutas e resistentes','habilidade':'Ganha 1 ponto de Constituicao ou Dextreza'}, 'chance':[ 7,'rgb(250, 0, 0)'],
        }, {
            "id": 5, "nome": "Ingerman", 'bonus': {'descricao':'Uma familia de pessoas estudiosas e empaticas','habilidade':'Ganha 1 ponto de empatia ou inteligencia por nivel'}, 'chance':[ 7,'rgb(250, 0, 0)'],
        }, {
            "id": 6, "nome": "Belchson", 'bonus': {'descricao':'Uma familia não conhecida por sua inteligencia e sim pela engenhoside','habilidade':'Uma parte do corpo é "mecanica"'}, 'chance':[ 7,'rgb(250, 0, 0)'],
        }, {
            "id": 7, "nome": "Blorage", 'bonus': {'descricao':'A familia dos lideres da tribo dos Bersekers', 'habilidade':'Almenta em 1 dado o numeros de dados de uma arma, para cada 4 niveis'}, 'chance':[ 7,'rgb(250, 0, 0)'],
        }, {
            "id": 8, "nome": "Furane", 'bonus': {'descricao':"Uma Familia de pessoas obcedas com seus Objetivos",'habilidade':'Ganha 1 ponto em uma habiliade da propria escolha por nivel (Menos Apatia e Empatia)'}, 'chance':[ 3,'rgb(255, 255, 0)'],
        }, {
            "id": 9, "nome": "Irmaul", 'bonus': {'descricao':'Uma familia de Homens sanguinarios e impiedodos','habilidade':'Ganha 1 ponto de Apatia a cada 2 niveis'}, 'chance':[ 3,'rgb(255, 255, 0)'],
        }, {
            "id": 10, "nome": "Tideloot", 'bonus': {'descricao':'Uma familia de comerciantes renomados', 'habilidade':'Ganha 1 ponto de carisma por nivel'}, 'chance':[ 10,'rgb(0, 183, 255)'],
        }, {
            "id": 11, "nome": "Blatr", 'bonus': {'descricao':'Uma familia de pessoas astuta','habilidade':'Ganha 1 ponto de Inteligencia por nivel'}, 'chance':[ 10,'rgb(0, 183, 255)'],
        }, {
            "id": 12, "nome": "Skueave", 'bonus': {'descricao':'Uma familia forte e resistente','habilidade':'Ganha 1 ponto de sabedoria e 1 de força por nivel'}, 'chance':[ 3,'rgb(255, 255, 0)'],
        }, {
            "id": 13, "nome": "Rotmouh", 'bonus': {'descricao':'Uma familia de seres ransinsas porem resilientes','habilidade':'Ganha 1 de constituiçâo ou em inteligencia a cada 2 niveis'}, 'chance':[ 14,'rgb(37, 224, 62)'],
        }, {
            "id": 14, "nome": "Sdebor", 'bonus': {'descricao':'Uma familia de pessoas sombrias e subservientes','habilidade':'Ganha 1 ponto de força a cada 3 niveis, a cada 1 nivel caso sirva ao um Skueave'}, 'chance':[ 16,'rgb(255, 255, 255)'],
        }


    ]

    // a Familia é sempre a que ta no index 20
    let [familiaList, setFamilia] = useState([])
    const [familisPers, setFamiliaPers] = useState({'id':0,'infoComplete':familias[0]})
    const [spins, reduzirSpin] = useState(10)
    const [spinList, setSpinList] = useState(`${styles.spins2}`)

    const reduSpin = () =>{
        if (spins>0) {

            
            reduzirSpin(spins-1)
        }
        
        

    }

    useEffect(()=>{
        if (spinList==`${styles.spins2}`) {
            setSpinList(`${styles.spins2} ${styles.spins}`)

        }else{
            setSpinList(`${styles.spins2}`)
            setInterval(() => {
                setSpinList(`${styles.spins2} ${styles.spins}`)
                
            }, 500);

        }
        

        

    },[familiaList]);


    useEffect(()=>{
        

        setFamiliaPers(pegaF());
        console.log(familisPers.infoComplete.nome)
        

    },[familiaList]);

    useEffect(()=>{

        setFamiliaPers(pegaF());

        let setfamilia = retornaListaSpin();
        setFamilia(setfamilia);
        
    

    },[spins]);

    const [imagemOnn, setImagemOn] = useState(true)
    return (
        <div className={styles.main} >
            <div>



                {imagemOnn?<Image className={styles.imagem} alt="afis" width={500} height={600} src='/images/image.png'></Image>:''}
                <button style={{color:  'black'}} onClick={()=>setImagemOn(!imagemOnn)}>{imagemOnn?'Botão que guarda a imagem':'Botão que Mostra a imagem'}</button>

            </div>
            <div  className={styles.divloca}>
                <p>Quem não dar Play perde</p>
                <iframe
                    width="340"
                    height="360"
                    src="https://www.youtube.com/embed/9MCiixIkzUk?autoplay=1&mute=1&loop=1&playlist=9MCiixIkzUk"
                    title="Tuururu"


                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; autoplay"
                    allowFullScreen
                ></iframe>

                <div className={styles.divSpins}>
                    <div className={spinList}>
                    {familiaList.map((familia)=>(
                        <p key={familia.id}
                            value={familia.infoComplete.nome}
                        >{familia.infoComplete.nome}</p>
                    ))}

                </div>
                <button onClick={()=>(reduSpin())}>Nooosa</button>
                <p>Spins: {spins}</p>

                {<CardF
                    
                      key={familisPers.id}
    
                      chance={familisPers.infoComplete.chance}
                      nome={familisPers.infoComplete.nome}
                      descricao={familisPers.infoComplete.bonus.descricao}
                      habilidade={familisPers.infoComplete.bonus.habilidade}
                      />
                
                    }
                    </div>


            </div>
            <div className={styles.coisas}>
                <select onChange={(ev) => { bonusClasse(ev.target.value) }}>
                    {classes.map((classe) => (
                        <option key={classe.id}
                            value={classe.nome}>
                            {classe.nome}

                        </option>
                    ))}

                </select>
                <p>Pontos Para destribuir: {(pointLeft + classPB)}</p>

                <br></br>
                <button onClick={() => aumentarStr()}>Menos</button>
                <p>Força: {statStr.pontos + classBS}</p>
                <button onClick={() => aumentarStr(true)}>Mais</button>
                <br></br>

                <button onClick={() => aumentarWis()}>Menos</button>
                <p>Sabedoria: {statWis.pontos}</p>
                <button onClick={() => aumentarWis(true)}>Mais</button>
                <br></br>

                <button onClick={() => aumentarDex()}>Menos</button>
                <p>Destreza: {statDex.pontos + classBD}</p>
                <button onClick={() => aumentarDex(true)}>Mais</button>
                <br></br>

                <button onClick={() => aumentarInt()}>Menos</button>
                <p>Inteligencia: {statInt.pontos + classeBI}</p>
                <button onClick={() => aumentarInt(true)}>Mais</button>
                <br></br>
                <button onClick={() => aumentarCon()}>Menos</button>
                <p>Constituição: {statCon.pontos + classBC}</p>
                <button onClick={() => aumentarCon(true)}>Mais</button>
                <br></br>

                <button onClick={() => aumentarAmp()}>Menos</button>
                <p>Apatia: {statAmp.pontos}</p>
                <button onClick={() => aumentarAmp(true)}>Mais</button>
                <br></br>

                <button onClick={() => aumentarEmp()}>Menos</button>
                <p>Empatia: {(statEmp.pontos) + classBE}</p>
                <button onClick={() => aumentarEmp(true)}>Mais</button>
                <br></br>

                <button onClick={() => aumentarCha()}>Menos</button>
                <p>Carisma: {statCha.pontos}</p>
                <button onClick={() => aumentarCha(true)}>Mais</button>
                <br></br>

                <p>nadar : 0</p>




            </div>






        </div>

    );

};