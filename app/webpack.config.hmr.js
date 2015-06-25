var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: [
    "webpack-dev-server/client?http://localhost:3000",
    "webpack/hot/only-dev-server",
    path.join(__dirname, 'js/entry.js')
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.css'],
    modulesDirectories: ['app', 'node_modules']
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
}
