import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import Layout from '../components/Layout';

import { NavigationProvider } from '../contexts/NavigationContext';
import { ThemeProvider } from 'next-themes';
import '../styles/global.css';
import { useApollo } from '../lib/apollo';

export default function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider attribute="class">
        <NavigationProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </NavigationProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
}
