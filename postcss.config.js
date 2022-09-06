const cssnano = require('cssnano')
const litePreset = require('cssnano-preset-lite')
const defaultPreset = require('cssnano-preset-default')
const advancedPreset = require('cssnano-preset-advanced')
const preset = defaultPreset({
  normalizeUrl: false,
})

module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss/nesting'),
    require('tailwindcss'),
    require('autoprefixer'),
    cssnano({ preset }),
  ],
}
