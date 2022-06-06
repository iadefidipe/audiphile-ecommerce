import Link from "next/link"

interface MenuLinksInterface {
  footer?: boolean
}

function MenuLinks({ footer }: MenuLinksInterface) {
  return (
    <div className={`${!footer ? "footer-false" : " footer-true"}`}>
      <Link href={"/"} passHref>
        <a href=''>HOME</a>
      </Link>
      <Link href={"/"} passHref>
        <a href=''>HEADPHONES</a>
      </Link>
      <Link href={"/"} passHref>
        <a href=''>SPEAKERS</a>
      </Link>
      <Link href={"/"} passHref>
        <a href=''>EARPHONES</a>
      </Link>
    </div>
  )
}

export default MenuLinks
