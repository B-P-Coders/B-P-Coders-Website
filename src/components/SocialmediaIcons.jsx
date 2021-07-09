import React from "react"
import * as styles from "../styles/SocialmediaIcons.module.scss"

export default function SocalmediaIcons()
{
    const media = [
        {
            icon: "fab fa-facebook-square",
            link: "https://www.facebook.com/pages/category/Video-Game/Clicker-korony-100514545571207/",
        },
        {
            icon: "fab fa-facebook-messenger",
            link: "https://m.me/100514545571207"
        },
        {
            icon: "fas fa-envelope",
            link: "mailto:bp.studio@interial.pl"
        },
        {
            icon: "fas fa-phone",
            link: "tel:+48 602 622 102"
        },
        {
            icon: "fab fa-github",
            link: "https://github.com/B-P-Coders"
        },
        {
            icon: "fas fa-code-branch",
            link: "https://github.com/B-P-Coders/covid-clicker"
        }
    ]
    return(
        <div className={styles.container}>
            {media.map((e) => {
                const r = rand()
                return(<a href={e.link}><i className={e.icon} style={{color: r === 1 ? "var(--primary-color)" : r === 2 ? "var(--secondary-color)" : "var(--accent-color)" }}></i></a>)
                } 
            )}
        </div>
    )
}

function rand()
{
    return Math.ceil(Math.random() * 3)
}