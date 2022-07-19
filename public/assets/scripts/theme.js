const theme = (() => {
  if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
    return localStorage.getItem('theme')
  }
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark'
  }
  return 'light'
})()

if (theme.includes('light')) {
  document.documentElement.classList.remove('dark')
} else {
  document.documentElement.classList.add('dark')
}
window.localStorage.setItem('theme', theme)
