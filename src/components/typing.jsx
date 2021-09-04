import React, { useEffect, useRef } from 'react';
import { init } from 'ityped';
import * as styles from "../styles/typing.scss"

export default function Typing() {

    const ityped = useRef(0);

    useEffect(() => {
        if (!ityped.current) {
          return;
        }
        init(ityped.current, { 
          showCursor: false, 
          strings: ['B&P Coders:',  'Bartosz Mółka',  'Bartosz Turczyński',  'Piotr Nowakowski',  'Paweł Floryan'],
          backDelay: 1000 
        })
      }, []);
    return (
        <h1 className={styles.cursor}><span ref={ityped}>ESsa</span></h1>
    )
}