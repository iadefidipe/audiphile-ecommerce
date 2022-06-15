import { MenuComponent, Wrapper } from "components/shared"
import React from "react"
import { MenuInterface } from "utils/types"

interface CategoryInterface {
  data: MenuInterface[]
}

function Category({ data }: CategoryInterface) {
  return (
    <Wrapper>
      <div className=' flex flex-col  justify-between md:flex-row my-20'>
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
  )
}

export default Category
