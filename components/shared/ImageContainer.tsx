import useWindow from "hook/useWindow"
import Image from "next/image"
import { StaticImageData } from "next/image"
import { memo } from "react"
import { handleImage } from "utils/helper"

interface ImageContainerInterface {
  desktopImage: StaticImageData | string
  tabletImage: StaticImageData | string
  mobileImage: StaticImageData | string
  alt?: string
  category?: boolean
  product?: boolean
}

function ImageContainer({
  desktopImage,
  tabletImage,
  mobileImage,
  alt,
  category,
  product
}: ImageContainerInterface) {
  const { size } = useWindow()

  return (
    <div className='cta-image-wrap  flex-1 rounded-lg'>
      {!category ? (
        <Image
          src={handleImage(size, desktopImage, tabletImage, mobileImage)}
          alt={alt}
        />
      ) : (
        <Image
          src={handleImage(size, desktopImage, tabletImage, mobileImage)}
          alt={alt}
          width={ 640  }
          height={560}
        />
      )}
    </div>
  )
}

const MemoizedImage = memo(ImageContainer)

export default MemoizedImage
