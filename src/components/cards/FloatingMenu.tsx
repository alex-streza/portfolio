import Cursor from '@components/icons/Cursor'
import Share from '@components/icons/Share'
import { useSessionStorageValue } from '@react-hookz/web'

interface FloatingMenuProps {
  text: string
}

const FloatingMenu = ({ text }: FloatingMenuProps) => {
  const [showCursors, setShowCursors] = useSessionStorageValue(
    'show_cursors',
    false,
  )

  return (
    <div className="!sticky !left-0 !bottom-12 w-full grid place-content-center">
      <div className="dark:bg-gray-800 bg-light-gray-600 border-main flex gap-2 border p-2 rounded-8">
        <a
          href={`https://twitter.com/intent/tweet?text=${text}`}
          className="hover:text-main dark:text-white text-gray-1000"
          target="_blank"
          rel="noreferrer"
        >
          <Share />
        </a>
        <button
          className={`${showCursors ? 'text-main' : ''}`}
          onClick={() => setShowCursors((prev) => !prev)}
        >
          <Cursor />
        </button>
      </div>
    </div>
  )
}

export default FloatingMenu
