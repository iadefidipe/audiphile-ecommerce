import React from "react"
import Image from "next/image"
import { Wrapper, MenuLinks, Logo, CartIcon } from "components/shared"
import Hamburger from "public/assets/shared/tablet/icon-hamburger.svg"

function Header() {
  return (
    <header className='bg-black py-8  left-0 right-0 z-50'>
      <Wrapper>
        <nav className=' nav '>
          <div className=' md:hidden'>
            <Image src={Hamburger} alt='audiophile logo' />
          </div>
          <Logo />
          <MenuLinks />
          <CartIcon />
        </nav>
      </Wrapper>
    </header>
  )
}

export default Header
