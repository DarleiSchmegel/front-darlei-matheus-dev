import { GetStaticProps } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'phosphor-react';
import SEO from '../../components/SEO';
import PostCard from '../../components/blog/PostCard';
import { getAllPosts } from '../../lib/posts';
import type { PostMeta } from '../../lib/post-format';

interface BlogProps {
  posts: PostMeta[];
}

export default function Blog({ posts }: BlogProps) {
  return (
    <section className="w-full">
      <SEO
        title="Blog — Darlei M. Schmegel"
        description="Notas sobre engenharia de software, arquitetura de agentes de IA, confiabilidade e processo — a partir do que construo em produção."
        path="/blog"
      />

      <div className="mx-auto max-w-6xl px-6 pb-20 pt-32 md:pt-40 lg:pb-28">
        <header className="max-w-3xl">
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
            <h1 className="font-display text-4xl font-bold tracking-tight text-ink-primary dark:text-ink-light sm:text-5xl">
              Blog
            </h1>
            <p className="font-mono text-xs tabular-nums text-ink-muted dark:text-ink-muted-dark">
              {posts.length} {posts.length === 1 ? 'post' : 'posts'}
            </p>
          </div>

          <p className="mt-4 text-base leading-relaxed text-ink-muted dark:text-ink-muted-dark">
            Notas sobre arquitetura de agentes de IA, engenharia de contexto, confiabilidade e
            processo — escritas a partir de decisões reais em produção.
          </p>
        </header>

        <div className="mt-12 border-t border-edge-light dark:border-edge-dark">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>

        <Link href="/">
          <a className="mt-10 inline-flex items-center gap-2 font-mono text-xs text-ink-muted transition-colors hover:text-accent-light dark:text-ink-muted-dark dark:hover:text-accent">
            <ArrowLeft size={14} weight="bold" aria-hidden />
            Voltar para o início
          </a>
        </Link>
      </div>
    </section>
  );
}

export const getStaticProps: GetStaticProps<BlogProps> = async () => ({
  props: {
    posts: getAllPosts(),
  },
});
