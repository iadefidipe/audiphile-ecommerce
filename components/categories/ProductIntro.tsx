import { ImageContainer, Wrapper } from "components/shared"
import React from "react"
import { ProductType } from "utils/types"
import { BtnPry } from "components/shared/Button"

interface ProductIntroInterface {
  data: ProductType[]
}

function ProductIntro({ data }: ProductIntroInterface) {
  return (
    <Wrapper>
      {data.map((product, index) => (
        <section
          key={index}
          className='mx-pad py-[120px] lg:py-[160px] flex flex-col items-center justify-center gap-[32px] lg:flex-row lg:odd:flex-row-reverse lg:gap-[125px] '
        >
          <div>
            <ImageContainer
              desktopImage={product.image.desktop}
              tabletImage={product.image.tablet}
              mobileImage={product.image.mobile}
              control="product"
            />
          </div>
          <div className='flex-1 flex flex-col items-center gap-[24px] lg:items-start'>
            <p className=" overline-pry " >NEW PRODUCT</p>
            <h2 className="text-center lg:text-left uppercase" >{product.name}</h2>
            <p className="text-center text-black opacity-50 font-medium lg:text-left " >{product.description}</p>
            <BtnPry className='btnTwo' slug={product.slug} />
          </div>
        </section>
      ))}
    </Wrapper>
  )
}

export default ProductIntro
