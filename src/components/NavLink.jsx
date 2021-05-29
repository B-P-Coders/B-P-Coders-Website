import React from "react"
import styles from "../styles/NavLink.module.css"
import { Link } from "gatsby"

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