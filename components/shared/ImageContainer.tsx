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
  control?: string
}

function ImageContainer({
  desktopImage,
  tabletImage,
  mobileImage,
  alt,
  control,
}: ImageContainerInterface) {
  const { size } = useWindow()

  switch (control) {
    case "category":
      return (
        <div className='cta-image-wrap  flex-1 rounded-lg'>
          <Image
            src={handleImage(size, desktopImage, tabletImage, mobileImage)}
            alt={alt}
            width={640}
            height={560}
          />
        </div>
      )
    case "gallery":
      return (
        <div className='cta-image-wrap  flex-1 rounded-lg'>
          <Image
            src={handleImage(size, desktopImage, tabletImage, mobileImage)}
            alt={alt}
            width={540}
            height={234}
          />
        </div>
      )
    case "gallery-large":
      return (
        <div className='cta-image-wrap  flex-1 rounded-lg'>
          <Image
            src={handleImage(size, desktopImage, tabletImage, mobileImage)}
            alt={alt}
            width={635}
            height={592}
          />
        </div>
      )
    default:
      return (
        <div className='cta-image-wrap  flex-1 rounded-lg'>
          <Image
            src={handleImage(size, desktopImage, tabletImage, mobileImage)}
            alt={alt}
          />
        </div>
      )
  }

  // return (
  //   <div className='cta-image-wrap  flex-1 rounded-lg'>
  //     {!category ? (
  //       <Image
  //         src={handleImage(size, desktopImage, tabletImage, mobileImage)}
  //         alt={alt}
  //       />
  //     ) : (
  //       <Image
  //         src={handleImage(size, desktopImage, tabletImage, mobileImage)}
  //         alt={alt}
  //         width={640}
  //         height={560}
  //       />
  //     )}
  //   </div>
  // )
}

const MemoizedImage = memo(ImageContainer)

export default MemoizedImage
