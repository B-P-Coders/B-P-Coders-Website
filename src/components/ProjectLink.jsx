import React from "react"

import * as styles from "../styles/ProjectLink.scss"

export default function ProjectLink({ name, link, img })
{
    return (
        <li>
            <a href={link}>
                <img src={img} alt={name} />
                <h4>{name}</h4>
            </a>
        </li>
    )
}