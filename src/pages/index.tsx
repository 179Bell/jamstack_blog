import Image from 'next/image';
import Link from 'next/link';
import { client } from '../../libs/client';
import { formatDate } from '../../libs/formatDate';

type Blog = {
  id: string;
  title: string;
  content: string;
  eyecatch: {
    url: string;
  };
  createdAt: string;
};

type Props = {
  blogs: Blog[];
};

export default function Home({ blogs }: Props) {
  return (
    <>
      <div className="flex flex-row justify-between container h-full md:mx-auto p-4">
        <div className="w-full md:w-8/12">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
            {blogs.map((blog) => (
              <Link key={blog.id} href="#">
                <div className="transition-transform duration-300 ease-in-out transform hover:translate-y-[-2px] hover:bg-slate-100 border col-span-1">
                  <Image
                    src={blog.eyecatch.url}
                    width={200}
                    height={200}
                    alt={blog.title}
                  />
                  <span>{formatDate(blog.createdAt)}</span>
                  <h2>{blog.title}</h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const blog = await client.get({
    endpoint: 'blog',
  });

  return {
    props: {
      blogs: blog.contents,
    },
  };
};
