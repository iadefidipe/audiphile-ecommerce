import useWindow from "hook/useWindow"
import {memo } from "react"

interface ImageContainerInterface {
    desktopImage: unknown
    tabletImage: unknown
    mobileImage: unknown
}

function ImageContainer({desktopImage, tabletImage, mobileImage}:ImageContainerInterface) {
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
  const MemoImage = memo(ImageContainer)