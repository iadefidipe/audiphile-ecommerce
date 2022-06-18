import React, {useState} from "react"
import Image from "next/image"
import { Wrapper, MenuLinks, Logo, CartIcon } from "components/shared"
import Hamburger from "public/assets/shared/tablet/icon-hamburger.svg"
import MobileMenu from "./MobileMenu"
import { menuData } from "data/menuData"


function Header() {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <header className='bg-black py-8  left-0 right-0 z-50'>
      <Wrapper>
        <nav className=' nav '>
          <div className=' md:hidden' onClick={() => setToggleMenu(!toggleMenu)} >
            <Image src={Hamburger} alt='audiophile logo' />
          </div>
          <Logo />
          <MenuLinks  />
          <CartIcon />
        </nav>
        { toggleMenu && <MobileMenu data={menuData.menu} />}
      </Wrapper>
    </header>
  )
}

export default Header
