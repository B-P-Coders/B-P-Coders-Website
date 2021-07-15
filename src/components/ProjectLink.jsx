import React from "react"

import * as styles from "../styles/ProjectLink.module.scss"

export default function ProjectLink({ name, link, img, desc})
{
    return (
        <li className={styles.main}>
            <div className={styles.imgcontainer}>
                <a href={link}>
                    <img src={img} alt={name}  />
                </a>
                <div className={styles.textcon}>
                    <h4 className={styles.text}>
                        {name} {desc}
                    </h4>
                </div>
            </div>
        </li>
    )
}