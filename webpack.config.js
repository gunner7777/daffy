var path = require('path')
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: '#cheap-eval-source-map',
  entry: [
    './src/scss/main.scss',
    './src/index.js',
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  resolve: {
        extensions: ['', '.js', '.jsx']
  },
  module:{
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!resolve-url!sass-loader?sourceMap')
      },
      {
          test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png|\.jpe?g|\.gif$/,
          loader: "file-loader?name=img/[name].[ext]&publicPath=../",
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('css/style.css', {
      allChunks: true
    })
  ]
};