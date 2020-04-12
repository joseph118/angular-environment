const WebpackNotifierPlugin = require('webpack-notifier');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");

const devHost = 'localhost',
  devServerPort = 4200,
  browserSyncPort = 3000,
  analyserPort = 4100;

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'postcss-loader',
            options: {
              plugins: (loader) => [
                require('autoprefixer'),
                require('postcss-pxtorem')({
                  rootValue: 16,
                  unitPrecision: 5,
                  propList: ['*'],
                  selectorBlackList: [],
                  replace: true,
                  mediaQuery: false,
                  minPixelValue: 0
                })
              ]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new WebpackNotifierPlugin({
      alwaysNotify: true,
      skipFirstNotification: true,
      title: 'Webpack'
    }),
    new DuplicatePackageCheckerPlugin({
      verbose: true,
      emitError: true,
      strict: true,
      showHelp: true
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'server',
      analyzerHost: devHost,
      analyzerPort: analyserPort,
      openAnalyzer: true
    }),
    new BrowserSyncPlugin({
      host: devHost,
      port: browserSyncPort,
      proxy: `http://${devHost}:${devServerPort}/`
    }, {
      reload: false
    })
  ]
};
