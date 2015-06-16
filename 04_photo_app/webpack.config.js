var path = require('path')
// var webpack = require('webpack')

module.exports = {
  entry: [path.join(__dirname, 'src/entry.js')],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  resolve: {
    extensions: ['', '.js'],
    modulesDirectories: ['04_photo_app', 'node_modules']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ["babel"],
        exclude: /node_modules/
      }
    ]
  }
}
