// * next.js imports *
import {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Preconnect to Adobe Fonts for better performance */}
        <link rel="preconnect" href="https://use.typekit.net" />
        <link rel="dns-prefetch" href="https://use.typekit.net" />

        {/* Adobe Fonts stylesheet */}
        <link rel="stylesheet" href="https://use.typekit.net/avd7xdh.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
