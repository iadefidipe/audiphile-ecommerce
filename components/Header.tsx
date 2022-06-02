import React from "react"
import Image from "next/image"
import audiophile from "public/assets/audiophile-logo.svg"
import cart from "public/assets/icon-cart.svg"


function Header() {
  return (
    <header className='bg-black m-auto'>
      
      <nav className=" flex items-center justify-between gap-7" >
      <div>
        <Image src={audiophile} alt='audiophile logo' />
      </div>
        <div className="text-white text-nav flex gap-7" >
            <a href=''>HOME</a>
            <a href=''>HEADPHONES</a>
            <a href=''>SPEAKERS</a>
            <a href=''>EARPHONES</a>
        </div>
        <div>
            <Image src={cart} alt="" />
        </div>
      </nav>

      
    </header>
  )
}

export default Header
