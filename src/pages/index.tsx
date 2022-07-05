import { useEffect } from 'react';
import { useNavigation } from '../contexts/NavigationContext';

export default function Home() {
  const { handleWhichNavItemIsOpen } = useNavigation();
  useEffect(() => {
    handleWhichNavItemIsOpen('');
  });
  return (
    <section className="">
      <h1>Home</h1>
    </section>
  );
}
