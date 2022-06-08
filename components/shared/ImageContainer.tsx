import useWindow from "hook/useWindow"
import Image from "next/image"
import { StaticImageData } from "next/image"
import { memo } from "react"
import { handleImage } from "utils/helper"

interface ImageContainerInterface {
  desktopImage: StaticImageData
  tabletImage: StaticImageData
  mobileImage: StaticImageData
}

function ImageContainer({
  desktopImage,
  tabletImage,
  mobileImage,
}: ImageContainerInterface) {
  const { size } = useWindow()

  return (
    <div className='cta-image-wrap  flex-1 rounded-lg'>
      <Image
        src={handleImage(size, desktopImage, tabletImage, mobileImage)}
        alt=''
      />
    </div>
  )
}

const MemoizedImage = memo(ImageContainer)

export default MemoizedImage
