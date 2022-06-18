import { Wrapper } from "components/shared"
import Image, { StaticImageData } from "next/image"
import { BtnShop } from "./Button"
import Link from "next/link"
import { MenuInterface } from "utils/types"

function menuComponent({ title, image, link }: MenuInterface) {
  return (
    <div className=' flex-1 first:hidden'>
      <Wrapper>
        <div className='flex flex-col justify-end items-center bg-gray  rounded-pry '>
          <div className='category relative h-[150px] w-[230px] '>
            <div className=' absolute -translate-y-[70px]   '>
              <Image src={image.src} alt={image.alt} />
            </div>
          </div>
          <div className='flex flex-col gap-[15px] mb-[30px] '>
            <h6 className=' font-bold uppercase '>{title}</h6>
            <Link href={link}>
              <BtnShop />
            </Link>
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default menuComponent
