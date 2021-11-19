const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: { 
    book: './frontend/appBook.js',
    slider: './frontend/appSlider.js',
    docente: './frontend/appDocente.js',
    noticia: './frontend/appNoticia.js',
    galeria: './frontend/appGaleria.js',
    cuadro: './frontend/appCuadro.js',
    user: './frontend/appUser.js'
  },
  mode: 'development',
  output: {
    path: path.join(__dirname, 'backend/public'),
    filename: 'js/[name].js'
  },
  module : {
    rules: [
      {
        test: /\.css/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './frontend/index.html',
      chunks: ['index'],
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'sesion.html',
      template: './frontend/sesion.html',
      chunks: ['sesion'],
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'slider.html',
      template: './frontend/slider.html',
      chunks: ['slider'],
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'docente.html',
      template: './frontend/docente.html',
      chunks: ['docente'],
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'noticia.html',
      template: './frontend/noticia.html',
      chunks: ['noticia'],
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'galeria.html',
      template: './frontend/galeria.html',
      chunks: ['galeria'],
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'cuadro.html',
      template: './frontend/cuadro.html',
      chunks: ['cuadro'],
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: "css/bundle.css"
    })
  ],
  devtool: 'source-map'
};
    