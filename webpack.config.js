const path = require('path');
const webpack = require('webpack');
const TransferWebpackPlugin = require('transfer-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.sql'],
  },
  plugins: [
    new webpack.IgnorePlugin(/\.\/native/, /\/pg\//),
    // load .sql script files for massive-js
    new TransferWebpackPlugin([{ from: 'node_modules/massive/lib/scripts', to: 'scripts' }]),
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  target: 'node',
  // disable __dirname webpack injection
  node: {
    __dirname: false,
  },
};
