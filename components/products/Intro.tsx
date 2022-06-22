import { Counter, ImageContainer, Wrapper } from "components/shared"
import { BtnAdd } from "components/shared/Button"
import React from "react"
import { currency_symbol } from "utils/helper"
import { ImagesTypes } from "utils/types"

interface IntroInterface {
  image: ImagesTypes
  name: string
  description: string
  price: number
  state: boolean
}

function Intro({ image, name, description, price, state }: IntroInterface) {
  return (
    <section className='px-pad py-tb'>
      <Wrapper>
        <div className=' md:flex items-center md:gap-[69px]  lg:gap-[124px] '>
          <div className='md:flex-1 md:min-h-[480px] md:min-w-[281px]'>
            <ImageContainer
              desktopImage={image.desktop}
              tabletImage={image.tablet}
              mobileImage={image.mobile}
              control='intro'
            />
          </div>
          <div className='flex flex-col gap-[24px] md:flex-[2] lg:flex-1'>
            {state && <p className='overline-pry lg:hidden'>new product</p>}
            <h2 className='uppercase'>{name}</h2>
            <p className='opacity-50'>{description}</p>
            <h6>
              {currency_symbol}
              {price.toLocaleString("en-US")}
            </h6>
            <div>
              <div className='flex gap-[16px]  '>
                <Counter />
                <BtnAdd />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default Intro
