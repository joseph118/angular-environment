const WebpackNotifierPlugin = require('webpack-notifier');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

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
      title: 'Webpack with BrowserSync'
    }),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      proxy: 'http://localhost:4200/'
    }, {
      reload: false
    })
  ]
};
