import Speaker from "public/assets/shared/desktop/image-category-thumbnail-earphones.png"
import { Wrapper } from "components/shared"
import Image from "next/image"
import { BtnShop } from "./Button"
import Link from "next/link"

function menuComponent({ image, link, alt }) {
  return (
    <section className='my-20  '>
      <Wrapper>
        <div className=' mx-pad flex flex-col justify-end items-center bg-gray  rounded-pry '>
          <div className='category relative h-[150px] w-[230px] '>
            <div className=' absolute top-[-50px]  '>
              <Image src={image} alt={alt} />
            </div>
          </div>

          <div className='flex flex-col gap-[15px] mb-[30px] '>
            <h6 className=' font-bold  '>HEADPHONES</h6>
            <Link href={link}>
              <BtnShop />
            </Link>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default menuComponent
