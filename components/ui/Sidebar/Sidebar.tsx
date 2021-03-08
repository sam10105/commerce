import type { FC } from 'react'
import Portal from '@reach/portal'

import { useBodyScroll } from '@hooks'
import s from './Sidebar.module.css'

interface Props {
  children: React.ReactNode
  open: boolean
  onClose: () => void
}

const Sidebar: FC<Props> = ({ children, open = false, onClose }) => {
  const ref = useBodyScroll(open)

  return (
    <Portal>
      {open && (
        <div className={s.root} ref={ref}>
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
              onClick={onClose}
            />
            <section className="absolute inset-y-0 right-0 pl-10 max-w-full flex sm:pl-16 outline-none">
              <div className="h-full md:w-screen md:max-w-md">
                <div className="h-full flex flex-col text-base bg-accents-1 shadow-xl overflow-y-auto">
                  {children}
                </div>
              </div>
            </section>
          </div>
        </div>
      )}
    </Portal>
  )
}

export default Sidebar
