import { Wrapper } from "components/shared"
import { BtnPry } from "components/shared/Button"


function WideCard() {
  return (
    <section className="mx-pad" >
      <Wrapper >
        <div className='my-10  rounded-pry bg-no-repeat pl-[24px] min-h-[320px] flex flex-col items-start justify-center bg-wide-card-sm bg-right  bg-cover sm:bg-wide-card-md md:pl-[62px] lg:bg-wide-card-lg lg:pl-[95px] '>
          <h4 className=' text-h4 font-bold leading-h4 '>ZX7 SPEAKER</h4>
          <BtnPry className="btnOne" slug='zx7-speaker' />
        </div>
      </Wrapper>
    </section>
  )
}

export default WideCard
