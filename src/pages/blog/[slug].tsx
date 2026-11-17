import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { ArrowLeft, ArrowRight } from 'phosphor-react';
import SEO from '../../components/SEO';
import PostHeader from '../../components/blog/PostHeader';
import { mdxComponents } from '../../components/blog/mdxComponents';
import { getAllPosts, getAdjacentPosts, getPostBySlug } from '../../lib/posts';
import type { PostMeta } from '../../lib/post-format';

interface PostPageProps {
  post: PostMeta;
  source: MDXRemoteSerializeResult;
  previous: PostMeta | null;
  next: PostMeta | null;
}

const POST_BODY_CLASSES = [
  'post-body prose prose-base max-w-none dark:prose-invert',
  'prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight',
  'prose-headings:text-ink-primary dark:prose-headings:text-ink-light',
  'prose-p:text-ink-muted dark:prose-p:text-ink-muted-dark',
  'prose-li:text-ink-muted dark:prose-li:text-ink-muted-dark',
  'prose-strong:text-ink-primary dark:prose-strong:text-ink-light',
  'prose-a:text-accent-light dark:prose-a:text-accent prose-a:no-underline hover:prose-a:underline',
  'prose-blockquote:border-l-accent-light dark:prose-blockquote:border-l-accent',
  'prose-blockquote:text-ink-muted dark:prose-blockquote:text-ink-muted-dark',
  'prose-code:font-mono prose-code:font-normal',
  'prose-code:before:content-none prose-code:after:content-none',
  'prose-pre:rounded-none prose-pre:border prose-pre:border-edge-light dark:prose-pre:border-edge-dark',
  'prose-pre:bg-surface-raise prose-pre:text-ink-light',
  'prose-table:font-mono prose-table:text-xs',
  'prose-th:text-ink-primary dark:prose-th:text-ink-light',
  'prose-td:text-ink-muted dark:prose-td:text-ink-muted-dark',
  'prose-hr:border-edge-light dark:prose-hr:border-edge-dark',
].join(' ');

export default function PostPage({ post, source, previous, next }: PostPageProps) {
  return (
    <section className="w-full">
      <SEO
        title={`${post.title} — Darlei M. Schmegel`}
        description={post.description}
        path={`/blog/${post.slug}`}
        type="article"
        publishedTime={post.date}
        tags={post.tags}
      />

      <div className="mx-auto max-w-3xl px-6 pb-20 pt-32 md:pt-40 lg:pb-28">
        <Link href="/blog">
          <a className="inline-flex items-center gap-2 font-mono text-xs text-ink-muted transition-colors hover:text-accent-light dark:text-ink-muted-dark dark:hover:text-accent">
            <ArrowLeft size={14} weight="bold" aria-hidden />
            Voltar para o blog
          </a>
        </Link>

        <div className="mt-8">
          <PostHeader post={post} />
        </div>

        <article className={`mt-10 ${POST_BODY_CLASSES}`}>
          <MDXRemote {...source} components={mdxComponents} />
        </article>

        <nav
          aria-label="Navegação entre posts"
          className="mt-16 grid gap-4 border-t border-edge-light pt-8 dark:border-edge-dark sm:grid-cols-2"
        >
          {previous ? (
            <Link href={`/blog/${previous.slug}`}>
              <a className="group border border-edge-light p-4 transition-colors hover:border-accent-light dark:border-edge-dark dark:hover:border-accent">
                <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wide text-ink-muted dark:text-ink-muted-dark">
                  <ArrowLeft size={12} weight="bold" aria-hidden />
                  Anterior
                </span>
                <span className="mt-2 block font-display text-sm font-bold text-ink-primary transition-colors group-hover:text-accent-light dark:text-ink-light dark:group-hover:text-accent">
                  {previous.title}
                </span>
              </a>
            </Link>
          ) : (
            <span />
          )}

          {next ? (
            <Link href={`/blog/${next.slug}`}>
              <a className="group border border-edge-light p-4 text-right transition-colors hover:border-accent-light dark:border-edge-dark dark:hover:border-accent">
                <span className="flex items-center justify-end gap-2 font-mono text-[11px] uppercase tracking-wide text-ink-muted dark:text-ink-muted-dark">
                  Próximo
                  <ArrowRight size={12} weight="bold" aria-hidden />
                </span>
                <span className="mt-2 block font-display text-sm font-bold text-ink-primary transition-colors group-hover:text-accent-light dark:text-ink-light dark:group-hover:text-accent">
                  {next.title}
                </span>
              </a>
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </div>
    </section>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: getAllPosts().map((post) => ({ params: { slug: post.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<PostPageProps> = async ({ params }) => {
  const slug = String(params?.slug ?? '');
  const post = getPostBySlug(slug);

  if (!post) {
    return { notFound: true };
  }

  const { content, ...meta } = post;
  const source = await serialize(content);
  const { previous, next } = getAdjacentPosts(slug);

  return {
    props: {
      post: meta,
      source,
      previous,
      next,
    },
  };
};
