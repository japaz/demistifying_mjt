var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  Port: 3000,
  BundleName: 'bundle',
  Dist: path.join(__dirname, '..', 'dist'),
  Entries: [
    path.join(__dirname, '..', 'src', 'application.js'),
    path.join(__dirname, '..', 'css', 'application.scss')
  ],
  Loaders: [
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: "babel-loader",
      query:
      {
        presets:['es2015', 'react']
      }
    },
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader")
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
    }
  ]
};