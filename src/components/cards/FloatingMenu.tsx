import Cursor from '@components/icons/Cursor'
import Share from '@components/icons/Share'
import { useSessionStorageValue } from '@react-hookz/web'

interface FloatingMenuProps {
  text: string
}

const FloatingMenu = ({ text }: FloatingMenuProps) => {
  const { value: showCursors, set: setShowCursors } = useSessionStorageValue(
    'show_cursors',
    {
      defaultValue: false,
    },
  )

  return (
    <div className="!sticky !left-0 !bottom-12 w-full grid place-content-center">
      <div className="dark:bg-gray-hex dark:bg-opacity-70 backdrop-blur-md border-main flex gap-2 border p-2 rounded-8">
        <a
          href={`https://twitter.com/intent/tweet?text=${text}`}
          className="hover:text-main dark:!text-white !text-gray-1000"
          target="_blank"
          rel="noreferrer"
          aria-label="share"
        >
          <Share />
        </a>
        <button
          className={`${
            showCursors ? 'text-main' : 'dark:!text-white !text-gray-1000'
          }`}
          onClick={() => setShowCursors((prev) => !prev)}
          aria-label="cursors"
        >
          <Cursor />
        </button>
      </div>
    </div>
  )
}

export default FloatingMenu
