const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
   entry: "./src/index.js",
   output: {
      path: path.resolve(__dirname, "dist"),
      filename: 'bundle.js'
   },
   module:{
      rules:[
         {
            test: /\.js$/,
            use: "babel-loader"
         },{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract({
               loader: "css-loader"
            })
         }
      ]
   },
   plugins: [
      new ExtractTextPlugin("style.css")
   ]

};
