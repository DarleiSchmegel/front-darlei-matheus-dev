import { useNavigation } from '../contexts/NavigationContext';

export default function Home() {
  const { handleWhichNavItemIsOpen } = useNavigation();
  handleWhichNavItemIsOpen('');
  return (
    <section className="">
      <h1>Home</h1>
    </section>
  );
}
