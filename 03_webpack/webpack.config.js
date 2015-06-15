var path = require('path');

module.exports = {
  entry: [path.join(__dirname, "src/my_app.js")],
  output: {
    path: path.join(__dirname, "build"),
    filename: "bundle.js",
    publicPath: "/build/"
  },
  resolve: {
    extensions: ["", ".js"],
    modulesDirectories: ["03_webpack", "node_modules"]
  },
};
