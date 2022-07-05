import React from 'react';
import BlogPostCard from './atomicDesign/molecules/BlogPostCard';
import { GetAllPostsQuery, Post } from '../graphql/generated';

const BlogPageTemplate: React.FC<GetAllPostsQuery> = ({ posts }) => {
  return (
    <section className="flex py-36 flex-col justify-center antialiased ">
      <div className="max-w-6xl mx-auto p-4 sm:px-6 h-full">
        {posts && posts.map((post) => <BlogPostCard post={post as Post} key={post.id} />)}
      </div>
    </section>
  );
};

export default BlogPageTemplate;
