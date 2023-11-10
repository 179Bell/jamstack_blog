// eslint-disable-next-line camelcase
import { Noto_Sans_JP } from 'next/font/google';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const notoJp = Noto_Sans_JP({
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-notojp',
  preload: false,
});

export default function Layout({ children }: any) {
  return (
    <>
      <Header />
      <main className={`${notoJp.variable}`}>{children}</main>
      <Footer />
    </>
  );
}
