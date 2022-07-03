import type { AppProps } from 'next/app';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';

import { ThemesProvider } from '../contexts/ThemeContext';
import '../styles/global.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemesProvider>
      <Navbar />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Footer />
    </ThemesProvider>
  );
}
