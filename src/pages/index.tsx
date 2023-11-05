import { client } from '../../libs/client';

export default function Home({ data }) {
  console.log(data);
  return <main></main>;
}

export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: 'blog',
  });

  return {
    props: {
      data,
    },
  };
};
