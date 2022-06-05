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
    <footer className='bg-black '>
      <Wrapper>
        <div className=' footer__container'>
          <Logo footer={true} />
          <MenuLinks footer={true} />
          <p className=' text-50 text-center md:text-left col-span-2 lg:col-span-1 '>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <p className='text-50 font-bold lg:row-start-3'>
            Copyright 2021. All Rights Reserved
          </p>
          <div className='flex items-center gap-4 md:justify-self-end '>
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
        </div>
      </Wrapper>
    </footer>
  )
}

export default Footer
