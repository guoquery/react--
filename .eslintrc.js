module.exports = {
  parser: "@typescript-eslint/parser", //定义ESLint的解析器
  extends: ["plugin:@typescript-eslint/recommended", "react-app"], //定义文件继承的子规范
  plugins: ["@typescript-eslint", "react", "react-hooks"], //定义了该eslint文件所依赖的插件
  env: {
    //指定代码的运行环境
    browser: true,
    node: true,
  },
  settings: {
    //自动发现React的版本，从而进行规范react代码
    react: {
      pragma: "React",
      version: "detect",
    },
  },
  parserOptions: {
    //指定ESLint可以解析JSX语法
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // "no-console": isProduction ? "warn" : "off",
    // "no-debugger": isProduction ? "warn" : "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["off"],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
  },
  overrides: [
    {
      files: ["*.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
  ],
};

// "eslintConfig": {
//   "extends": [
//     "react-app",
//     "react-app/jest"
//   ]
// },
