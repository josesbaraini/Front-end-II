'use client';
import { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
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
        {'id': 1, 'nome':"Cavaleiro","bonus":[+2,]},
        {'id': 2, 'nome':"Guerreiro","bonus":[-2,]},
        {'id': 3, 'nome':"Matador","bonus":[-6,]}

    ]
    const bonusClasse = (classe) =>{
        let bonus = (classes.find((item)=> item.nome == classe).bonus)
        setClassBe(bonus[0])
        if (classe === 'Cavaleiro') {
            setClassBS(-2)
            setClassBC(-2)
            setClassPB(0)
            setClassBI(0)
            setClassBD(0)
            

            
        }else if(classe === 'Matador') {
            setClassPB(+6)
            setClassBI(0)
            setClassBD(0)
            setClassBS(0)
            setClassBC(0)
            
        }else if(classe === 'Guerreiro') {
            setClassBI(-4)
            setClassBD(+2)
            setClassBS(+2)
            setClassBC(+2)
            setClassPB(0)
            
        }
        
        console.log(bonus)
    }
    let [classeBI, setClassBI] = useState(0)
    let [classBE, setClassBe] = useState(0)
    let [classBS, setClassBS] = useState(0)
    let [classBD, setClassBD] = useState(0)
    let [classBC, setClassBC] = useState(0)
    let [classPB, setClassPB] = useState(0)
    return (
        <div >
            <div>
                

                <select onChange={(ev)=>{bonusClasse(ev.target.value)}}>
                {classes.map((classe) => (
                    <option key={classe.id}
                            value={classe.nome}>
                        {classe.nome}

                    </option>
                ))}

                </select>
                <Image className={styles.imagem} width={500} height={600} src='/images/image.png'></Image>
            

            </div>
            <div className={styles.coisas}>
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
                <p>Inteligencia: {statInt.pontos + classeBI }</p>
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
                <p>Empatia: {(statEmp.pontos)+classBE}</p>
                <button onClick={() => aumentarEmp(true)}>Mais</button>
                <br></br>

                <button onClick={() => aumentarCha()}>Menos</button>
                <p>Carisma: {statCha.pontos}</p>
                <button onClick={() => aumentarCha(true)}>Mais</button>
                <br></br>




            </div>
            





        </div>

    );

};