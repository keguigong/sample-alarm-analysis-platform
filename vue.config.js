const path = require('path')
module.exports = {
  devServer: {
    port: 9091,
    disableHostCheck: true
  },
  publicPath:
    process.env.NODE_ENV === 'production'
      ? '/sample-alarm-analysis-platform/'
      : '/'
}
