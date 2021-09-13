const nodeExternals = require('webpack-node-externals')
const path = require('path')
const Dotenv = require('dotenv-webpack')

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

module.exports = {
  context: SRC_ROOT,
  entry: path.resolve('src', 'index.ts'),
  externals: [nodeExternals()],
  output: {
    filename: 'server.js',
    path: BUILD_ROOT,
  },
  module: {
    rules: [typescriptRule],
  },
  resolve: {
    extensions: ['.ts', 'js', '.json'],
  },
  plugins: [new Dotenv()],
}
