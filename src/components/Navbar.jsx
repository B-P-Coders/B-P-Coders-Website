import React from "react"
import { Helmet } from "react-helmet"
import CookieConsent from "react-cookie-consent"
import * as styles from "../styles/Navbar.module.scss"

import NavLink from "./NavLink"
import ThemeSwitch from "./ThemeSwitch"

export default function Navbar()
{
    return(
        <nav className={styles.nav}>
            <Helmet>
                {/* portal do head */}
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
            </Helmet>
            <ul>
                <NavLink name="B&P Coders" link="/"/>
                <NavLink name="O nas" link="/o-nas"/>
                <NavLink name="Projekty" link="/projekty"/>
                <li>
                    <ThemeSwitch/>
                </li>
            </ul>
            <CookieConsent
                location="bottom"
                buttonText="Akceptuję"
                cookieName="Accepted"
                style={{backgroundImage: "var(--gradient-two)", color: "var(--bg-color)"}}
                buttonStyle={{backgroundImage: "var(--gradient-one)", color:"var(--bg-color)", border: "1px solid var(--bg-color)", borderRadius: "9999px"}}
                setDeclineCookie={false}>
                Ta strona używa plików cookie, wiec zgodnie z dyrektywą Unii Europejskiej pod groźbą surowej kary, uprzejmie o tym informujemy.
            </CookieConsent>
        </nav>
    )
}