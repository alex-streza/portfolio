module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:astro/recommended',
  ],
  plugins: ['react', '@typescript-eslint', 'eslint-plugin-prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    // eslint
    semi: 'off',
    'react-hooks/exhaustive-deps': 'error',
    curly: ['warn', 'multi-or-nest', 'consistent'],
    'no-mixed-spaces-and-tabs': ['warn', 'smart-tabs'],
    'no-async-promise-executor': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    'require-await': 'warn',
    'no-return-await': 'warn',
    'no-await-in-loop': 'warn',
    'no-console': 'warn',
    'comma-dangle': 'off', // prettier already detects this
    'no-restricted-syntax': [
      'warn',
      {
        selector: 'TSEnumDeclaration',
        message:
          "Enums have various disadvantages, use TypeScript's union types instead.",
      },
    ],
    // prettier
    'prettier/prettier': [
      'warn',
      {
        endOfLine: 'auto',
      },
    ],
    // typescript
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-unused-vars': [
      'off',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false,
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    // react plugin
    'react/no-unescaped-entities': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-non-null-assertion': 'warn',
    '@typescript-eslint/no-this-alias': 'warn',
    '@typescript-eslint/no-empty-function': 'warn',
    'prefer-const': 'warn',
    '@typescript-eslint/no-empty-interface': 'warn',
    '@typescript-eslint/no-var-requires': 'warn',
    '@typescript-eslint/no-inferrable-types': 'warn',
    '@typescript-eslint/ban-types': 'warn',
    'no-var': 'warn',
  },
  overrides: [
    {
      // Define the configuration for `.astro` file.
      files: ['*.astro'],
      // Allows Astro components to be parsed.
      parser: 'astro-eslint-parser',
      // Parse the script in `.astro` as TypeScript by adding the following configuration.
      // It's the setting you need when using TypeScript.
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      rules: {
        // override/add rules settings here, such as:
        // "astro/no-set-html-directive": "error"
      },
    },
  ],
}
