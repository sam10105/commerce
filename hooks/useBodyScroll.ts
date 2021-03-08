import { useRef, useEffect } from 'react'
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock'

function useBodyScroll(open: boolean) {
  const ref = useRef(null!)

  useEffect(() => {
    if (open) {
      disableBodyScroll(ref.current)
    } else {
      enableBodyScroll(ref.current)
    }

    return () => {
      clearAllBodyScrollLocks()
    }
  }, [open])

  return ref
}

export default useBodyScroll
