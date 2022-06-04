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
<<<<<<< HEAD
      <Wrapper>
        <Logo />
        <MenuLinks footer={true} />

        <p className='text-white opacity-50 text-center '>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <p className='text-white opacity-50 text-center'>
          Copyright 2021. All Rights Reserved
        </p>

        <div className='flex gap-3'>
          <Link href='/'>
            <Image src={Facebook} alt='' />
          </Link>
          <Link href='/'>
            <Image src={Twitter} alt='' />
          </Link>
          <Link href='/'>
            <Image src={Instagram} alt='' />
          </Link>
=======
      <Wrapper  >
        <div className=" mx-2 py-12 flex flex-col items-center gap-12 md:grid grid-rows-3 grid-cols-2" >
          <Logo footer={true} />
          <MenuLinks footer={true} />
          <p className=" text-50 text-center md:col-span-2 text-left "  >
            Audiophile is an all in one stop to fulfill your audio needs. We're a
            small team of music lovers and sound specialists who are devoted to
            helping you get the most out of personal audio. Come and visit our
            demo facility - we’re open 7 days a week.
          </p>
          <p className="text-50 font-bold" >Copyright 2021. All Rights Reserved</p>
          <div className="flex items-center gap-4 ">
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
>>>>>>> 425da081f645d73576bdff9f910b425edec75c9b
        </div>
      </Wrapper>
    </footer>
  )
}

export default Footer
