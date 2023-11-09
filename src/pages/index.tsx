import { client } from '../../libs/client';

type Blog = {
  id: string;
  title: string;
  content: string;
  eyecatch: string;
  createdAt: string;
};

type Props = {
  blogs: Blog[];
};

export default function Home({ blogs }: Props) {
  return (
    <>
      <div className="container p-4">
        {blogs.map((blog) => (
          <div key={blog.id} className="border">
            <div>アイキャッチ</div>
            <span>{blog.createdAt}</span>
            <h2>{blog.title}</h2>
          </div>
        ))}
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
