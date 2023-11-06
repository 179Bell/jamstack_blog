import { client } from '../../libs/client';

type Blog = {
  id: string;
  title: string;
  content: string;
  eyecatch: string;
};

export default function Home(blogs: Blog[]) {
  return (
    <>
      <main></main>
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
