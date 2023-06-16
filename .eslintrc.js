module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "eslint:recommended"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    'accessor-pairs': 2, // 强制 getter 和 setter 在对象中成对出现
    'array-bracket-spacing': [2, 'never'], // 指定数组的元素之间要以空格隔开(,后面)， never参数：[ 之前和 ] 之后不能带空格
    'arrow-spacing': [
      // 强制箭头函数的箭头前后使用一个空格
      2,
      {
        before: true,
        after: true,
      },
    ],
    'block-spacing': [2, 'always'], // 强制在代码块中开括号前和闭括号后有空格
    'brace-style': [
      // if while function 后面的{必须与if在同一行，java风格。
      2,
      '1tbs',
      {
        allowSingleLine: true,
      },
    ],
    camelcase: 0, // 变量不要求驼峰命名
    // 'comma-dangle': [2, 'always-multiline'], // 当最后一个元素或属性与闭括号 ] 或 } 在 不同的行时，要求使用拖尾逗号；当在 同一行时，禁止使用拖尾逗号。
    'comma-dangle': 0, // 不要数组等最后一个元素后求加逗号
    // 'comma-spacing': [
    //   // 逗号前无空格，逗号后有空格
    //   2,
    //   {
    //     before: false,
    //     after: true,
    //   },
    // ],
    // 'comma-style': [2, 'last'], // 要求逗号放在数组元素、对象属性或变量声明之后，且在同一行
    'constructor-super': 2, // 验证构造函数中 super() 的调用
    curly: [2, 'multi-line'], // 要求遵循大括号约定
    'dot-location': [2, 'property'], // 强制在点号之前或之后换行
    'eol-last': 2, // 要求文件末尾保留一行空行
    eqeqeq: [2, 'always', { null: 'ignore' }], // 要求使用 === 和 !==
    indent: [
      // 强制使用一致的缩进,2个空格
      2,
      2,
      {
        SwitchCase: 1,
      },
    ],
    'key-spacing': [
      // 对象字面量的键和值之间使用一致的空格,冒号前不允许有空格，冒号后有一个空格
      2,
      {
        beforeColon: false,
        afterColon: true,
      },
    ],
    'keyword-spacing': [
      // 关键字前后包含空格
      2,
      {
        before: true,
        after: true,
      },
    ],
    'new-cap': [
      // 要求构造函数首字母大写
      2,
      {
        newIsCap: true,
        capIsNew: false,
      },
    ],
    'new-parens': 2, // 要求调用无参构造函数时带括号
    'no-alert': process.env.NODE_ENV === 'production' ? 2 : 0, // 打包时禁用 alert、confirm 和 prompt
    'no-array-constructor': 2, // 禁止使用 Array 构造函数
    'no-caller': 2, // 禁用 caller 或 callee
    'no-cond-assign': 2, // 禁止在条件语句中出现赋值操作符
    'no-const-assign': 2, // 不允许改变用const声明的变量
    'no-control-regex': 0, // 禁止在正则表达式中使用控制字符
    // 'no-console': 0, // 允许使用console 但是慎用
    // 'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off', // 打包时禁止alert
    'no-delete-var': 2, // 禁止删除变量
    'no-dupe-args': 2, // 禁止在 function 定义中出现重复的参数
    'no-dupe-class-members': 2, // 不允许类成员中有重复的名称
    'no-duplicate-imports': 2, // 禁止重复导入
    'no-dupe-keys': 2, // 禁止在对象字面量中出现重复的键
    'no-duplicate-case': 2, // 禁止重复 case 标签
    'no-empty-character-class': 2, // 禁止在正则表达式中使用空字符集
    'no-eval': 2, // 禁用 eval()
    'no-ex-assign': 2, // 禁止对 catch 子句中的异常重新赋值
    'no-extend-native': 2, // 禁止扩展原生对象
    'no-extra-bind': 2, // 禁止不必要的函数绑定
    'no-extra-boolean-cast': 2, // 禁止不必要的布尔类型转换
    'no-extra-parens': [2, 'functions'], // 只在 函数表达式周围禁止不必要的圆括号
    'no-fallthrough': 2, // 禁止 case 语句落空
    'no-floating-decimal': 2, // 禁止浮点小数
    'no-func-assign': 2, // 禁止对 function 声明重新赋值
    'no-implied-eval': 2, // 禁用隐式的eval()
    'no-inner-declarations': [2, 'functions'], // 禁止在嵌套的语句块中出现变量或 function 声明
    'no-invalid-regexp': 2, // 禁止在 RegExp 构造函数中出现无效的正则表达式
    'no-irregular-whitespace': 2, // 禁止不规则的空白
    'no-iterator': 2, // 禁用迭代器
    'no-label-var': 2, // 禁用与变量同名的标签
    'no-labels': [
      // 禁用标签语句
      2,
      {
        allowLoop: false,
        allowSwitch: false,
      },
    ],
    'no-lone-blocks': 2, // 禁用不必要的嵌套块
    'no-mixed-spaces-and-tabs': 2, // 禁止使用 空格 和 tab 混合缩进
    'no-multi-spaces': 2, // 禁止出现多个空格
    'no-multi-str': 2, // 禁止多行字符串
    'no-multiple-empty-lines': [
      // 最大连续空行数为1.
      2,
      {
        max: 1,
      },
    ],
    'no-new-object': 2, // 禁止使用 Object 构造函数
    'no-new-symbol': 2, // 禁止 Symbolnew 操作符和 new 一起使用
    'no-new-wrappers': 2, // 禁止原始包装实例
    'no-obj-calls': 2, // 禁止将全局对象当作函数进行调用
    'no-octal': 2, // 禁用八进制字面量
    'no-octal-escape': 2, // 禁止在字符串字面量中使用八进制转义序列
    'no-proto': 2, // 禁用__proto__
    'no-redeclare': 2, // 禁止重新声明变量
    'no-regex-spaces': 2, // 禁止正则表达式字面量中出现多个空格
    'no-return-assign': [2, 'except-parens'], // 禁止在返回语句中赋值
    'no-return-await': 2, // 禁用不必要的 return await
    'no-script-url': 2, // 禁止使用 javascript: url
    'no-self-assign': 2, // 禁止自身赋值
    'no-self-compare': 2, // 禁止自身比较
    'no-sequences': 2, // 不允许使用逗号操作符
    'no-throw-literal': 2, // 限制可以被抛出的异常
    'no-unmodified-loop-condition': 2, // 禁用一成不变的循环条件
    'no-shadow-restricted-names': 2, // 关键字不能被遮蔽
    'func-call-spacing': 2, // 禁止在函数名和开括号之间有空格
    'no-sparse-arrays': 2, // 禁用稀疏数组
    'no-template-curly-in-string': 2, // 禁止在常规字符串中出现模板字面量占位符语法
    'no-this-before-super': 2, // 在构造函数中禁止在调用super()之前使用this或super。
    'no-trailing-spaces': 2, // 禁用行尾空白
    'no-undef': 2, // 禁用未声明的变量
    'no-undef-init': 2, // 不允许初始化变量值为 undefined
    'no-unexpected-multiline': 2, // 禁止使用令人困惑的多行表达式
    'no-unneeded-ternary': [
      // 禁止可以表达为更简单结构的三元操作符
      2,
      {
        defaultAssignment: false,
      },
    ],
    'no-unreachable': 2, // 禁止在 return、throw、continue 和 break 语句后出现不可达代码
    'no-unsafe-finally': 2, // 禁止在 finally 语句块中出现控制流语句
    'no-unused-vars': [
      // 禁止未使用过的变量
      2,
      {
        vars: 'all',
        args: 'none',
      },
    ],
    'no-useless-call': 2, // 禁用不必要的 .call() 和 .apply()
    'no-useless-computed-key': 2, // 禁止在对象中使用不必要的计算属性
    'no-useless-constructor': 2, // 禁用不必要的构造函数
    // 'no-useless-escape': 0, // 可用转移符
    'no-whitespace-before-property': 2, // 禁止属性前有空白
    'no-with': 2, // 禁用 with 语句
    'no-useless-rename': 2, // 禁止在 import 和 export 和解构赋值时将引用重命名为相同的名字
    'no-var': 2, // 要求使用 let 或 const 而不是 var
    'object-curly-spacing': [
      // 要求花括号内有空格 (除了 {}),禁止以对象元素开始或结尾的对象的花括号中有空格
      2,
      'always',
      {
        objectsInObjects: false,
      },
    ],
    'one-var': [
      // 强制函数中的变量分开声明
      2,
      {
        initialized: 'never',
      },
    ],
    'operator-linebreak': [
      // 要求把换行符放在操作符后面, `?` 和 `:` 操作符除外；
      2,
      'after',
      {
        overrides: {
          '?': 'before',
          ':': 'before',
        },
      },
    ],
    'padded-blocks': [2, 'never'], // 禁止块内填充
    'prefer-const': 2, // 建议使用const
    quotes: [
      // 统一使用单引号，允许字符串使用反勾号
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    // semi: [2, 'never'], // 句末不用分号
		semi: [2,'always'], // 句末用分号
    'semi-spacing': [
      // 分号前不带空格，分号后带空格
      2,
      {
        before: false,
        after: true,
      },
    ],
    'space-before-blocks': [2, 'always'], // 块语句必须总是至少有一个前置空格。
    'space-before-function-paren': [2, 'never'], // 禁止函数圆括号之前有一个空格
    'space-in-parens': [2, 'never'], // 强制圆括号内没有空格
    'space-infix-ops': 2, // 要求中缀操作符周围有空格
    'space-unary-ops': [
      // 要求或禁止在一元操作符之前或之后存在空格
      2,
      {
        words: true,
        nonwords: false,
      },
    ],
    'spaced-comment': [
      // 要求在注释前有空白 (space 或 tab)
      2,
      'always',
      {
        markers: ['eslint', 'eslint-disable', '!', ','],
      },
    ],
    // 'multiline-comment-style': [2, 'starred-block'], // 禁止使用连续的行注释来表示块注释。另外，要求块注释的每行之前有一个 *。
    'template-curly-spacing': [2, 'never'], // 禁止花括号内出现空格
    'use-isnan': 2, //禁止比较时使用NaN，只能用isNaN()
    'valid-typeof': 2, // 强制 typeof 表达式与有效的字符串进行比较
    'vue/singleline-html-element-content-newline': 0, // 单行元素换行符
    'vue/html-closing-bracket-newline': 0,
    'vue/no-side-effects-in-computed-properties': 0,
    'vue/component-name-in-template-casing': ['error', 'kebab-case'], // 允许组件使用el-button格式
  },
};
