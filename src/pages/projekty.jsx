import React from "react"
import Layout from "../components/layout"

import ProjectLink from "../components/ProjectLink"
import * as styles from "../styles/projekty.module.scss"
import covidBanner from "../images/covid-clicker-banner.png"
import textige from "../images/textige-banner.png"
import chodza from "../images/chodza-sluchy-banner.webp"

export default function Projekt()
{
    return(
        <Layout>
            <h1>Nasze pojekty:</h1>
            <ul className={styles.ul}>
                <ProjectLink link="https://covidclicker.ml" img={covidBanner} desc="COVID Clicker jest pierwszym wspólnym projektem naszej grupy B&P Coders, wykonywany był on głównie w maju 2021r. Jego tematyką jest COVID-19, a celem wyklikanie dziennej liczby zakażeń odnotowanych danego dnia w Polsce."/>
                <ProjectLink link="https://textige.ml" img={textige} desc="Strona w budowie...."/>
                <ProjectLink link="https://chodzasluchy.ml" img={chodza} desc="Strona przygotowana dla klasy 2C w I LO w Nowym Sączu. Był to pierwszy dochodowy projekt B&P Coders, który pomógł rozwinąć się dziennikarsko innym uczniom."/>

     
            </ul>
        </Layout>
    )
}