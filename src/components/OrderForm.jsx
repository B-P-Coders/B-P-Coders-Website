import React from "react"

import * as styles from "../styles/OrderForm.module.scss"

import Checkbox from "./Checkbox"

export default function OrderForm()
{
    return(
        <div className={styles.border}>
            <form method="POST" data-netlify="true" data-netlify-honeypot="bot-field" name="order" className={styles.main} autocomplete="off">
                <h1>Złóż zamówienie</h1>
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="order"/>
                <input required type="text" name="name" placeholder="Imię i nazwisko"/>
                <br />
                <input required type="email" name="email" placeholder="E-mail"/>
                <br />
                <textarea required name="description" placeholder="Opisz swoje zamówienie" rows="10" cols="30"></textarea>
                <br />
                <Checkbox required name="accepted">
                    <h6>Wysyłanie zamówienia na naszą stronę jest równoznaczne z zaakceptowaniem warunków korzystania z naszej strony które jasno mówią o możliwości przechowywania adresów IP v4 naszych klientów. W przypadku naruszania prawa, stalkingu, blokowania działania strony, lub przesyłania dużej ilości niechcianych lub niepotrzebnych wiadomości elektroniczne możemy przekazać te adresy odpowiednim organom ścigania.</h6>
                </Checkbox>
                <input type="submit" value="Wyślij"/>
            </form>
        </div>
    )
}