import type { PostMeta } from '../../lib/post-format';
import { formatPostDate } from '../../lib/post-format';

export default function PostHeader({ post }: { post: PostMeta }) {
  return (
    <header className="border-b border-edge-light pb-8 dark:border-edge-dark">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-ink-muted dark:text-ink-muted-dark">
        <time dateTime={post.date}>{formatPostDate(post.date)}</time>
        <span aria-hidden>·</span>
        <span>{post.readingTime} min de leitura</span>
      </div>

      <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink-primary dark:text-ink-light sm:text-4xl lg:text-5xl">
        {post.title}
      </h1>

      <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted dark:text-ink-muted-dark">
        {post.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="border border-edge-light px-2 py-0.5 font-mono text-[11px] uppercase tracking-wide text-ink-muted dark:border-edge-dark dark:text-ink-muted-dark"
          >
            {tag}
          </span>
        ))}
      </div>
    </header>
  );
}
