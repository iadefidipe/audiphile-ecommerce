import React from 'react'
import Image from 'next/image'
import audiophile from "public/assets/shared/desktop/logo.svg"
import Link from 'next/link'

interface LogoInterface{
  footer?: boolean
}

function Logo({footer}: LogoInterface) {
  return (
    <Link href='/' passHref >
      <div className={`${ footer ? "col-span-2 lg:col-span-1" : "" }`} >
      <Image src={audiophile} alt='audiophile logo' />
        </div>
    </Link>
  )
}

export default Logo