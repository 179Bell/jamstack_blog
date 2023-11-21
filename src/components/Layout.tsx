// eslint-disable-next-line camelcase
import { Noto_Sans_JP } from 'next/font/google';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Profile from '@/components/Profile';
import Sidebar from '@/components/Sidebar';

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
        <div className="container h-screen md:mx-auto p-4">
          <div className="flex flex-row justify-between ">
            <div className="w-full md:w-8/12">{children}</div>
            <Sidebar>
              <Profile />
            </Sidebar>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
