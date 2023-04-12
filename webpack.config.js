const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const plugins = [
  new HtmlWebpackPlugin({
    template: './public/index.html',
    favicon: './public/favicon.ico',
    manifest: './public/manifest.json',
  }),
  new WebpackManifestPlugin({}),
  new NodePolyfillPlugin(),
  new Dotenv(),
];

module.exports = {
  entry: './src/index.tsx',
  plugins,
  output: {
    path: path.resolve(__dirname, 'build'),
    assetModuleFilename: 'assets/[hash][ext][query]',
    filename: this.mode === 'production' ? 'bundle.js' : 'bundle.min.js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: ['html-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
        type: this.mode === 'production' ? 'asset' : 'asset/resource',
      },
      {
        test: /\.tsx?$/, // обновляем регулярное выражение для поддержки jsx
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: 'url-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.*', '.ts', '.tsx', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@containers': path.resolve(__dirname, 'src/containers'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@Types': path.resolve(__dirname, 'src/types'),
    },
  },
};
