import Command from '@components/icons/Command'
import {
  KBarAnimator,
  KBarPortal,
  KBarPositioner,
  KBarProvider,
  KBarResults,
  KBarSearch,
  useMatches,
} from 'kbar'
import { useEffect } from 'react'
import MediumIcon from '../icons/Medium'
import TwitterIcon from '../icons/Twitter'

const actions = [
  {
    id: 'command_center',
    section: 'Shortcuts',
    name: 'Commands center',
    shortcut: ['ctrl', 'k'],
    keywords: 'writing words',
    perform: () => (window.location.pathname = '/'),
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
      (window.location.pathname = 'https://medium.com/@alex.streza'),
  },
  {
    id: 'twitter',
    name: 'Twitter',
    section: 'Social links',
    icon: <TwitterIcon />,
    keywords: 'contact',
    perform: () =>
      (window.location.pathname = 'https://twitter.com/alex_streza'),
  },
]

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

const KBar = () => {
  useEffect(() => {}, [])

  return (
    <KBarProvider actions={actions}>
      <Command />
      <KBarPortal>
        <KBarPositioner className="command-center-positioner">
          <KBarAnimator className="command-center-animator">
            <KBarSearch className="command-center-input" />
            <RenderResults />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
    </KBarProvider>
  )
}

export default KBar
