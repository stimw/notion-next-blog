import Document, { Html, Head, Main, NextScript } from 'next/document';
import BLOG from '@/blog.config';
import CJK from '@/lib/cjk';
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang={BLOG.lang}>
        <Head>
          {['zh', 'ja', 'ko'].includes(
            BLOG.lang.slice(0, 2).toLocaleLowerCase()
          ) && (
            <>
              <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossOrigin="anonymous"
              />
              <link
                rel="preload"
                as="style"
                href={`https://fonts.googleapis.com/css2?family=Noto+${
                  BLOG.font === 'serif' ? 'Serif' : 'Sans'
                }+${CJK()}:wght@400;500;700&display=swap`}
              />
              <link
                rel="stylesheet"
                href={`https://fonts.googleapis.com/css2?family=Noto+${
                  BLOG.font === 'serif' ? 'Serif' : 'Sans'
                }+${CJK()}:wght@400;500;700&display=swap`}
              />
              <noscript>
                <link
                  rel="stylesheet"
                  href={`https://fonts.googleapis.com/css2?family=Noto+${
                    BLOG.font === 'serif' ? 'Serif' : 'Sans'
                  }+${CJK()}:wght@400;500;700&display=swap`}
                />
              </noscript>
            </>
          )}
          <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="192x192"
            href="/apple-touch-icon.png"
          ></link>
          <link
            rel="alternate"
            type="application/rss+xml"
            title="RSS 2.0"
            href="/feed"
          ></link>
        </Head>
        <body className="bg-day dark:bg-night">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
