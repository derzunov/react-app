const webpack = require("webpack");
const path = require("path");

module.exports = {
    entry: {
        app: path.join( __dirname, "src", "client-app.js" )
    },
    output: {
        path: path.join(__dirname, "src", "public", "js"),
        filename: "bundle.js"
    },
    module: {
        rules: [{
            test: path.join(__dirname, "src"),
            loader: ["babel-loader"]
        }]
    },
    plugins: []
};