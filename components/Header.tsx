import React from "react"
import Image from "next/image"
import audiophile from "public/assets/audiophile-logo.svg"
import cart from "public/assets/icon-cart.svg"
import Wrapper from "./shared/Wrapper"
import Hamburger from "public/assets/icon-hamburger.svg"

function Header() {
  return (
    <header className='bg-black p-8 '>
      <Wrapper >
        <nav className=" relative flex items-center justify-between gap-7 after:content-[''] after:absolute after:left-0 after:right-0 after:bg-[#979797] after:h-px after:mt-[60px]">
          <div className=" md:hidden" >
            <Image src={Hamburger} alt='audiophile logo' />
          </div>
          <div>
            <Image src={audiophile} alt='audiophile logo' />
          </div>
          <div className='hidden md:flex text-white text-nav  gap-7 font-bold'>
            <a href=''>HOME</a>
            <a href=''>HEADPHONES</a>
            <a href=''>SPEAKERS</a>
            <a href=''>EARPHONES</a>
          </div>
          <div>
            <Image src={cart} alt='' />
          </div>
        </nav>
      </Wrapper>
    </header>
  )
}

export default Header
