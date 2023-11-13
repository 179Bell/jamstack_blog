import { client } from '../../libs/client';
import { Blog } from '../../types/Blog';
import PostCard from '@/components/PostCard';

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
              <PostCard key={blog.id} blog={blog} />
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
