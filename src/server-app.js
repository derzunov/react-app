import Express from "express"
import path from "path"
import React from "react"
import { renderToString } from "react-dom/server"
import { match, RouterContext } from "react-router"

// Наши роуты, используемые и на клиенте
import routes from "./components/routing/Routes"


const app = new Express()
app.set( "view engine", "ejs" )
app.set( "views", path.join( __dirname, "server-view" ) )
app.use( Express.static( path.join( __dirname, "public" ) ) )


app.get("*", function( req, res ) {
    match( { routes, location: req.url }, function( error, redirectLocation, renderProps ) {

        // Если есть ошибка, отвечаем ошибкой
        if (error) {
            return res.status( 500 ).send( error.message )
        }

        // Если есть редирект, отвечаем редиректом
        if (redirectLocation) {
            return res.redirect( 302, redirectLocation.pathname + redirectLocation.search )
        }

        // Если все ок, рендерим роут
        if (renderProps) {
            let html = renderToString( <RouterContext { ...renderProps } /> )

            return res.render( "index", { html } )
        }

        // Если не найдено, то не найдено :)
        return res.status(404).send( "Not Found" )
    })
})

const PORT = process.env.PORT || 8080
app.listen( PORT, error => {
    if ( error ) {
        return console.error( error )
    }

    console.log( "Express server running at localhost: " + PORT )
} )