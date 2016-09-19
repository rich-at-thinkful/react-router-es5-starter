var path = require('path');
var webpack = require('webpack');
var shouldUglify = process.env.uglify === '1';

module.exports = {
  context: path.join(__dirname, "src"),
  entry: "./index",
  output: {
      path: path.join(__dirname, "dist"),
      filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' }
    ]
  },
  devtool: shouldUglify ? '' : 'source-map',
  plugins: shouldUglify ? [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      comments: false
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ] : []
};

