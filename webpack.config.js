// Compiles js and jsx to js and launch dev server

module.exports = {
	entry: './main.js',
	output: {
		path: './',
		filename: 'index.js'		
	},
	devServer: {
		inline: true, //reload on fly
		port: 3333
	},
	module: {
		loaders: [
		{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel',
			query: {
				presets: ['es2015', 'react']
			}
		}
	]
	}
}