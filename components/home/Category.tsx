import { MenuComponent, Wrapper } from "components/shared"
import React from "react"
import { MenuInterface } from "utils/types"

interface CategoryInterface {
  data: MenuInterface[]
}

function Category({ data }: CategoryInterface) {
  return (
    <section className="mx-pad" >
      <Wrapper  >
        <div className=' flex flex-col gap-[100px] md:gap-[30px] justify-between md:flex-row mt-40  '>
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
    </section>
  )
}

export default Category
