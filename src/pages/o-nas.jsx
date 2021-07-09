import React from "react"
import Layout from "../components/layout"
import * as styles from "../styles/o-nas.module.scss"
import Iframe from 'react-iframe'


export default function ONas() {
    return (
        <Layout>
            <p className={styles.naglowek}>Główny ośrodek naszego zespołu</p>
            <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d551.4014904769929!2d20.703833253768355!3d49.610601806104306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd28d18fb32dc47f8!2sZesp%C3%B3%C5%82%20Szk%C3%B3%C5%82%20Elektryczno-Mechanicznych%20im.%20gen.%20J%C3%B3zefa%20Kustronia!5e0!3m2!1spl!2spl!4v1624127039723!5m2!1spl!2spl"
                width="700px"
                height="450px"
                display="initial"
                allowfullscreen=""
                className={styles.ifr}
            />
            <p style={{backgroundColor: "#3eadcf"}} className={styles.text}>
                <br/>
                <span className={styles.naglowek}> Kim jesteśmy?</span>
                <br/><br/>
                B&P Coders to grupa programistów chcących swoją pracą w dziale IT zmieniać świat na lepsze. Działalność naszej organizacji rozpoczęła się nieformalnie już w 2021r. napędzana pragnieniem samorozwoju i zbudowania czegoś większego.
                Później nasze ambicje i osiągnięcia jedynie rosły...
            </p>
            <p className={styles.text}>
                <span className={styles.naglowek}> Kontakt </span>
                <br/><br/>
                Jeśli chcesz się z nami skontaktować w dowolnej sprawie, możesz do nas napisać na adres mailowy <a className={styles.kontakt} href="mailto:bp.studio@interial.pl">bp.studio@interial.pl</a> lub zadzwonić na numer telefonu <a className={styles.kontakt} href="tel:+48 602 622 102">+48 602 622 102</a>.
            </p>
        </Layout>
    )
}