import { memo } from "react"
import desktopImage from "public/assets/home/desktop/image-earphones-yx1.jpg"
import tabletImage from "public/assets/home/tablet/image-earphones-yx1.jpg"
import mobileImage from "public/assets/home/mobile/image-earphones-yx1.jpg"
import { BtnPry } from "components/shared/Button"
import { ImageContainer, Wrapper } from "components/shared"


function DoubleCard() {
  return (
    <section className='my-10 mx-pad'>
      <Wrapper>
        <div className='double-card'>
          <ImageContainer
            desktopImage={desktopImage}
            tabletImage={tabletImage}
            mobileImage={mobileImage}
            alt=''
          />
          <div className=' smcard-btn '>
            <h4 className=' text-h4 font-bold leading-h4  '>YX1 EARPHONES</h4>
            <BtnPry className="btnOne" />

          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default DoubleCard
