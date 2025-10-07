import { Hero, Gallery } from '@/app/[locale]/sections' // TODO: it might be better to take out the sections from [locale] folder

export default function Home() {
  return (
    <>
      <Hero />
      <Gallery />
    </>
  )
}
