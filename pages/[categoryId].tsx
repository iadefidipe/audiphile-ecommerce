import Head from "next/head"
import { GetStaticProps, GetStaticPaths } from "next"
import { ProductType } from "utils/types"
import { apiEndpoint, getCategory, getProductsByCategory, convertToUpperCase } from "utils/helper"
import axios from "axios"
import { Banner } from "components/global"
import { menuData } from "data/menuData"
import { Category } from "components/home"
import { ProductIntro, Hero } from "components/categories"

interface ProductCategoryInterface {
  products: ProductType[]
  category: string
}

function ProductCategory({ products, category }: ProductCategoryInterface) {
  const { menu } = menuData

  //TODO: Format "category" text
  const customCategory = convertToUpperCase(category);

  return (
    <>
      <Head>
        <title>
          {customCategory} | Shop for {customCategory}
        </title>
        <meta
          name='description'
          content={`Shop for the latest ${category} in the market. Let Audiophile be your reliable ${category} plug.`}
        />
        <meta
          property='og:title'
          content={`${customCategory} | Shop for ${customCategory}`}
          key='ogtitle'
        />
        <meta
          property='og:description'
          content={`Shop for the latest ${category} in the market. Let Audiophile be your reliable ${category} plug.`}
          key='ogdesc'
        />
      </Head>
      <main>
        <Hero category={category} />
        <ProductIntro data={products} />
        <Category data={menu} />
        <Banner />
      </main>
    </>
  )
}

export default ProductCategory

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await axios.get(apiEndpoint)

  const paths = getCategory(data).map((category) => {
    return {
      params: {
        categoryId: `${category}`,
      },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context: any) => {
  const category = context.params.categoryId

  const { data } = await axios.get(apiEndpoint)

  const categoryData = getProductsByCategory(category, data)

  return {
    props: {
      products: categoryData,
      category: category,
    },
  }
}
