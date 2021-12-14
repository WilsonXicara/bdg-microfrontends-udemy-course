const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',  // Temple to how to name the building files
    publicPath: '/dashboard/latest/',  // Added by plugin when trying to recover all compiled files
  },
  plugins: [
    // Definir qué archivos se quieren obtener desde los remotes
    new ModuleFederationPlugin({
      name: 'dashboard',  // Nombre de la variable global que se creará al momento de cargar esta app
      filename: 'remoteEntry.js',
      exposes: {
        './DashboardApp': './src/bootstrap',
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
