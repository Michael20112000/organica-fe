import type { FC, PropsWithChildren } from 'react'
import { Header } from './header'
import { Logo, Nav } from './header/components'
import { Footer } from './footer'

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header logo={<Logo />} nav={<Nav />} />
      <main>{children}</main>
      <Footer />
    </>
  )
}
