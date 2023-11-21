import { faGithub, faSquareXTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import Icon from '../../public/icon.png';

export default function Profile() {
  const githubUrl = 'https://github.com/179Bell';
  const twitterUrl = 'https://twitter.com/179Bell';

  return (
    <aside className="bg-white">
      <div className="flex flex-col items-center px-6 py-3 md:p-6">
        <Image
          className="border rounded-full"
          src={Icon}
          alt={'icon'}
          width={200}
          height={200}
        />
        <p className="text-xl py-2">すずむら</p>
        <p className="text-gray-400 pb-2">バックエンドエンジニア</p>
        <p>
          海上自衛官からWebエンジニアに今年の1月に転職した1996年生まれです。
          <br />
          現在は都内の自社開発企業でPHP/Laravelエンジニアとして働いています。
          最近自分の中でアツい技術はAWSです。
          <br />
          日々の学びについて発信していきたいと思いブログをはじめました。
        </p>
        <div className="flex-row py-2">
          <Link
            href={githubUrl}
            rel="noopener noreferrer"
            target="_blank"
            className="px-1"
          >
            <FontAwesomeIcon className="text-gray-400" icon={faGithub} />
          </Link>
          <Link
            href={twitterUrl}
            rel="noopener noreferrer"
            target="_blank"
            className="px-1"
          >
            <FontAwesomeIcon
              className="text-gray-400"
              icon={faSquareXTwitter}
            />
          </Link>
        </div>
      </div>
    </aside>
  );
}
