const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        // Babel se encarga de procesar el código en cualquier versión y convertirlo en código ECMA5 normal que puede ejecutar fácilmente cualquier navegador
        test: /\.m?js$/,  // Aplica para archivos con extensión 'js'
        exclude: /node_modules/,
        use: {
          // Un 'loader' permite procesar algunos archivos diferentes a medida que comenzamos a importarlos al proyecto
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-react',
              '@babel/preset-env',
            ],
            plugins: [
              '@babel/plugin-transform-runtime',
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',  // This file is required in development and production
    }),
  ],
};
