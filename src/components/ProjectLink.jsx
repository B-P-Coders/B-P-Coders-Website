import React from "react"

import * as styles from "../styles/ProjectLink.scss"

export default function ProjectLink({ name, link, img, desc})
{
    return (
        <li>
            <a href={link} className="image">
                <img src={img} alt={name}  />
                </a>
                <h4 className="text" >{name}
                {desc}
                </h4>
        </li>
    )
}