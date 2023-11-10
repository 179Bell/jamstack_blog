import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ja" className="font-notojp">
      <Head />
      <body className="bg-theme">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
