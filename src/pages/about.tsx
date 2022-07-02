import { useTheme } from '../contexts/ThemeContext';

export default function Home() {
  const { handleWhichNavItemIsOpen } = useTheme();
  handleWhichNavItemIsOpen('about');
  return (
    <section>
      <h1>Sobre</h1>
    </section>
  );
}
