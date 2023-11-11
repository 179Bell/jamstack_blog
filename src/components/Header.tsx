import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-sub h-12 md:h-16 flex justify-center items-center">
      <h1 className="font-bold text-xl md:text-2xl text-theme">
        <Link href="/">すずむらの積み上げblog</Link>
      </h1>
    </header>
  );
}
