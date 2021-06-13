import React from "react"
import { useState } from "react"
import { useCookies } from "react-cookie"

import * as styles from "../styles/ThemeSwitch.module.scss"

export default function ThemeSwitch()
{
    const [cookies, setCookie, removeCookie] = useCookies(["theme"]);
    const [isDark, setIsDark] = useState(cookies["theme"]);
    return(
        <div className={styles.main} onClick={() => {setCookie("theme", !isDark); setIsDark(!isDark)}}>
            <i className={isDark ? "fas fa-sun" : "fas fa-moon"}></i>
            <link rel="stylesheet" href={isDark ? "/themes/vardark.css" : "/themes/varlight.css"} />
            <link rel="stylesheet" href="/themes/var.css" />
        </div>
    )
}