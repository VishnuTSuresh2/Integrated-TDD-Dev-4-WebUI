const webpack = require('webpack');
const {resolve} = require('path');


module.exports = {
  devtool: 'source-map',

  entry: "./src/index.ts",

  output: {
    filename: "index.js",
    path: resolve('./dist'),
    library:"Index",
    libraryTarget:"umd"
  },

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
          'postcss-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
  }
};