import { Wrapper, ImageContainer } from "components/shared"
import { BtnPry } from "components/shared/Button"
import desktopImage from "public/assets/home/desktop/image-speaker-zx9.png"
import tabletImage from "public/assets/home/tablet/image-speaker-zx9.png"
import mobileImage from "public/assets/home/mobile/image-speaker-zx9.png"

function LargeCard() {
  console.log("large rerendered")
  return (
    <section className='my-10 mx-pad'>
      <Wrapper>
        <div className=' rounded-pry relative flex  bg-card-pattern-circle  bg-no-repeat  bg-[center_-14rem]  bg-pry lg:bg-desk-pattern py-[55px]  flex-col items-center gap-[32px] lg:flex-row lg:pl-[117.49px] lg:pr-[95px] lg:gap-[132px] lg:min-h-[560px] lg:overflow-hidden '>
          <div className=' w-[172.25px] md:w-[197.21px] lg:w-full lg:relative flex-1 '>
            <div className='lg:absolute lg:-translate-y-[130px]  '>
              <ImageContainer
                desktopImage={desktopImage}
                tabletImage={tabletImage}
                mobileImage={mobileImage}
              />
            </div>
          </div>
          <div className=' flex-1 flex  flex-col items-center lg:items-start gap-[24px]  text-white '>
            <h4 className=' text-h4 font-bold  '>ZX9 SPEAKER</h4>
            <p className='text-center lg:text-left'>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <BtnPry className='btnThree mt-[26px]' slug='zx9-speaker' />
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default LargeCard
