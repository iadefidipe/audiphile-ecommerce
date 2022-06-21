import { ImageContainer, Wrapper } from 'components/shared'
import React from 'react'
import { GalleryTypes } from 'utils/types'

interface GalleryInterface{
  data: GalleryTypes
}

function Gallery({data}: GalleryInterface) {
  console.log("gallery",data)
  return (
    <section>
      <Wrapper >
        <div className=' md:grid grid-cols-2 grid-rows-2 md:max-h-[500px] gap-x-[30px] gap-y-[32px] ' >
         <div>
           <ImageContainer desktopImage={data.first.desktop} tabletImage={data.first.tablet} mobileImage={data.first.mobile} control="gallery" />
         </div>
         <div >
           <ImageContainer desktopImage={data.second.desktop} tabletImage={data.second.tablet} mobileImage={data.second.mobile} control="gallery" />
         </div>
         <div className=' row-start-1 row-end-3 col-start-2 ' >
           <ImageContainer desktopImage={data.third.desktop} tabletImage={data.third.tablet} mobileImage={data.third.mobile} control="gallery-large" />
         </div>
        </div>
      
      </Wrapper>
    </section>
  )
}

export default Gallery