import Image from "next/image"
import { memo } from "react"
import desktopImage from "public/assets/home/desktop/image-earphones-yx1.jpg"
import tabletImage from "public/assets/home/tablet/image-earphones-yx1.jpg"
import mobileImage from "public/assets/home/mobile/image-earphones-yx1.jpg"
import useWindow from "hook/useWindow"
import { BtnOne } from "components/shared/Button"
import { Wrapper } from "components/shared"

function ImageContainer() {
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
    <div className='cta-image-wrap h-[200px] sm:h-auto flex-1 '>
      <Image src={renderImage(size)} alt='' />
    </div>
  )
}

//memoizing image rendered to avoid banner component rendering
const MemoImage = memo(ImageContainer)

function DoubleCard() {
  return (
    <section className='my-10'>
      <Wrapper>
        <div className='double-card'>
          <MemoImage />
          <div className=' smcard-btn '>
            <h4 className=' text-h4 font-bold  '>YX1 EARPHONES</h4>
            <BtnOne />
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default DoubleCard
