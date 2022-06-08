import { Wrapper } from "components/shared"
import React, { useEffect, useState, useCallback, memo } from "react"
import desktopImage from "public/assets/shared/desktop/image-best-gear.jpg"
import tabletImage from "public/assets/shared/tablet/image-best-gear.jpg"
import mobileImage from "public/assets/shared/mobile/image-best-gear.jpg"
import useWindow from "hook/useWindow"
import Image from "next/image"

function BannerImage() {
  const { size } = useWindow()

  const renderImage = (size: number) => {
    if (size > 1024) {
      return desktopImage
    } else if (size > 640 && size <= 1024) {
      return tabletImage
    } else {
      return mobileImage
    }
  }

  return (
    <div className='cta-image-wrap  flex-1 rounded-lg'>
      <Image src={renderImage(size)} alt='' />
    </div>
  )
}

//memoizing image rendered to avoid banner component rendering
const MemoImage = memo(BannerImage)

function Banner() {
  return (
    <section className='my-10'>
      <Wrapper>
        <div className='mx-pad flex flex-col-reverse gap-[63px] lg:flex-row items-center  '>
          <div className='flex-1'>
            <h2 className='h2'>
              Bringing you the <span className='text-accent'>best</span> audio
              gear
            </h2>
            <p className='body-text-black '>
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>
          <MemoImage />
        </div>
      </Wrapper>
    </section>
  )
}

export default Banner
