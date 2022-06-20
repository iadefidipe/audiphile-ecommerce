import { DoubleCard, LargeCard, WideCard } from "components/cards"
import type { NextPage } from "next"
import Head from "next/head"
import { menuData } from "data/menuData"
import { Category, Hero } from "components/home"
import { Banner } from "components/global"

const Home: NextPage = () => {
  const {menu} = menuData
  return (
    <>
      <Head>
        <title>Audiophile | Audio Gadgets Store</title>
        <meta
          name="description"
          content="Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast."
        />
      </Head>
      <main>
      <Hero />
      <Category data={menu} />
      <LargeCard />
      <WideCard />
      <DoubleCard />
      <Banner/>
      </main>    
    </>
  )
}

export default Home
