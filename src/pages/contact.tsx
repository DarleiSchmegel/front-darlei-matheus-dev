import { useNavigation } from '../contexts/NavigationContext';

export default function Contact() {
  const { handleWhichNavItemIsOpen } = useNavigation();
  handleWhichNavItemIsOpen('contact');
  return (
    <section>
      <h1>Contato</h1>
    </section>
  );
}
