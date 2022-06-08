

interface HandleImageInterface {
    size: number|undefined
    dektyop
}

const renderImage = (size: number|undefined):unknown => {
    if (size && size > 1024) {
      return desktopImage
    } else if (size && (size > 640 && size <= 1024)) {
      return tabletImage
    } else {
      return mobileImage
    }
  }