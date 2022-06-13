import { StaticImageData } from "next/image"

export interface MenuInterface {
  title: string
  link: string
  active: boolean
  cta: string
  image: {
    src: StaticImageData
    alt: string
  }
}
