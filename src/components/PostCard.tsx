import Image from 'next/image';
import Link from 'next/link';
import { formatDate } from '../../libs/formatDate';
import { Blog } from '../../types/Blog';

type Props = {
  blog: Blog;
};

export default function PostCard({ blog }: Props) {
  return (
    <>
      <Link href={`/blog/${blog.id}`} key={blog.id}>
        <div>
          <Image
            src={blog.eyecatch.url}
            width={300}
            height={200}
            alt={blog.title}
          />
          <span>{formatDate(blog.createdAt)}</span>
          <h2>{blog.title}</h2>
        </div>
      </Link>
    </>
  );
}
