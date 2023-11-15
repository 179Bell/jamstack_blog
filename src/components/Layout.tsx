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
      <main className={`${notoJp.variable}`}>
        <div className="flex flex-row justify-between container h-full md:mx-auto p-4">
          <div className="w-full md:w-8/12">{children}</div>
        </div>
      </main>
      <Footer />
    </>
  );
}
