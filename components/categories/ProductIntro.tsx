import { ImageContainer, Wrapper } from "components/shared"
import React from "react"
import { ProductType } from "utils/types"
import Image from 'next/image'

interface ProductIntroInterface {
  data: ProductType[]
}

function ProductIntro({ data }: ProductIntroInterface) {
  
  return (
    <Wrapper>
      {data.map((product, index) => (
        <section key={index}>
          <ImageContainer desktopImage={product.image.desktop} tabletImage={product.image.tablet} mobileImage={product.image.mobile} />
        </section>
      ))}
    </Wrapper>
  )
}

export default ProductIntro
