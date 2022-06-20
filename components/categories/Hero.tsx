import { Wrapper } from 'components/shared'
import React from 'react'

interface HeroInterface{
    category:string
}

function Hero({category}:HeroInterface) {
  return (
    <section className='bg-black py-[32px] md:py-[97px]' >
        <Wrapper>
            <h2 className='uppercase text-white text-center' >
                {category}
            </h2>
        </Wrapper>
    </section>
  )
}

export default Hero