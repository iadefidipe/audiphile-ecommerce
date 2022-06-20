import arrow from "public/assets/shared/desktop/icon-arrow-right.svg"
import Image from "next/image"
import Link from "next/link"

interface BtnInterface {
  className?: string
  slug: string
}
export function BtnPry({ className, slug }: BtnInterface) {
  return (
    <Link href={`/products/${slug}`} passHref>
      <button className={className}>SEE PRODUCT</button>
    </Link>
  )
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
