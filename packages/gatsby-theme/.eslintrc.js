const path = require("path")

const projectRoot = path.resolve(__dirname, "src")
const rootConfigPath = path.resolve(__dirname, "../../.eslintrc.js")

/**
 * @type {import("eslint").Linter.BaseConfig}
 */
const config = {
  extends: [rootConfigPath],
  rules: {
    "import/no-useless-path-segments": "off",
    "import/prefer-default-export": "off",
  },
  settings: {
    "import/resolver": {
      alias: [
        ["ui", `${projectRoot}/components`],
        ["blocks", `${projectRoot}/blocks`],
      ],
      node: {
        paths: ["src"],
      },
    },
  },
}

module.exports = config
