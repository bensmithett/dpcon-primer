var path = require('path')

module.exports = {
  entry: [path.join(__dirname, 'js/entry.js')],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  resolve: {
    extensions: ['', '.js'],
    modulesDirectories: ['app', 'node_modules']
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
