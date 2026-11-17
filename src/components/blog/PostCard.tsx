import Link from 'next/link';
import type { PostMeta } from '../../lib/post-format';
import { formatPostDate } from '../../lib/post-format';

export default function PostCard({ post }: { post: PostMeta }) {
  return (
    <article className="group border-b border-edge-light dark:border-edge-dark">
      <Link href={`/blog/${post.slug}`}>
        <a className="block py-8 transition-colors duration-200">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-ink-muted dark:text-ink-muted-dark">
            <time dateTime={post.date}>{formatPostDate(post.date)}</time>
            <span aria-hidden>·</span>
            <span>{post.readingTime} min de leitura</span>
          </div>

          <h2 className="mt-2 font-display text-xl font-bold tracking-tight text-ink-primary transition-colors duration-200 group-hover:text-accent-light dark:text-ink-light dark:group-hover:text-accent sm:text-2xl">
            {post.title}
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted dark:text-ink-muted-dark">
            {post.description}
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="border border-edge-light px-2 py-0.5 font-mono text-[11px] uppercase tracking-wide text-ink-muted dark:border-edge-dark dark:text-ink-muted-dark"
              >
                {tag}
              </span>
            ))}
          </div>
        </a>
      </Link>
    </article>
  );
}
