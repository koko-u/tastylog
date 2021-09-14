const nodeExternals = require('webpack-node-externals')
const path = require('path')
const Dotenv = require('dotenv-webpack')
const CopyPlugin = require('copy-webpack-plugin')

const BUILD_ROOT = path.resolve(__dirname, '../dist')
const SRC_ROOT = path.resolve(__dirname, '../src')

const typescriptRule = {
  test: /\.ts$/,
  exclude: /node_modules/,
  use: [
    {
      loader: 'ts-loader',
      options: {
        configFile: 'tsconfig.json',
      },
    },
  ],
}

const copyPluginOptions = {
  patterns: [
    { from: path.resolve(__dirname, '../src/views'), to: 'views' },
    { from: path.resolve(__dirname, '../src/public'), to: 'public' },
  ],
}

module.exports = {
  context: SRC_ROOT,
  entry: path.resolve('src', 'index.ts'),
  target: 'node',
  externals: [nodeExternals()],
  output: {
    filename: 'server.js',
    path: BUILD_ROOT,
    clean: true,
  },
  module: {
    rules: [typescriptRule],
  },
  resolve: {
    extensions: ['.ts', 'js', '.json'],
  },
  plugins: [new Dotenv(), new CopyPlugin(copyPluginOptions)],
}
