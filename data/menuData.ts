import audiophile from "public/assets/shared/desktop/logo.svg"
// import cart from "public/images/shared/icon-cart.svg";
import speakers from "public/assets/shared/desktop/image-category-thumbnail-speakers.png"

import headphones from "public/assets/shared/desktop/image-category-thumbnail-headphones.png"

import earphones from "public/assets/shared/desktop/image-category-thumbnail-earphones.png"


export const menuData = {
  logo: {
    image: audiophile,
    link: "/",
  },
  menu: [
    {
      title: "home",
      link: "/",
      image: {
        src: headphones,
        alt: "headphone",
      },
    },
    {
      title: "headphones",
      link: "/headphones",
      image: {
        src: headphones,
        alt: "headphone",
      },
    },
    {
      title: "speakers",
      link: "/speakers",
      image: {
        src: speakers,
        alt: "speaker",
      },
    },
    {
      title: "earphones",
      link: "/earphones",
      image: {
        src: earphones,
        alt: "earphones",
      },
    },
  ],
  footer: {
    information:
      "Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.",
    copyright: "Copyright 2021. All Rights Reserved",
  },
  
  socials: [
    {
      icon: "fab fa-facebook-square",
      label: "visit our facebook page",
      link: "https://facebook.com",
    },
    {
      icon: "fab fa-twitter-square",
      label: "follow our twitter page",
      link: "https://twitter.com",
    },
    {
      icon: "fab fa-instagram",
      label: "follow us on instagram",
      link: "https://instagram.com",
    },
  ],
};