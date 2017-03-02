import React from "react"
import {Router, browserHistory, Route, IndexRoute} from "react-router"
import Routes from './Routes'

export default class AppRoutes extends React.Component {
    render() {
        return (
            <Router history={ browserHistory } routes={ Routes }/>
        )
    }

}