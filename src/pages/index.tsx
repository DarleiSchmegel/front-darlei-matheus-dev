import Hero from '../components/Hero';
import { PortifolioPreview } from '../components/PortifolioPreview';
import Technologies from '../components/Technologies';
import Timeline from '../components/Timeline';
import { useNavigation } from '../contexts/NavigationContext';

// import Hero from "../components/Hero"

export default function Home() {
  const { handleWhichNavItemIsOpen } = useNavigation();
  handleWhichNavItemIsOpen('');
  return (
    <>
      <Hero />
      <Technologies/>
      <PortifolioPreview/>
      <Timeline/>
    </>
  );
}
