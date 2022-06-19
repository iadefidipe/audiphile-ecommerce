import { ProductType } from "utils/types"
import { StaticImageData } from "next/image"

type HandleImageInterface = {
  (
    size: number | undefined,
    desktopImage: StaticImageData | string,
    tabletImage: StaticImageData | string,
    mobileImage: StaticImageData | string
  ): StaticImageData | string
}

// TODO => return image bases on screen size
export const handleImage: HandleImageInterface = (
  size,
  desktopImage,
  tabletImage,
  mobileImage
) => {
  if (size && size > 1024) {
    return desktopImage
  } else if (size && size > 640 && size <= 1024) {
    return tabletImage
  } else {
    return mobileImage
  }
}

//* HELPER: Function that removes duplicate values in array
const removeDuplicates = (data: string[]) => {
  return data.filter((value, index) => data.indexOf(value) === index)
}

//TODO: Filter all products by category
export const getProductsByCategory = (
  categoryName: string | string[],
  products: ProductType[]
) => {
  return products
    .filter((productItems) => productItems.category === categoryName)
    .reverse()
}

//TODO: Filter all categories from the product object
export const getCategory = (products: ProductType[]) => {
  return removeDuplicates(products.map((product) => product.category))
}

//TODO: Exract a product by slug
export const getProductsBySlug = (
  slug: string | string[],
  products: ProductType[]
) => {
  return products.filter((productItems) => productItems.slug === slug)
}

//TODO: Extract all slugs from the product object
export const getSlugs = (products) => {
  return removeDuplicates(products.map((product) => product.slug))
}

// Endpoint
export const apiEndpoint = "https://audiophilus-api.herokuapp.com/products"
