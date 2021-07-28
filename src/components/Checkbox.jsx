import React from "react"
import * as styles from '../styles/Checkbox.module.scss'

export default function Checkbox({name, children}) {
  return (
    <div className={styles.checkbox}>
      <input type="checkbox" name={name} id={name} required/>
      <br />
      <span className={styles.span}>{children}</span>
    </div>
  )
}