import React from "react"
import { Helmet } from "react-helmet"
import * as styles from "../styles/Navbar.module.scss"

import NavLink from "./NavLink"
import ThemeSwitch from "./ThemeSwitch"

export default function Navbar()
{
    return(
        <nav>
            <Helmet>
                {/* portal do head */}
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
            </Helmet>
            <ul className={styles.nav}>
                <NavLink name="B&P Coders" link="/"/>
                <NavLink name="Projekty" link="/projekty"/>
                <li>
                    <ThemeSwitch/>
                </li>
            </ul>
        </nav>
    )
}