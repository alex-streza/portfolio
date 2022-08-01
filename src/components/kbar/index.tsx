import Command from '@components/icons/Command'
import { toggleTheme } from '@components/theme-toggle'
import { useLocalStorageValue } from '@react-hookz/web'
import {
  KBarAnimator,
  KBarPortal,
  KBarPositioner,
  KBarProvider,
  KBarResults,
  KBarSearch,
  useMatches,
} from 'kbar'
import { useMemo } from 'react'
import MediumIcon from '../icons/Medium'
import TwitterIcon from '../icons/Twitter'

const RenderResults = () => {
  const { results } = useMatches()

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === 'string' ? (
          <div className="command-center-section">{item}</div>
        ) : (
          <div className="command-center-result">
            {item.icon}
            {item.name}
            {item?.shortcut?.length > 0 && (
              <div className="command-center-shortcuts">
                {item.shortcut.map((shortcut) => (
                  <span key={shortcut}>{shortcut}</span>
                ))}
              </div>
            )}
          </div>
        )
      }
    />
  )
}

const KBar = ({ posts }) => {
  const [, setTheme] = useLocalStorageValue('theme', 'light')

  const actions = useMemo(
    () => [
      {
        id: 'command_center',
        section: 'Shortcuts',
        name: 'Commands center',
        shortcut: ['ctrl', 'k'],
        keywords: 'writing words',
        perform: () => {},
      },
      {
        id: 'switch_theme',
        section: 'Shortcuts',
        name: 'Switch theme',
        shortcut: ['t'],
        keywords: 'switch theme',
        perform: () => {
          const theme = localStorage.getItem('theme') ?? 'light'
          const newTheme = theme.includes('light') ? 'dark' : 'light'
          setTheme(newTheme)
          toggleTheme(newTheme)
        },
      },
      {
        id: 'blog',
        section: 'Navigation',
        name: 'All blog posts',
        shortcut: ['b'],
        keywords: 'writing words',
        perform: () => (window.location.pathname = '/'),
      },
      {
        id: 'medium',
        name: 'Medium',
        section: 'Social links',
        keywords: 'contact',
        icon: <MediumIcon />,
        perform: () =>
          (window.location.href = 'https://medium.com/@alex.streza'),
      },
      {
        id: 'twitter',
        name: 'Twitter',
        section: 'Social links',
        icon: <TwitterIcon />,
        keywords: 'contact',
        perform: () =>
          (window.location.href = 'https://twitter.com/alex_streza'),
      },
      {
        id: 'developer',
        section: 'Paths',
        name: 'Developer',
        keywords: 'developer',
        perform: () => (window.location.pathname = '/developer'),
      },
      {
        id: 'designer',
        section: 'Paths',
        name: 'Designer',
        keywords: 'designer',
        perform: () => (window.location.pathname = '/designer'),
      },
      {
        id: 'writer',
        section: 'Paths',
        name: 'Writer',
        keywords: 'writer',
        perform: () => (window.location.pathname = '/writer'),
      },
      ...posts.map((post, i) => {
        return {
          id: `blog_${i}`,
          section: 'Blogs',
          name: post.title,
          perform: () => (window.location.pathname = post.url),
        }
      }),
    ],
    [],
  )

  return (
    <KBarProvider
      actions={actions}
      options={{
        animations: {
          enterMs: 300,
          exitMs: 300,
        },
      }}
    >
      <Command />
      <KBarPortal>
        <KBarPositioner className="command-center-positioner">
          <KBarAnimator className="command-center-animator">
            <KBarSearch className="command-center-input" />
            <RenderResults actions={actions} />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
    </KBarProvider>
  )
}

export default KBar
