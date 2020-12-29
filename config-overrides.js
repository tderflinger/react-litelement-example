const { override, addDecoratorsLegacy } = require('customize-cra')

// Adds legacy decorator support to the Webpack configuration.
module.exports = override(addDecoratorsLegacy())