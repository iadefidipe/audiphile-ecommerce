import React from "react"

interface MenuLinksInterface {
    footer?: boolean
}

function MenuLinks({footer}:MenuLinksInterface) {
  return (
    <div className= {`${!footer ? 'hidden' : 'flex flex-col items-center '} md:flex flex-row text-white text-nav  gap-7 font-bold`}>
      <a href=''>HOME</a>
      <a href=''>HEADPHONES</a>
      <a href=''>SPEAKERS</a>
      <a href=''>EARPHONES</a>
    </div>
  )
}

export default MenuLinks
