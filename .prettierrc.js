module.exports = {
  plugins: [require.resolve('prettier-plugin-astro')],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  bracketSpacing: true,
  bracketSameLine: false,
  singleQuote: true,
  trailingComma: 'all',
  semi: false,
  endOfLine: 'lf',
  tabWidth: 2,
  useTabs: false,
  printWidth: 80,
  arrowParens: 'always',
}
