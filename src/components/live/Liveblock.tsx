import LiveCursor from '@components/cursor/LiveCursor'
import { useEffect } from 'react'
import {
  RoomProvider,
  useOthers,
  useUpdateMyPresence,
} from './liveblocks.config'

import {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals,
} from 'unique-names-generator'

const UserLiveblock = () => {
  const others = useOthers()
  const count = others.count + 1

  const updateMyPresence = useUpdateMyPresence()

  useEffect(() => {
    const randomName = uniqueNamesGenerator({
      dictionaries: [adjectives, colors, animals],
      length: 2,
    })
    updateMyPresence({
      color: '#' + Math.floor(Math.random() * 16777215).toString(16),
      name: randomName,
    })

    document.body.addEventListener('mousemove', (event) => {
      const eventDoc = document
      const doc = eventDoc.documentElement
      const body = eventDoc.body

      updateMyPresence({
        cursor: {
          x:
            event.clientX +
            ((doc && doc.scrollLeft) || (body && body.scrollLeft) || 0) -
            ((doc && doc.clientLeft) || (body && body.clientLeft) || 0),
          y:
            event.clientY +
            ((doc && doc.scrollTop) || (body && body.scrollTop) || 0) -
            ((doc && doc.clientTop) || (body && body.clientTop) || 0),
        },
      })
    })
  }, [updateMyPresence])
  return (
    <>
      {others.map((other) => (
        <LiveCursor
          key={other.id}
          x={other.presence?.cursor?.x}
          y={other.presence?.cursor?.y}
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
