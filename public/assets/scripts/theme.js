const theme = (() => {
  let theme = 'light'
  if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme')
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    theme = 'dark'
  }

  window.localStorage.setItem('theme', theme)
  return theme
})()

if (theme.includes('light')) {
  document.documentElement.classList.remove('dark')
} else {
  document.documentElement.classList.add('dark')
}
