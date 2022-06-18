import React from "react"
import { MenuComponent, Wrapper } from "components/shared"
import { MenuInterface } from "utils/types"

interface MobileMenuInterface{
  data: MenuInterface[]
}

function MobileMenu({ data }:MobileMenuInterface) {
  return (
    <div className='absolute left-0 right-0 top-[95px] bottom-0 bg-[hsl(0, 0%, 50%)]   h-[1414px]  z-50 '>
      <Wrapper>
        <div className=' px-pad py-[100px] flex flex-col gap-[100px] bg-white  '>
          {data.map((menu, index) => (
            <MenuComponent
              key={index}
              title={menu.title}
              link={menu.link}
              image={menu.image}
            />
          ))}
        </div>
      </Wrapper>
    </div>
  )
}

export default MobileMenu
