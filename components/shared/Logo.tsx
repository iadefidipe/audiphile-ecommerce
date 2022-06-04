import React from 'react'
import Image from 'next/image'
import audiophile from "public/assets/audiophile-logo.svg"


function Logo() {
  return (
    <div>
    <Image src={audiophile} alt='audiophile logo' />
  </div>
  )
}

export default Logo