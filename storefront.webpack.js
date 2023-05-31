const path = require('path')

module.exports = () => ({
  resolve: {
    alias: {
        './html/ProductCard.html': path.resolve(__dirname, 'template/js/custom-js/components/ProductCard.html'),
        './html/TheProduct.html': path.resolve(__dirname, 'template/js/custom-js/components/TheProduct.html'),
        './html/APrices.html': path.resolve(__dirname, 'template/js/custom-js/components/APrices.html'),
        './js/APrices.js': path.resolve(__dirname, 'template/js/custom-js/components/APrices.js')
    }
  }
})