var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: "eval",
  entry: [
    "webpack-dev-server/client?http://localhost:3000",
    "webpack/hot/only-dev-server",
    "kitchen_sink_entry"
  ],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/static/"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ["", ".js", ".css"],
    modulesDirectories: ["_kitchen_sink_example", "node_modules"]
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ["react-hot", "babel"],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: "style!css"
      }
    ]
  }
};
