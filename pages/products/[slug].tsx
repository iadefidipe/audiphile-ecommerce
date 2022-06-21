import Head from "next/head"
import { Wrapper } from "components/shared"
import React from "react"
import { GetStaticProps, GetStaticPaths } from "next"
import {
  getSlugs,
  apiEndpoint,
  getProductsBySlug,
  convertToUpperCase,
} from "utils/helper"
import axios from "axios"
import { ProductType } from "utils/types"
import { Banner } from "components/global"
import { Category } from "components/home"
import { menuData } from "data/menuData"
import { Feature, Gallery, Others } from "components/products"



interface ProductInterface {
  product: ProductType
}

function Product({ product }: ProductInterface) {

  const { menu } = menuData


  //TODO: Destructure the product object and extract required SEO values
  const { id, name, description, category, others, includes, gallery, features } = product

  //TODO: Format specific texts needed for SEO display
  const ProductName = convertToUpperCase(name)
  const ProductDescription = convertToUpperCase(category)

  // //TODO: Dynamically generate schema markup for product
  // const productSchema = productSchemaGenerator(productData);
  return (
    <>
      <Head>
        <title>
          {ProductName} | {ProductDescription} | Shop for
          {ProductName}
        </title>
        <meta name='description' content={description} />
        <meta property='og:title' content={description} key='ogtitle' />
        <meta property='og:description' content={description} key='ogdesc' />
      </Head>
      <main >
        <Feature includes={includes} feature={features} />
        <Gallery data={gallery} />
        <Others data = {others } />
        <Category data={menu} />
        <Banner />
      </main>
    </>
  )
}

export default Product

//* Getting product paths
export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await axios.get(apiEndpoint)

  const paths = getSlugs(data).map((slug) => {
    return {
      params: {
        slug: `${slug}`,
      },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context: any) => {
  const slug = context.params.slug
  const { data } = await axios.get(apiEndpoint)
  const product = getProductsBySlug(slug, data)
  return {
    props: {
      product,
    },
  }
}
