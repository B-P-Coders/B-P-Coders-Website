import React from "react"
import Layout from "../components/layout"

import ProjectLink from "../components/ProjectLink"
import * as styles from "../styles/projekty.module.scss"
import covidBanner from "../images/covid-clicker-banner.png"

export default function Projekt()
{
    return(
        <Layout>
            <h1>Nasze pojekty:</h1>
            <ul>
                <ProjectLink link="https://covidclicker.ml" img={covidBanner} desc="COVID Clicker jest pierwszym wspólnym projektem naszej grupy B&P Coders, wykonywany był on głównie w maju 2021r. Jego tematyką jest COVID-19, a celem wyklikanie dziennej liczby zakażeń odnotowanych danego dnia w Polsce."/>
            </ul>
        </Layout>
    )
}