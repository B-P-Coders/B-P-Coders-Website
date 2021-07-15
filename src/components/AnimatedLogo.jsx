import React, { useEffect, useRef, useImperativeHandle } from "react"
import * as styles from "../styles/AnimatedLogo.module.scss"

import logo from "../images/coders-logo-color.svg"

export default function AnimatedLogo()
{
    const canvas = useRef()
    useImperativeHandle(canvas, canvasAnimation)
    useEffect(canvasAnimation)
    const optimalSize = 500
    return(
        <div className={styles.main} onLoad={() => optimalSize = Math.round(Math.sqrt(window.width * window.height) * 0.8)}>
            <canvas width={optimalSize} height={optimalSize} ref={canvas}></canvas>
        </div>
    )
    function canvasAnimation()
    {
        if (!canvas.current) return
        const ctx = canvas.current.getContext("2d")
        ctx.globalCompositeOperation = "lighter"
        const img = new Image(300, 300)
        img.src = logo
        ctx.drawImage(img, (canvas.current.width / 2) - (img.width / 1.5), (canvas.current.height / 2) - (img.height / 1.5))
        // Paweł zrób animacje 

    }
}