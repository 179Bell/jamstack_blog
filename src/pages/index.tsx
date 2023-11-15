import { client } from '../../libs/client';
import { Blog } from '../../types/Blog';
import PostCard from '@/components/PostCard';

type Props = {
  blogs: Blog[];
};

export default function Home({ blogs }: Props) {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
        {blogs.map((blog) => (
          <PostCard key={blog.id} blog={blog} />
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
