import { MenuComponent, Wrapper } from "components/shared"
import React from "react"
import { MenuInterface } from "utils/types"

interface CategoryInterface {
  data: MenuInterface[]
}

function Category({ data }: CategoryInterface) {
  return (
    <section className='my-10'>
      <Wrapper>
        <div className='mx-pad flex flex-col gap-[70px] md:flex-row justify-between '>
          {data.map((menu, index) => (
            <MenuComponent
              key={index}
              title={menu.title}
              link={menu.link}
              active={menu.active}
              cta={menu.cta}
              image={menu.image}
            />
          ))}
        </div>
      </Wrapper>
    </section>
  )
}

export default Category
