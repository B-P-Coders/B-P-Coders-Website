import React from "react"

import * as styles from "../styles/Quote.module.scss"

export default function Quote()
{
    return(
        <div className={styles.border}>
            <blockquote className={styles.quote}>
                <p>
                Programiści ścigają się z wszechświatem,
                tworząc większe i lepsze idiotoodporne programy,
                podczas gdy wszechświat stara się stworzyć większych
                i lepszych idiotów. Jak na razie wszechświat wygrywa.
                </p>
                <span>Rich Cook</span>
            </blockquote>
        </div>
    )
}