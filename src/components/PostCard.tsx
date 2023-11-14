import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
        <Image
          className="hover:opacity-75 duration-500"
          src={blog.eyecatch.url}
          width={400}
          height={300}
          alt={blog.title}
        />
        <h2 className="text-xl">{blog.title}</h2>
        <span className="text-gray-400">
          <FontAwesomeIcon icon={faClock} />
          {formatDate(blog.createdAt)}
        </span>
      </Link>
    </>
  );
}
