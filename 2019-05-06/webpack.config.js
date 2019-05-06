const webpack = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode:"development",
	entry:"./src/index.js",
	output:{
		filename:"[name].[hash:8].js",
		path:__dirname + "/dist"
	},
	devServer:{
		port:3001,
		hot:true,
		host:"127.0.0.1"
	},
	module:{
		rules:[
			{
				test:/\.js$/,
				exclude:/node_modules/,
				use:["babel-loader"]
			},
			{
				test:/\.css$/,
				exclude:/node_modules/,
				use:["style-loader","css-loader"]
			},
			{
				test:/\.less$/,
				exclude:/node_modules/,
				use:["style-loader","css-loader","less-loader"]
			},
			{
				test:/\.jpeg/,
				exclude:/node_modules/,
				use:["file-loader"]
			}
		]
	},
	plugins:[
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new htmlWebpackPlugin({
			template:"./public/index.html"
		})
	]
}