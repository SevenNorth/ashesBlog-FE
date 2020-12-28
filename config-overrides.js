const {
  override,
  addLessLoader,
  useBabelRc
} = require('customize-cra');

module.exports = override(
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { },
  }),
  useBabelRc()
)