import { useNavigation } from '../contexts/NavigationContext';

export default function Home() {
  const { handleWhichNavItemIsOpen } = useNavigation();
  handleWhichNavItemIsOpen('about');
  return (
    <section>
      <h1>Sobre</h1>
    </section>
  );
}
