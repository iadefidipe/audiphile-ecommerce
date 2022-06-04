import React from 'react'
import Image from 'next/image'
import audiophile from "public/assets/audiophile-logo.svg"

interface LogoInterface{
  footer?: boolean
}

function Logo({footer}: LogoInterface) {
  return (
    <div className={`${ footer ? "col-span-2" : "" }`} >
    <Image src={audiophile} alt='audiophile logo' />
  </div>
  )
}

export default Logo