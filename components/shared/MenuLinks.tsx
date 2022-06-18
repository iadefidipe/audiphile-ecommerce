import Link from "next/link"
import { MenuInterface } from "utils/types"
import { menuData } from "data/menuData"

interface MenuLinksInterface {
  footer?: boolean
}

function MenuLinks({ footer }: MenuLinksInterface) {
  const { menu } = menuData
  return (
    <div className={`${!footer ? "footer-false" : " footer-true"}`}>
      {menu.map((menu, index) => (
        <Link key={index} href={menu.link} passHref>
          <a href='' className="uppercase" >{menu.title}</a>
        </Link>
      ))}
    </div>
  )
}

export default MenuLinks


