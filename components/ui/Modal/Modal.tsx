import type { FC } from 'react'
import Portal from '@reach/portal'
import { Cross } from '@components/icons'
import { useBodyScroll, useOnClickOutside } from '@hooks'

import s from './Modal.module.css'

interface Props {
  className?: string
  children: React.ReactNode
  open: boolean
  onClose: () => void
}

const Modal: FC<Props> = ({ children, open = false, onClose }) => {
  const bodyScrollRef = useBodyScroll(open)
  const clickRef = useOnClickOutside(onClose)

  return (
    <Portal>
      {open && (
        <div className={s.root} ref={bodyScrollRef}>
          <div className={s.modal} ref={clickRef}>
            <div className="h-7 flex items-center justify-end w-full">
              <button
                onClick={onClose}
                aria-label="Close panel"
                className="hover:text-gray-500 transition ease-in-out duration-150 focus:outline-none"
              >
                <Cross className="h-6 w-6" />
              </button>
            </div>
            {children}
          </div>
        </div>
      )}
    </Portal>
  )
}

export default Modal
