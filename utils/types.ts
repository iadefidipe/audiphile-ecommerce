import { StaticImageData } from "next/image"

export interface MenuInterface {
  title: string
  link: string
  image: {
    src: StaticImageData
    alt: string
  }
  setToggle?:React.Dispatch<React.SetStateAction<boolean>>
  
}

//TODO: Type => Product Data Types
export interface ProductType {
  id: number;
  cartQuantity: number;
  shortName: string;
  cartIcon: string;
  slug: string;
  name: string;
  subTotal: number;
  image: ImagesTypes;
  category: string;
  categoryImage: ImagesTypes;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: IncludesTypes[];
  gallery: GalleryTypes;
  others: OthersType[];
}

export interface IncludesTypes {
  quantity: number;
  item: string;
}
export interface GalleryTypes {
  first: ImagesTypes;
  second: ImagesTypes;
  third: ImagesTypes;
}
export interface OthersType {
  slug: string;
  name: string;
  image: ImagesTypes;
}
export interface ImagesTypes {
  mobile: string;
  tablet: string;
  desktop: string;
}