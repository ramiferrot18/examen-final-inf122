"use client"

import style from "./pokemon.module.css";
import React from "react";

function Pokemon(){
    const [pokemon, setPokemon] = useState("pokemon");
    const url="https://pokeapi.co/api/v2/pokemon/kabuto";
    return(
        <div className={style.contenedor}>
            <Image src={pokemon} height={250} width={250}/>
            
        </div>
    )
}
export default Pokemon;