const path = require('path');
const webpack = require('webpack');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';
const dotenv = require('dotenv');
const env = dotenv.config().parsed;

const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

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
        generator: {
          filename: (isProd ? 'dist/' : '') + '[name][hash][ext]',
          publicPath: isProd ? '/shoppingWeb/' : ''
        }
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
    new CopyPlugin({
      patterns: [
        { from: 'web.config', to: '.' }
      ],
    }),
    {
      apply: (compiler) => {
        compiler.hooks.done.tap('CopyIndexAfterBuild', () => {
          const src = path.resolve(__dirname, 'dist/index.html');
          const indexHtml = path.resolve(__dirname, 'index.html');
          fs.copyFileSync(src, indexHtml);

          // 把 <script src="..."> 前面加上 dist/
          let html = fs.readFileSync(indexHtml, 'utf8');
          html = html.replace(/<script defer src="(.*?)"><\/script>/g, '<script defer src="dist$1"></script>');
          fs.writeFileSync(indexHtml, html, 'utf8');
        });
      },
    },
  ]
};
