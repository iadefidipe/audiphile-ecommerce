import React from "react"
import Image from "next/image"
import audiophile from "public/assets/audiophile-logo.svg"
import cart from "public/assets/icon-cart.svg"
import Wrapper from "./shared/Wrapper"

function Header() {
  return (
    <header className='bg-black mt-8 mx-auto'>
      <Wrapper >
        <nav className=" relative flex items-center justify-between gap-7 after:content-[''] after:absolute after:left-0 after:right-0 after:bg-[#979797] after:h-px after:mt-[36px]">
          <div>
            <Image src={audiophile} alt='audiophile logo' />
          </div>
          <div className='text-white text-nav flex gap-7 font-bold'>
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
