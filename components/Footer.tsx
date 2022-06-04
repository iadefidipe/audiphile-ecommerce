import React from "react"
import Logo from "./shared/Logo"
import MenuLinks from "./shared/MenuLinks"
import Wrapper from "./shared/Wrapper"
import Facebook from "public/assets/icon-facebook.svg"
import Twitter from "public/assets/icon-twitter.svg"
import Instagram from "public/assets/icon-instagram.svg"
import Link from "next/link"
import Image from "next/image"

function Footer() {
  return (
    <footer className='bg-black'>
      <Wrapper>
        <Logo />
        <MenuLinks footer={true} />
        <p>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>

        <p>Copyright 2021. All Rights Reserved</p>

        <div className="bg-pry">
          <Link href='/'>
            <Image src={Facebook} alt='' />
          </Link>
          <Link href='/'>
            <Image src={Twitter} alt='' />
          </Link>
          <Link href='/'>
            <Image src={Instagram} alt='' />
          </Link>
        </div>
      </Wrapper>
    </footer>
  )
}

export default Footer
