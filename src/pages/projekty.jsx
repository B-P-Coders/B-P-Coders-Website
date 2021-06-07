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
                <ProjectLink link="https://covid-clicker.netlify.app/" img={covidBanner}/>
            </ul>
        </Layout>
    )
}