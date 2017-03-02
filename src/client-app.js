import React from "react"
import ReactDOM from "react-dom"
import AppRoutes from "./components/routing/AppRoutes"


window.addEventListener("load", () => {
    ReactDOM.render(<AppRoutes/>, document.getElementById("universal-react-app"))
})