import React, { useRef } from "react"
import * as styles from "../styles/AnimatedLogo.module.scss"

export default function AnimatedLogo()
{
    const canvas = useRef();
    return(
        <div className="logo">
            <canvas ref={canvas} onLoad={onCanvasLoad}></canvas>
        </div>
    )
    function onCanvasLoad()
    {
        // Paweł zrób animacje 
    }
}