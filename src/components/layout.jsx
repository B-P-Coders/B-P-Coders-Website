import * as React from "react"
import PropTypes from "prop-types"


import Navbar from "./Navbar"
import Foot from "./Foot"
import "./layout.css"

export default function Layout({ children })
{
    return (
        <>
            <Navbar />
            <main>
                {children}
            </main>
            <Foot />
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}