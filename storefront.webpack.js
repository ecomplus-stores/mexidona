const path = require('path')

module.exports = () => ({
  resolve: {
    alias: {
        './html/APrices.html': path.resolve(__dirname, 'template/js/custom-js/components/APrices.html'),
        './js/APrices.js': path.resolve(__dirname, 'template/js/custom-js/components/APrices.js')
    }
  }
})