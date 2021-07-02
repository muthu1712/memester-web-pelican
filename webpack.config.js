const webpack = require('webpack');
const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

const APP_DIR = path.resolve(__dirname, 'src');
const DIST_DIR = path.resolve(__dirname, 'dist');

const config = {
  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: APP_DIR,
    historyApiFallback: true,
    hot: true,
    port: 8110,
    publicPath: 'http://localhost:8110/',
    noInfo: false,
  },
  entry: [
    `${APP_DIR}/index.jsx`,
  ],
  devtool: 'eval',
  resolve: {
    extensions: [
      '*',
      '.js',
      '.jsx',
    ],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
        include: APP_DIR,
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new ESLintPlugin(),
  ],
  mode: 'development',
};

module.exports = config;
