import { useTheme } from '../contexts/ThemeContext';

export default function Portfolio() {
  const { handleWhichNavItemIsOpen } = useTheme();
  handleWhichNavItemIsOpen('portfolio');
  return (
    <section>
      <h1>Portifólio</h1>
    </section>
  );
}
