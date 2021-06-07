import React from "react"
import { Link } from "gatsby"

import * as styles from "../styles/NavLink.module.scss"

export default function NavLink({name, link})
{
    return(
        <li>
            <Link to={link}>
                <h3>{name}</h3>
            </Link>
        </li>
    )
}