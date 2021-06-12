import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import * as styles from "../styles/index.module.scss"

export default function Index()
{
    return (
        <Layout>
            <Seo title="Home" />
            <p>Oficjalna strona B&P Coders</p>
            <StaticImage
                src="../images/BP-profile-coders-logo-web-color.png"
                width={300}
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="logo"
            />
        </Layout>
    )
}