import * as React from "react"
import PropTypes from "prop-types"
import { CookiesProvider } from "react-cookie"
import Navbar from "./Navbar"
import Foot from "./Foot"

import "../styles/layout.scss"

export default function Layout({ children })
{
    return (
        <CookiesProvider>
            <Navbar />
            <main>
                {children}
            </main>
            <Foot />
        </CookiesProvider>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}