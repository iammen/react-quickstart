var webpack = require('webpack');
var path = require('path');

var DIST_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
	entry: {
		javascript: APP_DIR + '/index.js',
		html: APP_DIR + '/index.html'
	},
	output: {
		path: DIST_DIR,
		filename: 'bundle.js'
	},
    resolve: {
		extensions: ['', '.js', '.jsx', '.json']
	},
	devServer: {
		inline: true,
		contentBase: DIST_DIR,
		port: 8080
	},
	module: {
		loaders: [
			{
				test: /\.html$/,
				loader: "file?name=[name].[ext]"
			},
			{
				test: /\.css$/,
				loader: 'file?name=[name].[ext]'
			},
			{
				test: /\.jsx?/,
				include: APP_DIR,
				exclude: /node_modules/,
				loaders: ['react-hot', 'babel-loader']
			}
		]
	}
};

module.exports = config;