import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ja" className="font-notojp">
      <Head>
        <title>すずむらの積み上げblog</title>
      </Head>
      <body className="bg-theme">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
