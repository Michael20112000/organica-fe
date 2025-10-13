'use client'

import type { FC } from 'react'
import { usePathname, Link } from '@/i18n/navigation'
import { getStyles } from './styles'

interface IProps {
  href: string
  title: string
}

export const NavLink: FC<IProps> = ({ href, title }) => {
  const pathname = usePathname()
  const isActive = pathname === href || pathname.startsWith(`${href}/`)
  const styles = getStyles(isActive)

  return (
    <Link key={href} href={href} className={styles.link}>
      {title}
    </Link>
  )
}
