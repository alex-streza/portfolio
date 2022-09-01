import { RoomProvider, useOthers } from './liveblocks.config'

const UserLiveblock = () => {
  const others = useOthers()
  const count = others.count + 1

  return (
    <span className="flex gap-1 items-center mr-1">
      <span
        className={`${
          count > 5 ? 'bg-green' : count > 2 ? 'bg-yellow' : 'bg-gray'
        } w-2 h-2 rounded-full`}
      />
      {count}
    </span>
  )
}

const Liveblock = () => {
  const pathname = window.location.pathname.split('/')
  const roomId = pathname[pathname.length - 1]

  return (
    // add to see where other users are reading
    <RoomProvider id={roomId} initialPresence={{}} initialStorage={() => ({})}>
      <UserLiveblock />
    </RoomProvider>
  )
}

export default Liveblock
