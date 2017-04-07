const webpack = require('webpack');
const {resolve} = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  target: "web",
  entry: "./src/index.tsx",

  output: {
    filename: "index.js",
    path: resolve('./dist'),
    library:"Index",
    libraryTarget:"umd"
  },
  devServer: { inline: true },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      },

      {
        test: /\.(ts|tsx)$/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          //'postcss-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
    alias: {
        jquery: "jquery/src/jquery"
    }
  },
  plugins: [new HtmlWebpackPlugin()]
};