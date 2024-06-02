export default {
  extends: ['stylelint-config-standard'],
  plugins: ['stylelint-prettier'],
  rules: {
    'prettier/prettier': true,
    'no-empty-source': null,
    'function-no-unknown': [
      true,
      {
        ignoreFunctions: ['theme', 'v-bind'],
      },
    ],
    'selector-class-pattern': bemMatching,
    'max-nesting-depth': 2,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'layer',
          'apply',
          'variants',
          'responsive',
          'screen',
        ],
      },
    ],
    'value-keyword-case': [
      'lower',
      {
        ignoreKeywords: ['/colors..*.DEFAULT/'],
        ignoreFunctions: ['v-bind'],
      },
    ],
  },
};
