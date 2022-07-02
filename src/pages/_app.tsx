import type { AppProps } from 'next/app';
import Navbar from '../components/Navbar';
import { ThemesProvider } from '../contexts/ThemeContext';
import '../styles/global.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemesProvider>
      <Navbar />
      <Component {...pageProps} />
    </ThemesProvider>
  );
}
