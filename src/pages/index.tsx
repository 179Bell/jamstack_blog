import { client } from '../../libs/client';
import { Blog } from '../../types/Blog';
import PostCard from '@/components/PostCard';
import Profile from '@/components/Profile';

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
        {}
        <div className="md:hidden">
          <Profile />
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const blog = await client.get({
    endpoint: 'blog',
    queries: {
      orders: 'createdAt',
    },
  });

  return {
    props: {
      blogs: blog.contents,
    },
  };
};
