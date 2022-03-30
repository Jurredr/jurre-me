import Head from 'next/head'
import React from 'react'
import getMyCurrentAge from '../lib/Age'

const WebHead: React.FC = () => {
  const age = getMyCurrentAge()

  return (
    <Head>
      {/* Base configuration */}
      <title>Jurre de Ruiter | Home</title>
      <link rel="icon" href="/favicon.ico" />

      {/* SEO configuration */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
      <meta
        name="description"
        content={
          'Jurre de Ruiter is an ambitious ' +
          age +
          ' y/o developer, Computer Science student, and content creator from The Netherlands.'
        }
      />
      <meta
        name="keywords"
        content="Jurre de Ruiter, Jurre, portfolio, developer, dev, software, web, react, typescript, vue, full stack,
        html, css, javascript, university, student, 3D"
      />
      <meta name="subject" content="Portfolio" />
      <meta name="copyright" content="Jurre" />
      <meta name="language" content="EN" />
      <meta name="robots" content="index,follow" />
      <meta name="url" content="https://www.jurre.me" />
      <meta name="identifier-URL" content="https://www.jurre.me" />
      <meta name="theme-color" content="#FFC532" />
      <link rel="canonical" href="https://www.jurre.me" />

      {/* OpenGraph tags */}
      <meta property="og:title" content="Jurre de Ruiter | Jurre.me" />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content={
          'Jurre de Ruiter is an ambitious ' +
          age +
          ' y/o developer, Computer Science student, and content creator from The Netherlands.'
        }
      />
      <meta property="og:image" content="https://www.jurre.me/web-banner.png" />
      <meta
        property="og:image:url"
        content="https://www.jurre.me/web-banner.png"
      />
      <meta
        property="og:image:secure_url"
        content="https://www.jurre.me/web-banner.png"
      />
      <meta property="og:url" content="https://www.jurre.me" />
      <meta property="og:site_name" content="Jurre.me" />
      <meta property="og:email" content="contact@jurre.me" />

      {/* Twitter tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Jurre.me" />
      <meta
        name="twitter:description"
        content={
          'Jurre de Ruiter is an ambitious ' +
          age +
          ' y/o developer, Computer Science student, and content creator from The Netherlands.'
        }
      />
      <meta
        name="twitter:image"
        content="https://www.jurre.me/web-banner.png"
      />
      <meta name="twitter:site" content="@JurredeRuiter" />
      <meta name="twitter:creator" content="@JurredeRuiter" />
    </Head>
  )
}

export default WebHead
