import Share from '@components/icons/Share'
import { useState } from 'react'

interface FloatingMenuProps {
  text: string
}

const FloatingMenu = ({ text }: FloatingMenuProps) => {
  const [activeCursor, setActiveCursor] = useState(false)

  return (
    <div className="fixed left-0 md:left-unset bottom-12 w-full grid place-content-center">
      <div className="bg-gray-800 border-main flex gap-2 border p-2 rounded-8">
        <a
          href={`https://twitter.com/intent/tweet?text=${text}`}
          className="hover:text-main dark:text-white text-gray-1000"
          target="_blank"
          rel="noreferrer"
        >
          <Share />
        </a>
        {/* <button
          className={`${activeCursor ? 'text-main' : ''}`}
          onClick={() => setActiveCursor(!activeCursor)}
        >
          <Cursor />
        </button> */}
      </div>
    </div>
  )
}

export default FloatingMenu
