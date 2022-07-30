import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface BallState {
  hidden?: boolean
}

const useBallsStore = create<BallState>()(
  devtools(
    persist((set) => ({
      hidden: false,
      toggleHide: (by) => set((state) => ({ hidden: !state.hidden })),
    })),
  ),
)
