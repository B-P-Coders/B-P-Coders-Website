import React from "react"

import * as styles from "../styles/OrderForm.module.scss"

export default function OrderForm()
{
    return(
        <div className={styles.border}>
            <form data-netlify="true" className={styles.main}>
                <h1>Złóż zamówienie</h1>
                <input required type="text" name="name" placeholder="Imię i nazwisko"/>
                <br />
                <input required type="email" name="email" placeholder="E-mail"/>
                <br />
                <textarea required name="description" placeholder="Opisz swoje zamówienie" rows="10" cols="30"></textarea>
                <br />
                <input type="submit" value="Wyślij"/>
            </form>
        </div>
    )
}