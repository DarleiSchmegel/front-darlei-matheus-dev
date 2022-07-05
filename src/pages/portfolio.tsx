import { useEffect } from 'react';
import { useNavigation } from '../contexts/NavigationContext';

export default function Portfolio() {
  const { handleWhichNavItemIsOpen } = useNavigation();
  useEffect(() => {
    handleWhichNavItemIsOpen('portfolio');
  });
  return (
    <section>
      <h1>Portifólio</h1>
    </section>
  );
}
