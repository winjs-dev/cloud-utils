// http://eslint.org/docs/user-guide/configuring
// http://eslint.cn/docs/user-guide/configuring 中文

module.exports = {
  // JavaScript 语言选项
  parserOptions: {
    // ECMAScript 版本
    'ecmaVersion': 6,
    // ECMAScript 模块
    'sourceType': 'module',
  },
  env: {
    'browser': true,
    'node': true,
    'es6': true
  },
  extends: 'eslint:recommended',

  /** add your custom rules here
   *  'off' 或 0 - 关闭规则
   *  'warn' 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出),
   *  'error' 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
   */
  'rules': {
    ////////////////
    // 可能的错误  //
    ////////////////
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // 禁用 console
    'no-console': 0,
    // 禁用 alert、confirm 和 prompt
    'no-alert': 0,

    //////////////
    // 风格指南  //
    //////////////
    // 要求或禁止使用分号而不是 ASI（这个才是控制行尾部分号的，）
    'semi': [0, 'always'],
    // 强制在 function的左括号之前使用一致的空格
    'space-before-function-paren': [0, 'always'],

    //////////////
    // 最佳实践 //
    //////////////


    //////////////
    // ES6.相关 //
    //////////////
    // 要求箭头函数的参数使用圆括号
    'arrow-parens': 2,
    // allow async-await
    'generator-star-spacing': 0
  }
}



