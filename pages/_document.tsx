import Document, { Html, Head, Main, NextScript } from "next/document"

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/favicon-32x32.png'
          />
          <meta name='theme-color' content='#D87D4A' />
          <meta name='twitter:card' content='summary' key='twcard' />
          <meta name='twitter:creator' content='audiophile' key='twhandle' />
          <meta
            property='og:url'
            content='https://audiophilic.vercel.app/'
            key='ogurl'
          />
          <meta
            property='og:image'
            content='https://audiophilic.vercel.app/audiophile-og.png'
            key='ogimage'
          />
          <meta property='og:site_name' content='audiophile' key='ogsitename' />
          <meta property='og:image:width' content='1200' />
          <meta property='og:image:height' content='630' />
          <link rel='apple-touch-icon' href='/favicon-32x32.png' />
          <link rel='manifest' href='%PUBLIC_URL%/manifest.json' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
