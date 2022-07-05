import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Post } from '../../../graphql/generated';
import { graphCMSImageLoader } from '../../../utils/imageLoader';

interface PostProps {
  post: Post;
}
const BlogPostCard: React.FC<PostProps> = ({ post }) => {
  const availableDateFormatted = format(new Date(post.date), "dd' de 'MMMM', 'Y'", {
    locale: ptBR,
  });
  return (
    <article className="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center mb-[90px]">
      <Link href={`/blog/${post.slug}`} as={`/blog/${post.slug}`}>
        <a className="relative block group" href={post.slug}>
          <div
            className="absolute inset-0 bg-gray-800 hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none"
            aria-hidden="true"
          ></div>
          <figure className="relative h-0 pb-[56.25%] md:pb-[75%] lg:pb-[56.25%] overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
            <Image
              loader={graphCMSImageLoader}
              quality={75}
              src={post.coverImage.url}
              layout="fill"
            />
          </figure>
        </a>
      </Link>
      <div>
        <header>
          <div className="mb-3">
            <ul className="flex flex-wrap text-xs font-medium -m-1">
              {post.tags.map((tag) => (
                <li className="m-1" key={tag}>
                  <a
                    className="inline-flex text-center text-gray-50 py-1 px-3 rounded-full bg-green-300 hover:bg-purple-700 transition duration-150 ease-in-out"
                    href="#0"
                  >
                    {tag}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <h3 className="text-2xl lg:text-3xl font-bold leading-tight mb-2">
            <Link href={`/blog/${post.slug}`} as={`/blog/${post.slug}`}>
              <a className="hover:text-gray-600 dark:hover:text-green-300 ease-in-out">
                {post.title}
              </a>
            </Link>
          </h3>
        </header>
        <p className="text-lg text-gray-500 flex-grow dark:text-gray-200">{post.excerpt}</p>
        <footer className="flex items-center mt-4">
          <a href="#0">
            <div className="flex items-center mr-4 border-solid border-2 rounded-full  border-green-300">
              <Image
                className="rounded-full"
                loader={graphCMSImageLoader}
                src={post.author.picture.url}
                width="50"
                height="50"
                objectFit="cover"
                alt="Author 04"
              />
            </div>
          </a>
          <div>
            <a
              className="font-medium text-gray-800 dark:text-gray-200 dark:hover:text-green-300 hover:text-gray-500 transition duration-150 ease-in-out"
              href="#0"
            >
              {post.author.name}
            </a>
            <span className="mx-2 text-gray-700 dark:text-gray-300"> • </span>
            <span className="text-gray-500 dark:text-gray-300">{availableDateFormatted}</span>
          </div>
        </footer>
      </div>
    </article>
  );
};

export default BlogPostCard;
