module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: "babel-eslint",
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/recommended",
    "plugin:prettier/recommended",
  ],
  // 校验 .vue 文件
  plugins: ["vue"],
  // 自定义规则
  rules: {
    semi: [2, "never"],
    "no-console": "off",
    "vue/singleline-html-element-content-newline": "off",
    "vue/html-closing-bracket-spacing": "off",
    "vue/order-in-components": "off",
    "vue/html-self-closing": "off",
    "no-debugger": "off",
    "vue/require-prop-types": "off",
    "vue/max-attributes-per-line": "off",
    "prettier/prettier": ["warn", { semi: false }],
  },
}
