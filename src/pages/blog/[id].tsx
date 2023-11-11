import Image from 'next/image';
import { client } from '../../../libs/client';
import { formatDate } from '../../../libs/formatDate';

type Blog = {
  blog: {
    id: string;
    title: string;
    content: string;
    eyecatch: {
      url: string;
    };
    createdAt: string;
    revisedAt: string;
  };
};

export default function Detail({ blog }: Blog) {
  return (
    <>
      <div className="container h-full md:mx-auto p-4">
        <h2>{blog.title}</h2>
        <div className="flex flex-row">
          <p className="mr-2">{formatDate(blog.createdAt)}</p>
          <p>{formatDate(blog.revisedAt)}</p>
        </div>
        <Image
          src={blog.eyecatch.url}
          alt={blog.title}
          width={400}
          height={300}
        />
        <p>{blog.content}</p>
      </div>
    </>
  );
}

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: 'blog' });

  const paths = data.contents.map((content: any) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: 'blog', contentId: id });
  return {
    props: {
      blog: data,
    },
  };
};
