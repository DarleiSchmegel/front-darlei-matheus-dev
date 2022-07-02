import { useTheme } from '../../contexts/ThemeContext';

export default function Blog() {
  const { handleWhichNavItemIsOpen } = useTheme();
  handleWhichNavItemIsOpen('blog');
  return (
    <section>
      <h1>blog</h1>
    </section>
  );
}
