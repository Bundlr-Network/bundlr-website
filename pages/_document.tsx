import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@700&display=swap"
          rel="stylesheet"
        />

        <meta property="og:url" content="https://bundlr.network" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Bundlr" />
        <meta
          property="og:description"
          content="Bundlr is the world’s data layer. We solve data integrity issues through permanent storage and proof of provenance."
        />
        <meta property="og:image" content="https://bundlr.network/new/assets/shared/open-graph.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="bundlr.network" />
        <meta property="twitter:url" content="https://bundlr.network" />
        <meta name="twitter:title" content="Bundlr | Home" />
        <meta
          name="twitter:description"
          content="Bundlr is the world’s data layer. We solve data integrity issues through permanent storage and proof of provenance."
        />
        <meta
          name="twitter:image"
          content="https://bundlr.network/new/assets/shared/open-graph.png"
        />

        {/* // favicon */}
        <link rel="icon" href="/favicon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
