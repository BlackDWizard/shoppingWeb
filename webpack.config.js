const path = require('path');
const webpack = require('webpack');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const dotenv = require('dotenv');

const isProd = process.env.NODE_ENV === 'production';

const envFile = dotenv.config().parsed || {};

const envKeys = Object.keys(envFile).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(envFile[next]);
  return prev;
}, {});

for (const key in process.env) {
  if (key.startsWith('REACT_APP_')) {
    envKeys[`process.env.${key}`] = JSON.stringify(process.env[key]);
  }
}
module.exports = {
  mode: isProd ? 'production' : 'development',
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.[contenthash].js',
    clean: true,
    publicPath: isProd ? '/shoppingWeb/' : '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              ['@babel/preset-react', { runtime: 'automatic' }]
            ],
          }
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    new webpack.DefinePlugin(envKeys),
    new HtmlWebpackPlugin({
      minify: false,
    }),
    // new CopyPlugin({
    //   patterns: [
    //     { from: 'web.config', to: '.' }
    //   ],
    // }),
    new CopyPlugin({
      patterns: [
        { from: '_redirects', to: '.' }
      ],
    })
  ]
};
