module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  parser: "babel-eslint",
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  settings: {
    react: {
      pragma: "React",
      version: "detect",
    },
    "import/resolver": {
      alias: [["ui", "./packages/gatsby-theme/components"]],
    },
  },
  extends: ["airbnb", "plugin:prettier/recommended", "plugin:mdx/recommended"],
  overrides: [
    {
      files: ["*.mdx"],
      extends: ["plugin:mdx/overrides"],
      rules: {
        "react/jsx-filename-extension": 0,
        "import/no-extraneous-dependencies": 0,
        "react/jsx-indent": 0,
        "react/prop-types": 0,
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx"],
      },
    ],
    "import/no-cycle": 0,
    "no-underscore-dangle": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "react/jsx-props-no-spreading": "off",
    "react/jsx-uses-react": 2, // rollback
    "react/react-in-jsx-scope": 2,
  },
}
