import React from "react"
import Image from "next/image"
import cart from "public/assets/icon-cart.svg"
import Wrapper from "./shared/Wrapper"
import Hamburger from "public/assets/icon-hamburger.svg"
import MenuLinks from "./shared/MenuLinks"
import Logo from "./shared/Logo"

function Header() {
  return (
    <header className='bg-black py-8 px-2 '>
      <Wrapper >
        <nav className=" nav ">
          <div className=" md:hidden" >
            <Image src={Hamburger} alt='audiophile logo' />
          </div>
         <Logo />
          <MenuLinks   />
          <div>
            <Image src={cart} alt='' />
          </div>
        </nav>
      </Wrapper>
    </header>
  )
}

export default Header
