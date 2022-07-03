import { useTheme } from '../contexts/ThemeContext';

export default function Home() {
  const { handleWhichNavItemIsOpen } = useTheme();
  handleWhichNavItemIsOpen('');
  return (
    <section className="">
      <h1>Home</h1>
    </section>
  );
}
