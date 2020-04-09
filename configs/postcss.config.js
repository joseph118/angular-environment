const WebpackNotifierPlugin = require('webpack-notifier');

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
      title: 'Webpack PostCSS'
    }),
  ]
};
