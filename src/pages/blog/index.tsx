import { GetStaticProps } from 'next';
import { useEffect } from 'react';
import BlogPageTemplate from '../../components/BlogPageTemplate';
import { useNavigation } from '../../contexts/NavigationContext';
import { GetAllPostsQuery, GetAllPostsDocument } from '../../graphql/generated';
import { initializeApollo } from '../../lib/apollo';

export default function Blog({ posts }) {
  const { handleWhichNavItemIsOpen } = useNavigation();

  useEffect(() => {
    handleWhichNavItemIsOpen('blog');
  });

  return <>{posts ? <BlogPageTemplate posts={posts} /> : <h1>Ainda não temos nada aqui</h1>}</>;
}
export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query<GetAllPostsQuery>({
    query: GetAllPostsDocument,
  });
  return {
    props: {
      posts: data.posts,
    },
  };
};
