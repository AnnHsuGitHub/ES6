module.exports={
	entry:['./app/index.js'],
	output:{
      // path:'./build',
      path:require('path').resolve("./dist/js"),
      filename:'bundle.js'
	},
	module:{
		loaders:[
          {
          	loader:'babel-loader',
            test:/\.js$/,
            exclude:/node_modules/
          }
          
		]
	},
	devServer:{
		port:4000,
		contentBase:'./build',
		inline:true
	}
}