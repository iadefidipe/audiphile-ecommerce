import { ImageContainer, Wrapper } from "components/shared"
import { BtnPry } from "components/shared/Button"
import React from "react"
import { OthersType } from "utils/types"

interface OthersInterface {
  data: OthersType[]
}
function Others({ data }: OthersInterface) {
  return (
    <section className="mx-pad pb-[100px]" >
      <Wrapper>
        <h3 className="uppercase text-center mb-[64px] " >you may also like</h3>
        <div className="flex flex-col sm:flex-row gap-[56px]  ms:gap-[11px] lg:gap-[30px] " >
          {data.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-[32px] " >
              <div className=" w-[100%]    " >
                <ImageContainer
                  desktopImage={item.image.desktop}
                  tabletImage={item.image.tablet}
                  mobileImage={item.image.mobile}
                  control="category"
                />
              </div>
              <h5>{item.name}</h5>
              <BtnPry className="btnTwo" slug={item.slug} />
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  )
}

export default Others
