module.exports = {
    entry: __dirname+"/src/app.js",
    output: {
    	path:__dirname+"/build",
    	filename:"bundle.js"
    },
    module:{
			loaders:[
				//配置json格式的转换
				{
					test:/\.json$/,
					loader:"json-loader"
				},
        {
  				test:/\.js$/,
  				exclude:/node_modules/,
  				loader:"babel-loader",
  				query:{
  					presets:["es2015","react"]
  				}
  			},
        {
					test:/\.css$/,
					loader:"style-loader!css-loader"
				},
        {
					test:/\.(png|jpg|gif)$/,
					loader:"url-loader?limit=8129"
				}
			]
		}
}
