'use client';
import { useState, useEffect } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import dynamic from 'next/dynamic';
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

        console.log(retornaListaSpin())
    }
    let [classeBI, setClassBI] = useState(0)
    let [classBE, setClassBe] = useState(0)
    let [classBS, setClassBS] = useState(0)
    let [classBD, setClassBD] = useState(0)
    let [classBC, setClassBC] = useState(0)
    let [classPB, setClassPB] = useState(0)
    let p = 2
    
    const retornaListaSpin = () => {

        const chances = familias.map((familia)=>(familia.chance));
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

        
        console.log(listaSpin);

        return listaSpin;


  






    }
    

    let familias = [
        {
            "id": 1, "nome": "Haddock", 'bonus': p, 'chance': 1,
        }, {
            "id": 2, "nome": "Hofferson", 'bonus': p, 'chance': 3,
        }, {
            "id": 3, "nome": "Jorgenson", 'bonus': p, 'chance': 5,
        }, {
            "id": 4, "nome": "Thorston", 'bonus': p, 'chance': 5,
        }, {
            "id": 5, "nome": "Ingerman", 'bonus': p, 'chance': 5,
        }, {
            "id": 6, "nome": "Belchson", 'bonus': p, 'chance': 3,
        }, {
            "id": 7, "nome": "Blorage", 'bonus': p, 'chance': 3,
        }, {
            "id": 8, "nome": "Furane", 'bonus': p, 'chance': 2,
        }, {
            "id": 9, "nome": "Irmaul", 'bonus': p, 'chance': 7,
        }, {
            "id": 10, "nome": "Tideloot", 'bonus': p, 'chance': 7,
        }, {
            "id": 11, "nome": "Blatr", 'bonus': p, 'chance': 7,
        }, {
            "id": 12, "nome": "Skueave", 'bonus': p, 'chance': 2,
        }, {
            "id": 13, "nome": "Rotmouh", 'bonus': p, 'chance': 10,
        }, {
            "id": 14, "nome": "Sdebor", 'bonus': p, 'chance': 10,
        }, {
            "id": 15, "nome": "Dragnare", 'bonus': p, 'chance': 5,
        }, {
            "id": 16, "nome": "Skarden", 'bonus': p, 'chance': 5,
        }, {
            "id": 17, "nome": "Runeseer", 'bonus': p, 'chance': 10,
        }, {
            "id": 18, "nome": "Grudgestone", 'bonus': p, 'chance': 10,
        }


    ]

    // a Familia é sempre a que ta no index 20
    let [familiaList, setFamilia] = useState([])
    const [familisPers, setFamiliaPers] = useState([])
    const [spins, reduzirSpin] = useState(9)
    const [spinList, setSpinList] = useState(`${styles.spins2}`)

    const reduSpin = () =>{
        if (spins>0) {
            setSpinList(`${styles.spins2} ${styles.spins}` == spinList?`${styles.spins2}`:`${styles.spins2} ${styles.spins}`)
            reduzirSpin(spins-1)
        }
        
        

    }

    useEffect(()=>{
        setFamilia(retornaListaSpin());
    

    },[spins]);
    return (
        <div className={styles.main} >
            <div>



                <Image className={styles.imagem} alt="afis" width={500} height={600} src='/images/image.png'></Image>

            </div>
            <div className={styles.divloca}>
                <p>Quem não dar Play perde</p>
                <iframe
                    width="340"
                    height="360"
                    src="https://www.youtube.com/embed/9MCiixIkzUk?autoplay=1&mute=1&loop=1&playlist=9MCiixIkzUk"
                    title="Tuururu"


                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; autoplay"
                    allowFullScreen
                ></iframe>

                <div className={spinList}>
                    {familiaList.map((familia)=>(
                        <p key={familia.id}
                            value={familia.infoComplete.nome}
                        >{familia.infoComplete.nome}</p>
                    ))}

                </div>
                <button onClick={()=>(reduSpin())}>Nooosa</button>


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