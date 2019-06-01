const path = require("path");
const webpack = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry:"./src/index.js",
    output:{
        filename:"[name].[hash:8].js",
        path:path.resolve(__dirname,"dist")
    },
    mode:"development",
    devServer:{
        hot:true,
        port:3000
    },
    module:{
        rules:[
            {
                test:/\.js/,
                exclude:/node_modules/,
                use:["babel-loader"]
            },
            {
                test:/\.css/,
                exclude:/node_modules/,
                use:["style-loader","css-loader"]
            }
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new htmlWebpackPlugin({
            template:'./public/index.html'
        })
    ]
}