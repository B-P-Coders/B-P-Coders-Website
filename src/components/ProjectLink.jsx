import React from "react"

import * as styles from "../styles/ProjectLink.scss"

export default function ProjectLink({ name, link, img })
{
    return (
        <li>
            <a href={link} className="image">
                <img src={img} alt={name}  />
                </a>
                <h4 className="text" >{name}
                COVID Clicker jest pierwszym wspólnym projektem naszej grupy B&P Coders, wykonywany był on głównie w maju 2021r. Jego tematyką jest COVID-19, a celem wyklikanie dziennej liczby zakażeń odnotowanych danego dnia w Polsce.
                </h4>
        </li>
    )
}