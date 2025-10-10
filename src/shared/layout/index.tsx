import type { FC, PropsWithChildren } from 'react'
import { Header } from './header'
import { Footer } from './footer'

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <main className='grow'>{children}</main>
      <Footer />
    </div>
  )
}
