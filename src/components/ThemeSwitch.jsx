import React from "react"
import { useState } from "react"

import styles from "../styles/ThemeSwitch.module.scss"

export default function ThemeSwitch()
{
    const [isDark, setIsDark] = useState(false);
    return(
        <div className="switch" onClick={() => setIsDark(!isDark)}>
            <i className={isDark ? "fas fa-sun" : "fas fa-moon"}></i>
            <link rel="stylesheet" href={isDark ? "/themes/vardark.css" : "/themes/varlight.css"} />
            <link rel="stylesheet" href="/themes/var.css" />
        </div>
    )
}