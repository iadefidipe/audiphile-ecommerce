import { StaticImageData } from "next/image"

type HandleImageInterface = {
  (
    size: number | undefined,
    desktopImage: StaticImageData,
    tabletImage: StaticImageData,
    mobileImage: StaticImageData
  ): StaticImageData
}

export const handleImage: HandleImageInterface = (
  size,
  desktopImage,
  tabletImage,
  mobileImage
) => {
  if (size && size > 1024) {
    return desktopImage
  } else if (size && size > 640 && size <= 1024) {
    return tabletImage
  } else {
    return mobileImage
  }
}
