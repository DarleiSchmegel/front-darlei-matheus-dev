import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { estimateReadingTime, type PostMeta } from './post-format';

export type { PostMeta } from './post-format';

const POSTS_DIRECTORY = path.join(process.cwd(), 'src/content/posts');

export interface Post extends PostMeta {
  content: string;
}

interface PostFrontmatter {
  title?: string;
  description?: string;
  date?: string;
  tags?: string[];
}

interface AdjacentPosts {
  previous: PostMeta | null;
  next: PostMeta | null;
}

function parsePostDate(date: string): Date {
  const [year, month, day] = date.split('-').map(Number);
  return new Date(year, month - 1, day);
}

function readPostFile(fileName: string): Post {
  const slug = fileName.replace(/\.mdx$/, '');
  const source = fs.readFileSync(path.join(POSTS_DIRECTORY, fileName), 'utf8');
  const { data, content } = matter(source);
  const frontmatter = data as PostFrontmatter;

  if (!frontmatter.title || !frontmatter.description || !frontmatter.date) {
    throw new Error(
      `Post "${fileName}" is missing required frontmatter: title, description and date are mandatory.`,
    );
  }

  return {
    slug,
    title: frontmatter.title,
    description: frontmatter.description,
    date: frontmatter.date,
    tags: frontmatter.tags ?? [],
    readingTime: estimateReadingTime(content),
    content,
  };
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(POSTS_DIRECTORY)) {
    return [];
  }

  return fs
    .readdirSync(POSTS_DIRECTORY)
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const post = readPostFile(fileName);
      return {
        slug: post.slug,
        title: post.title,
        description: post.description,
        date: post.date,
        tags: post.tags,
        readingTime: post.readingTime,
      };
    })
    .sort((a, b) => parsePostDate(b.date).getTime() - parsePostDate(a.date).getTime());
}

export function getPostBySlug(slug: string): Post | null {
  const fileName = `${slug}.mdx`;

  if (!fs.existsSync(path.join(POSTS_DIRECTORY, fileName))) {
    return null;
  }

  return readPostFile(fileName);
}

export function getAdjacentPosts(slug: string): AdjacentPosts {
  const posts = getAllPosts();
  const index = posts.findIndex((post) => post.slug === slug);

  if (index === -1) {
    return { previous: null, next: null };
  }

  return {
    previous: posts[index + 1] ?? null,
    next: posts[index - 1] ?? null,
  };
}
