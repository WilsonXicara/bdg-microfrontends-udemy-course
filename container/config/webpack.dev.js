const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');

const devConfig = {
  mode: 'development',
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  plugins: [
    // Definir qué archivos se quieren obtener desde los remotes
    new ModuleFederationPlugin({
      name: 'container',  // Aplica solo para 'remotes'. Se agrega por convención
      remotes: {
        // ALIAS: 'Marketing_ModuleFederationPlugin.name@HOST:PORT/Marketing_ModuleFederationPlugin.exposes[KEY_OF_FILE]'
        marketing: 'marketing@http://localhost:8081/remoteEntry.js',
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
