import { useEffect } from 'react';
import { useNavigation } from '../contexts/NavigationContext';

export default function Contact() {
  const { handleWhichNavItemIsOpen } = useNavigation();
  useEffect(() => {
    handleWhichNavItemIsOpen('contact');
  });
  return (
    <section>
      <h1>Contato</h1>
    </section>
  );
}
