import { useState } from "react"
import styles from "../styles/ThemeSwitch.module.css"

export default function ThemeSwitch()
{
    const [isDark, setIsDark] = useState(false);
    return(
        <div className="switch">
            <i className={isDark ? "fas fa-sun" : "fas fa-moon"}></i>
        </div>
    )
}