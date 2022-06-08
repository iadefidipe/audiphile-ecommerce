import arrow from "public/assets/shared/desktop/icon-arrow-right.svg"
import Image from "next/image"

interface BtnInterface {
  num: number
}
export function BtnPry({num}: BtnInterface) {
  return <button className={`btn-${num}`}>SEE PRODUCT</button>
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
