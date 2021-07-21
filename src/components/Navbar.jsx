import React, { useState } from "react"
import { Helmet } from "react-helmet"
import CookieConsent from "react-cookie-consent"
import * as styles from "../styles/Navbar.module.scss"
import NavLink from "./NavLink"
import ThemeSwitch from "./ThemeSwitch"



export default function Navbar() {

    const [isRel, setIsRel] = useState(false);

    return (
        <nav className={styles.nav}>
            <Helmet>
                <meta charset="utf-8" />
                <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta name="description" content="Oficjalna strona B&P Coders" />
                <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
                <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
                    integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
                    crossorigin="anonymous" />
                <meta name="title" content="B&P Studio" />
                <meta property="description" content="Oficjalna strona internetowa studia programistycznego B&P Coders" />
                <meta property="twitter:title" content="B&P Studio" />
                <meta property="title:description" content="Oficjalna strona B&P Coders" />
                <meta property="og:image" content="covid-clicker-banner.png" />
                <meta property="twitter:image" content="covid-clicker-banner.png" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="shortcut icon" content="/favicon.ico" />
                <meta property="apple icon" content="/favicon.ico" />
                <meta name="description" content="Oficjalna strona B&P Coders" />
                <meta property="og:title" content="B&P Studio" />
                <meta property="og:description" content="Oficjalna strona B&P Coders" />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:creator" content="@piotreknow02 &amp; @OreoPL-Studio &amp; @bart016 &amp; @n00sek" />
                <meta name="twitter:title" content="B&P Studio" />
                <meta name="twitter:description" content="Oficjalna strona B&P Coders" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
            </Helmet>
            <div className={isRel ? styles.burger + " " + styles.burgeron : styles.burger} onClick={() => setIsRel(!isRel)}>
                <div className={styles.line1}></div>
                <div className={styles.line2}></div>
                <div className={styles.line3}></div>
            </div>
            <div className={isRel ? styles.liston : styles.list}>
                <ul className={isRel ? styles.mainon : styles.main}>
                    <NavLink name="B&P Coders" link="/" />
                    <NavLink name="O nas" link="/o-nas" />
                    <NavLink name="Projekty" link="/projekty" />
                    <li>
                        <ThemeSwitch />
                    </li>
                </ul>
            </div>
            <CookieConsent
                location="bottom"
                buttonText="Akceptuję"
                cookieName="Accepted"
                style={{ backgroundImage: "var(--gradient-two)", color: "var(--bg-color)" }}
                buttonStyle={{ backgroundImage: "var(--gradient-one)", color: "var(--bg-color)", border: "1px solid var(--bg-color)", borderRadius: "9999px" }}
                setDeclineCookie={false}>
                Ta strona używa plików cookie, wiec zgodnie z dyrektywą Unii Europejskiej pod groźbą surowej kary, uprzejmie o tym informujemy.
            </CookieConsent>
        </nav>
    )
}