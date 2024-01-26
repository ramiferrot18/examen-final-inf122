"use client"

import Image from "next/image";
import style from "./pokemon.module.css";
import React, { useEffect, useState } from "react";

function Pokemon(){
    const [pokemon,setPokemon]=useState("/vercel.svg");
    const url="https://pokeapi.co/api/v2/pokemon/kabuto";

    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setPokemon(data.sprites.front_default)
            });
    },[]);
    return(
        <div className={style.container}>
            <div className={style.titulo}>
                <h1>My Pokemon</h1>
                <div className={style.nombre}>
                    <h1>Kabuto</h1>
                </div>
            </div>
            <Image src={pokemon} width={250} height={250}/>
        </div>
    )
}
export default Pokemon;