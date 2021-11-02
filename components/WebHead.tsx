import Head from 'next/head'
import React from 'react'

const WebHead: React.FC = () => {
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
        content="Jurre de Ruiter is an ambitious 19 y/o developer, Computer Science student, and content creator from The Netherlands."
      />
      <meta
        name="keywords"
        content="Jurre de Ruiter, Jurre, portfolio, developer, software, web, react, typescript, vue, full stack,
        html, css, javascript, university, student, work, projects, 3D"
      />
      <meta name="subject" content="Portfolio" />
      <meta name="copyright" content="Jurre" />
      <meta name="language" content="EN" />
      <meta name="robots" content="index,follow" />
      <meta name="url" content="https://www.jurre.me" />
      <meta name="identifier-URL" content="https://www.jurre.me" />
      <link rel="canonical" href="https://www.jurre.me" />

      {/* OpenGraph tags */}
      <meta property="og:title" content="Jurre de Ruiter | Jurre.me" />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="Jurre de Ruiter is an ambitious 19 y/o developer, Computer Science student, and content creator from The Netherlands."
      />
      <meta property="og:image" content="/web-banner.png" />
      <meta property="og:image:url" content="/web-banner.png" />
      <meta property="og:image:secure_url" content="/web-banner.png" />
      <meta property="og:url" content="https://www.jurre.me" />
      <meta property="og:site_name" content="Jurre.me" />
      <meta property="og:email" content="contact@jurre.me" />

      {/* Twitter tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Jurre.me" />
      <meta
        name="twitter:description"
        content="Jurre de Ruiter is an ambitious 19 y/o developer, Computer Science student, and content creator from The Netherlands."
      />
      <meta name="twitter:image" content="/web-banner.png" />
      <meta name="twitter:site" content="@JurredeRuiter" />
      <meta name="twitter:creator" content="@JurredeRuiter" />
    </Head>
  )
}

export default WebHead
