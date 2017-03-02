import React from "react"
import {Router, browserHistory, Route, IndexRoute} from "react-router"
import App from "../pages/App"
import Home from "../pages/Home"
import Cat from "../pages/Cat"

const Routes = (
    <Route path="/" component={ App }>
        <IndexRoute component={ Home }/>
        <Route path="/cat/:catId" component={ Cat } />
    </Route>
)

export default Routes