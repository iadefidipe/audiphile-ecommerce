import Image from "next/image"
import Cart from "public/assets/shared/desktop/icon-cart.svg"

function CartIcon() {
  return (
    <div>
      <Image src={Cart} alt='cart icon notification' />
    </div>
  )
}

export default CartIcon
