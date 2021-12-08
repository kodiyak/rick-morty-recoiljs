import React from 'react'
import Head from 'next/head'

const DefaultHead: React.FC = () => {
  return (
    <>
      <Head>
        <title>Rick and Morty</title>
        <meta name="description" content="Rick and Morty Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  )
}

export default DefaultHead
