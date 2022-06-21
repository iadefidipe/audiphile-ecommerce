import { ImageContainer, Wrapper } from 'components/shared'
import React from 'react'
import { GalleryTypes } from 'utils/types'

interface GalleryInterface{
  data: GalleryTypes
}

function Gallery({data}: GalleryInterface) {
  console.log("gallery",data)
  return (
    <section className=' px-pad pb-[100px] ' >
      <Wrapper >
        <div className=' sm:grid md:grid-cols-2 md:grid-rows-2 gap-[20px] md:max-h-[500px]  md:gap-x-[18px] md:gap-y-[20px] lg:gap-x-[30px] lg:gap-y-[32px] ' >
         <div>
           <ImageContainer desktopImage={data.first.desktop} tabletImage={data.first.tablet} mobileImage={data.first.mobile} control="gallery" />
         </div>
         <div >
           <ImageContainer desktopImage={data.second.desktop} tabletImage={data.second.tablet} mobileImage={data.second.mobile} control="gallery" />
         </div>
         <div className=' md:row-start-1 md:row-end-3 md:col-start-2 ' >
           <ImageContainer desktopImage={data.third.desktop} tabletImage={data.third.tablet} mobileImage={data.third.mobile} control="gallery-large" />
         </div>
        </div>
      
      </Wrapper>
    </section>
  )
}

export default Gallery