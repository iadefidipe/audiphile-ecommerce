import arrow from "public/assets/shared/desktop/icon-arrow-right.svg"
import Image from "next/image"


interface BtnInterface {
  className: string
}
export function BtnPry({className}: BtnInterface) {
  return <button className={className}>SEE PRODUCT</button>
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
