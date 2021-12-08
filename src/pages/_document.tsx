import React from 'react'
import Document, { Html, Main, Head, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="pt">
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="/favicon-2.png" type="image/png" sizes="16x16" />
          <link rel="stylesheet" href="/css/app.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
