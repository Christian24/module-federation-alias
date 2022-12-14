const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const ExternalTemplateRemotesPlugin = require('external-remotes-plugin');
const path = require('path');
const app2Config = require('../app2/webpack.config.js');


module.exports = [
  {
    entry: './src/index',
    mode: 'development',
    devServer: {
      static: path.join(__dirname, 'dist'),
      port: 3001,
    },
    output: {
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.js?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [
      new ModuleFederationPlugin({
        name: 'app1',
        remotes: {
          app2: 'app2@[app2Url]/app2/remoteEntry.js',
          app3: 'app3@[app2Url]/app3/remoteEntry.js',
        },
        shared: {
          lit: { singleton: true },
        },
      }),
      new ExternalTemplateRemotesPlugin(),
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
    ],
  },
  app2Config
];
