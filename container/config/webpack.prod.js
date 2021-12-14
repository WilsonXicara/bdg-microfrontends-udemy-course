const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',  // Temple to how to name the building files
    publicPath: '/container/latest/',  // Added by plugin when trying to recover all compiled files
  },
  plugins: [
    // Definir qué archivos se quieren obtener desde los remotes
    new ModuleFederationPlugin({
      name: 'container',  // Aplica solo para 'remotes'. Se agrega por convención
      remotes: {
        // ALIAS: 'Marketing_ModuleFederationPlugin.name@HOST:PORT/Marketing_ModuleFederationPlugin.exposes[KEY_OF_FILE]'
        // Asumimos que los remoteEntry de las distintas app estarán en el mismo dominio pero en subcarpetas
        marketing: `marketing@${domain}/marketing/latest/remoteEntry.js`,
        // ALIAS: 'Auth_ModuleFederationPlugin.name@HOST:PORT/Auth_ModuleFederationPlugin.exposes[KEY_OF_FILE]'
        auth: `auth@${domain}/auth/latest/remoteEntry.js`,
        // ALIAS: 'Dashboard_ModuleFederationPlugin.name@HOST:PORT/Dashboard_ModuleFederationPlugin.exposes[KEY_OF_FILE]'
        dashboard: `dashboard@${domain}/dashboard/latest/remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
