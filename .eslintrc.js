/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable max-len */

const jsExtensions = ['.js', '.jsx'];
const tsExtensions = ['.ts', '.tsx'];
const allExtensions = [...jsExtensions, ...tsExtensions, '.json'];

const prettierOptions = {
  endOfLine: 'lf',
  semi: true,
  singleQuote: true,
  bracketSpacing: false,
  jsxSingleQuote: true,
  bracketSameLine: false,
  arrowParens: 'avoid',
  tabWidth: 2,
  trailingComma: 'all',
  printWidth: 100,
};

/**
 * See configuring ESLint for more details: https://eslint.org/docs/user-guide/configuring/
 *
 * @type {import('@types/eslint').Linter.Config}
 */

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
    ecmaFeatures: {jsx: true},
    warnOnUnsupportedTypeScriptVersion: true,
  },
  plugins: [
    '@typescript-eslint',
    'import',
    'unused-imports',
    'sort-export-all',
    'prettier',
    'jsx-a11y',
  ],
  extends: [
    'react-app',
    'react-app/jest',
    'plugin:jsx-a11y/recommended',
    'plugin:import/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:sort-export-all/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  ignorePatterns: [
    'node_modules',
    'build*',
    'dist',
    '.github',
    '!.*',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/extensions': jsExtensions,
    'import/parsers': {
      '@typescript-eslint/parser': tsExtensions,
    },
    'import/resolver': {
      node: {extensions: allExtensions},
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  reportUnusedDisableDirectives: true,
  rules: {
    // formatting options
    quotes: ['warn', 'single', {avoidEscape: true}],
    'quote-props': ['warn', 'as-needed'],
    'jsx-quotes': ['warn', 'prefer-single'],
    curly: ['warn', 'multi-line'],
    'brace-style': 'warn',
    'object-curly-spacing': ['warn', 'never'],
    'object-curly-newline': ['warn', {ObjectPattern: {multiline: true, consistent: true}}],
    'object-property-newline': ['warn', {allowAllPropertiesOnSameLine: true}],
    'function-call-argument-newline': ['warn', 'consistent'],
    'arrow-parens': ['warn', 'as-needed'],
    'no-multiple-empty-lines': ['warn', {max: 1, maxEOF: 1}],
    'no-multi-spaces': 'warn',
    'arrow-spacing': 'warn',
    'space-infix-ops': 'warn',
    'operator-linebreak': ['warn', 'after', {overrides: {'?': 'before', ':': 'before'}}],
    'comma-dangle': ['warn', 'always-multiline'],
    'comma-style': ['warn', 'last'],
    'max-len': ['warn', {code: 100, comments: 120, ignoreUrls: true}],
    // prettier
    'prettier/prettier': ['warn', prettierOptions],
    // General
    'max-lines-per-function': ['error', 100],
    'object-shorthand': ['warn', 'always'],
    'no-unused-vars': 'off', // use typescript rule instead
    'no-nested-ternary': 'warn',
    'arrow-body-style': ['warn', 'as-needed'],
    'prefer-destructuring': 'warn',
    'no-unneeded-ternary': 'warn',
    'no-else-return': 'warn',
    'no-console': 'warn',
    'require-await': 'off',
    'prefer-arrow-callback': 'error',
    'one-var': ['error', 'never'],
    'func-style': ['warn', 'expression'],
    // React
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-curly-brace-presence': 'warn',
    'react/self-closing-comp': 'warn',
    'react/jsx-closing-bracket-location': ['warn', 'line-aligned'],
    'react/jsx-no-useless-fragment': ['warn', {allowExpressions: true}],
    'react/jsx-wrap-multilines': [
      'warn',
      {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'ignore',
        logical: 'ignore',
        prop: 'ignore',
      },
    ],
    'react/jsx-first-prop-new-line': ['warn'],
    'react/jsx-sort-props': [
      'warn',
      {shorthandFirst: true, callbacksLast: true, reservedFirst: true},
    ],
    'react/jsx-tag-spacing': ['warn', {beforeClosing: 'never'}],
    'react/jsx-key': 'error',
    'react/jsx-max-depth': ['error', {max: 6}],
    'react/jsx-no-comment-textnodes': 'warn',
    'react/no-array-index-key': 'error',
    'react/boolean-prop-naming': ['warn', {rule: '^(is|has|use)[A-Z]([A-Za-z0-9]?)+'}],
    'react/jsx-boolean-value': ['error', 'never'],
    'react/jsx-props-no-multi-spaces': 'error',
    'react/destructuring-assignment': ['warn', 'always'],
    'react/style-prop-object': 'error',
    'react/void-dom-elements-no-children': 'error',
    'react/function-component-definition': ['error', {namedComponents: 'arrow-function'}],
    'react/jsx-filename-extension': ['error', {extensions: ['.tsx']}],

    // TypeScript
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-explicit-any': ['warn', {fixToUnknown: true}],
    '@typescript-eslint/no-inferrable-types': ['warn', {ignoreParameters: true}],
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-use-before-define': 'warn',
    '@typescript-eslint/require-await': 'error',
    '@typescript-eslint/prefer-nullish-coalescing': 'warn',
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {'ts-expect-error': 'allow-with-description', 'ts-ignore': 'allow-with-description'},
    ],
    
    // import
    'import/prefer-default-export': 'off',
    'import/namespace': 'warn',
    'import/no-default-export': 'warn',
    'import/newline-after-import': 'warn',
    'import/export': 'warn',
    'import/order': [
      'warn',
      {'newlines-between': 'never', alphabetize: {order: 'asc', caseInsensitive: true}},
    ],

    'import/no-cycle': [
      'error',
      {
        maxDepth: 1,
      },
    ],
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': ['warn', {vars: 'all', varsIgnorePattern: '^_'}],
    'sort-imports': [
      'warn',
      {
        ignoreDeclarationSort: true,
        memberSyntaxSortOrder: ['all', 'single', 'multiple', 'none'],
      },
    ],
  },

  overrides: [
    {
      files: ['*.js', '*.mjs', '*.cjs'],
      rules: {
        'no-console': 'off',
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
};
