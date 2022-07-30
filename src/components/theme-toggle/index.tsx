import { useLocalStorageValue } from '@react-hookz/web'
import { useCallback, useEffect, useState } from 'react'

const MoonIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-4 -2 24 24"
    width="32"
    fill="currentColor"
  >
    <path d="M2 10c0 4.43 3.478 8 7.742 8 .658 0 1.302-.085 1.922-.248-2.996-2.2-4.896-5.786-4.896-9.752 0-2.09.527-4.095 1.489-5.853C4.699 2.863 2 6.097 2 10zm6.768-2c0 4.632 3.068 8.528 7.232 9.665A9.555 9.555 0 0 1 9.742 20C4.362 20 0 15.523 0 10S4.362 0 9.742 0c.868 0 1.71.117 2.511.335A10.086 10.086 0 0 0 8.768 8z"></path>
  </svg>
)

const SunIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-2 -2 24 24"
    width="32"
    fill="currentColor"
  >
    <path d="M10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 2a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-15a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1zm0 16a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zM1 9h2a1 1 0 1 1 0 2H1a1 1 0 0 1 0-2zm16 0h2a1 1 0 0 1 0 2h-2a1 1 0 0 1 0-2zm.071-6.071a1 1 0 0 1 0 1.414l-1.414 1.414a1 1 0 1 1-1.414-1.414l1.414-1.414a1 1 0 0 1 1.414 0zM5.757 14.243a1 1 0 0 1 0 1.414L4.343 17.07a1 1 0 1 1-1.414-1.414l1.414-1.414a1 1 0 0 1 1.414 0zM4.343 2.929l1.414 1.414a1 1 0 0 1-1.414 1.414L2.93 4.343A1 1 0 0 1 4.343 2.93zm11.314 11.314l1.414 1.414a1 1 0 0 1-1.414 1.414l-1.414-1.414a1 1 0 1 1 1.414-1.414z"></path>
  </svg>
)

export const toggleTheme = (theme) => {
  if (theme.includes('light')) {
    document.documentElement.classList.remove('dark')
  } else {
    document.documentElement.classList.add('dark')
  }
}

const ThemeToggle = () => {
  const [theme, setTheme] = useLocalStorageValue('theme', 'light')
  const [isMounted, setIsMounted] = useState(false)

  const switchTheme = useCallback(() => {
    const newTheme = theme.includes('dark') ? 'light' : 'dark'
    setTheme(newTheme)
    toggleTheme(newTheme)
  }, [theme])

  useEffect(() => {
    if (!isMounted) {
      const id = setTimeout(() => {
        document.getElementsByTagName('body')[0].classList.add('duration-500')
        document
          .getElementsByTagName('body')[0]
          .classList.add('transition-colors')
      }, 500)
      setIsMounted(true)
      return () => clearTimeout(id)
    }
  }, [theme])

  if (!isMounted) return <SunIcon />

  return (
    <button onClick={switchTheme} aria-label="Theme Toggle">
      {theme.includes('dark') ? <MoonIcon /> : <SunIcon />}
    </button>
  )
}

export default ThemeToggle
