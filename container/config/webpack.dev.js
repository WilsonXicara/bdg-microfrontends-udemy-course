const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const PORT = 8080;

const devConfig = {
  mode: 'development',
  output: {
    publicPath: `http://localhost:${PORT}/`,
  },
  devServer: {
    port: PORT,
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
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
