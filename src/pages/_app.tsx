import type { AppProps } from 'next/app';
import Layout from '../components/Layout';

import { NavigationProvider } from '../contexts/NavigationContext';
import { ThemeProvider } from 'next-themes';
import '../styles/global.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <NavigationProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NavigationProvider>
    </ThemeProvider>
  );
}
