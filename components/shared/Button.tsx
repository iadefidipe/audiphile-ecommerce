import arrow from "public/assets/shared/desktop/icon-arrow-right.svg"
import Image from "next/image"


interface BtnInterface {
  num: string
}
export function BtnOne() {
  return <button className={`btnOne`}>SEE PRODUCT</button>
}
export function BtnTwo() {
  return <button className={`btnTwo`}>SEE PRODUCT</button>
}

export function BtnShop() {
  return (
    <button className='btn-shop'>
      SHOP
      <span>
        <Image src={arrow} width={10} height={10} alt='' />
      </span>
    </button>
  )
}
