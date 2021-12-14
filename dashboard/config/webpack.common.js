const { VueLoaderPlugin } = require('vue-loader') 

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js',
  },
  resolve: {
    // Para indicarle a Webpack que se cargarán archivos .vue
    extensions: [
      '.js',
      '.vue',
    ],
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|woff|svg|eot|ttf)$/i,
        use: [
          {
            // Para dar a entender cada vez que intentamos importar una fuente, imagen, etc.
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.scss|.css$/,
        use: [
          'vue-style-loader',
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        // Babel se encarga de procesar el código en cualquier versión y convertirlo en código ECMA5 normal que puede ejecutar fácilmente cualquier navegador
        test: /\.m?js$/,  // Aplica para archivos con extensión 'js'
        exclude: /node_modules/,
        use: {
          // Un 'loader' permite procesar algunos archivos diferentes a medida que comenzamos a importarlos al proyecto
          loader: 'babel-loader',
          options: {
            presets: [
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
    new VueLoaderPlugin(),
  ],
};
