import { useNavigation } from '../contexts/NavigationContext';

export default function Portfolio() {
  const { handleWhichNavItemIsOpen } = useNavigation();
  handleWhichNavItemIsOpen('portfolio');
  return (
    <section>
      <h1>Portifólio</h1>
    </section>
  );
}
