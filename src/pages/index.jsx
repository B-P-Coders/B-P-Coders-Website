import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import AnimatedLogo from "../components/AnimatedLogo"

import * as styles from "../styles/index.module.scss"

export default function Index()
{
    return (
        <Layout>
            <Seo title="Home" />
            <section id="main">
                <AnimatedLogo/>
                <h1>B&P Coders</h1>
            </section>
            <section id="quote">
                <blockquote></blockquote>
            </section>
        </Layout>
    )
}