module.exports = {
	entry: __dirname + '/component/layout.js',
	output:{
		path: __dirname+'/src',
		filename: "bundle.min.js"
	},
	module:{
		loaders:[
			{
				test: /\.js$/,
				loader: "babel-loader",
				query:{
					presets:['react','es2015']
				}
			}
		]
	}
}