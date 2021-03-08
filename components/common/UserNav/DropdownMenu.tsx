import { useState } from 'react'
import cn from 'classnames'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'
import useLogout from '@bigcommerce/storefront-data-hooks/use-logout'

import { Avatar } from '@components/common'
import { Moon, Sun } from '@components/icons'
import { useUI } from '@components/ui/context'
import ClickOutside from '@lib/click-outside'
import { useBodyScroll } from '@hooks'

import s from './DropdownMenu.module.css'

const LINKS = [
  {
    name: 'My Orders',
    href: '/orders',
  },
  {
    name: 'My Profile',
    href: '/profile',
  },
  {
    name: 'My Cart',
    href: '/cart',
  },
]

const DropdownMenu = () => {
  const logout = useLogout()
  const { pathname } = useRouter()
  const { theme, setTheme } = useTheme()
  const [display, setDisplay] = useState(false)
  const { closeSidebarIfPresent } = useUI()
  const ref = useBodyScroll(display)

  return (
    <ClickOutside active={display} onClick={() => setDisplay(false)}>
      <div>
        <button
          className={s.avatarButton}
          onClick={() => setDisplay(!display)}
          aria-label="Menu"
        >
          <Avatar />
        </button>
        {display && (
          <ul className={s.dropdownMenu} ref={ref}>
            {LINKS.map(({ name, href }) => (
              <li key={href}>
                <div>
                  <Link href={href}>
                    <a
                      className={cn(s.link, {
                        [s.active]: pathname === href,
                      })}
                      onClick={() => {
                        setDisplay(false)
                        closeSidebarIfPresent()
                      }}
                    >
                      {name}
                    </a>
                  </Link>
                </div>
              </li>
            ))}
            <li>
              <a
                className={cn(s.link, 'justify-between')}
                onClick={() => {
                  theme === 'dark' ? setTheme('light') : setTheme('dark')
                  setDisplay(false)
                }}
              >
                <div>
                  Theme: <strong>{theme}</strong>{' '}
                </div>
                <div className="ml-3">
                  {theme == 'dark' ? (
                    <Moon width={20} height={20} />
                  ) : (
                    <Sun width="20" height={20} />
                  )}
                </div>
              </a>
            </li>
            <li>
              <a
                className={cn(s.link, 'border-t border-accents-2 mt-4')}
                onClick={() => logout()}
              >
                Logout
              </a>
            </li>
          </ul>
        )}
      </div>
    </ClickOutside>
  )
}

export default DropdownMenu
