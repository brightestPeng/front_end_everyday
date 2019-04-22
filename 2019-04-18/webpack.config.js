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
		port:3000,
		hot:true,
		host:"127.0.0.1"
	},
	module:{
		rules:[
			{
				test:/\.js$/,
				exclude:/node_modules/,
				use:["babel-loader"]
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