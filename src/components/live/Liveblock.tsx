import LiveCursor from '@components/cursor/LiveCursor'
import { useSessionStorageValue } from '@react-hookz/web'
import { getRandomColor } from '@utils/color'
import { useCallback, useEffect } from 'react'
import {
  adjectives,
  animals,
  colors,
  uniqueNamesGenerator,
} from 'unique-names-generator'
import {
  RoomProvider,
  useOthers,
  useUpdateMyPresence,
} from './liveblocks.config'

const UserLiveblock = () => {
  const others = useOthers()
  const count = others.count + 1

  const updateMyPresence = useUpdateMyPresence()

  const [showCursors] = useSessionStorageValue('show_cursors', false)

  const handleUpdateCursor = useCallback(
    (event) => {
      const eventDoc = document
      const doc = eventDoc.documentElement
      const body = eventDoc.body

      updateMyPresence({
        cursor: {
          x:
            (event.clientX +
              ((doc && doc.scrollLeft) || (body && body.scrollLeft) || 0) -
              ((doc && doc.clientLeft) || (body && body.clientLeft) || 0)) /
            window.innerWidth,
          y:
            (event.clientY +
              ((doc && doc.scrollTop) || (body && body.scrollTop) || 0) -
              ((doc && doc.clientTop) || (body && body.clientTop) || 0)) /
            window.innerHeight,
        },
      })
    },
    [updateMyPresence],
  )

  useEffect(() => {
    if (showCursors) {
      const randomName = uniqueNamesGenerator({
        dictionaries: [adjectives, colors, animals],
        length: 2,
      })

      updateMyPresence({
        color: getRandomColor(),
        name: randomName,
      })
      document.body.addEventListener('mousemove', handleUpdateCursor)
    } else {
      updateMyPresence({})
      document.body.removeEventListener('mousemove', handleUpdateCursor)
    }
  }, [handleUpdateCursor, showCursors, updateMyPresence])

  return (
    <>
      {showCursors &&
        others.map((other) => (
          <LiveCursor
            key={other.id}
            x={other.presence?.cursor?.x * window.innerWidth}
            y={other.presence?.cursor?.y * window.innerHeight}
            color={other.presence?.color}
            name={other.presence?.name}
          />
        ))}
      <span className="flex gap-1 items-center mr-1">
        <span
          className={`${
            count > 5 ? 'bg-green' : count > 2 ? 'bg-yellow' : 'bg-gray'
          } w-2 h-2 rounded-full`}
        />
        {count}
      </span>
    </>
  )
}

const Liveblock = () => {
  const pathname = window.location.pathname.split('/')
  const roomId = pathname[pathname.length - 1]

  return (
    // add to see where other users are reading
    <RoomProvider
      id={roomId}
      initialPresence={{
        cursor: null,
      }}
    >
      <UserLiveblock />
    </RoomProvider>
  )
}

export default Liveblock
