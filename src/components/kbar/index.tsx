import { KBarAnimator, KBarPortal, KBarPositioner, KBarSearch } from 'kbar'
import React, { useEffect } from 'react'

const KBar = () => {
  useEffect(() => {}, [])

  return (
    <KBarPortal>
      <KBarPositioner>
        <KBarAnimator>
          <KBarSearch />
        </KBarAnimator>
      </KBarPositioner>
    </KBarPortal>
  )
}

export default KBar
