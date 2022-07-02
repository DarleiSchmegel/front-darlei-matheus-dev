import { useTheme } from '../contexts/ThemeContext';

export default function Contact() {
  const { handleWhichNavItemIsOpen } = useTheme();
  handleWhichNavItemIsOpen('contact');
  return (
    <section>
      <h1>Contato</h1>
    </section>
  );
}
