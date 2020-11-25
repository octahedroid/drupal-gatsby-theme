const path = require(`path`)

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        ui: path.resolve(__dirname, "src/components"),
        blocks: path.resolve(__dirname, "src/blocks"),
      },
    },
  })
}
