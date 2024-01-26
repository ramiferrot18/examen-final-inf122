"use client"

import style from "./about.module.css";
import React, { useState } from "react";

function About(){
    const [estado, setEstado]=useState("About");
    const [Stats, setStats]=useState("Stats");
    return(
        <div className={style.contenedor}>
            <h1>{estado}</h1>
            <div className={style.type}>
                <p>Type</p>
                <br></br>
                <p>height</p>
                <br></br>
                <p>Weight</p>
                <br></br>
                <p>Abilities</p>
                <br></br>
                <div className={style.typer}>
                    <p>water, rock</p>
                    <br></br>
                    <p>0.5m</p>
                    <br></br>
                    <p>11kg</p>
                    <br></br>
                    <p>swift-swim, weak-armor, battle-armor</p>
                </div>
            </div>
            <h1>{Stats}</h1>
            <div className={style.type}>
                <p>HP</p>
                <br></br>
                <p>Attack</p>
                <br></br>
                <p>Defense</p>
                <br></br>
                <p>Speed</p>
                <br></br>
                <div className={style.typer}>
                    <p>80</p>
                    <br></br>
                    <p>90</p>
                    <br></br>
                    <p>55</p>
                    <br></br>
                    <p>55</p>
                </div>
            </div>
        </div>
    )
}
export default About;