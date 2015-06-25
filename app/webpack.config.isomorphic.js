var path = require('path')
var webpack = require('webpack')
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')
var ExtractTextPlugin = require("extract-text-webpack-plugin")

var pageTemplate = function (html) {
  return [
    "<!doctype html>",
    "<html>",
      "<head>",
        "<title>Offical DPC Photo App</title>",
      "</head>",
      "<body>",
        "<div class=\"app-shell\">",
          html,
        "</div>",
        "<script src=\"isomorphic-bundle.js\"></script>",
      "</body>",
    "<html>"
  ].join('')
}

module.exports = {
  entry: [path.join(__dirname, 'js/entry.isomorphic.js')],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'isomorphic-bundle.js',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['', '.js', '.css'],
    modulesDirectories: ['app', 'node_modules']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ["babel"],
        exclude: /node_modules/
      },
      // TODO: Fix CSS
      {
        test: /\.css$/,
        loader: "css"
      }
    ]
  },
  plugins: [
    new StaticSiteGeneratorPlugin('isomorphic-bundle.js', ['/'], {
      template: pageTemplate
    })
  ],
}
