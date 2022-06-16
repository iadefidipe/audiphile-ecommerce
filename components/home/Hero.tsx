import { Wrapper } from "components/shared"
import { BtnPry } from "components/shared/Button"
import React from "react"
import Image from "next/image"

function Hero() {
  return (
    <section className=' bg-hero-mobile sm:bg-hero-tablet lg:bg-hero-desktop bg-no-repeat bg-cover bg-black '>
      <Wrapper>
        <div className=' px-pad pt-[126px] pb-[167px]  lg:flex  '>
          <div className='text-white flex-1  flex flex-col items-center text-center gap-[24px] lg:items-start lg:text-left '>
            <p className='uppercase text-white opacity-50 text-overline tracking-overline '>NEW PRODUCT</p>
            <h1 className='uppercase'>XX99 Mark II Headphones</h1>
            <p className="body-text-white" >
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <BtnPry className='btnTwo mt-[26px] ' />
          </div>
          <div className=' hidden flex-1 lg:block '></div>
        </div>
      </Wrapper>
    </section>
  )
}

export default Hero
