import React from "react"

import * as styles from "../styles/ProjectLink.module.scss"

export default function ProjectLink({ name, link, img, desc})
{
    return (
        <li className={styles.main}>
            <a href={link} className={styles.imgcontainer}>
                <img src={img} alt={name}  />
            </a>
            <h4 className={styles.text}>
                {name} {desc}
            </h4>
        </li>
    )
}