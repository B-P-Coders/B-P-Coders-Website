import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Typing from "../components/typing"
import Layout from "../components/layout"
import Seo from "../components/seo"
import AnimatedLogo from "../components/AnimatedLogo"
import Quote from "../components/Quote"
import OrderForm from "../components/OrderForm"
import * as styles from "../styles/index.module.scss"

export default function Index()
{
    return (
        <Layout>
            <Seo title="Home" />
            <section id="main" className={styles.main}>
                <AnimatedLogo/>
                <div className={styles.title}>
                    <Typing/>
                </div>
            </section>
            <section id="quote" className={styles.quote}>
                <Quote/>
            </section>
            <section id="order" className={styles.order}>
                <OrderForm/>
            </section>
        </Layout>
    )
}