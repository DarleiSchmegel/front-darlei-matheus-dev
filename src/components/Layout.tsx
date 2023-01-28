import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="my-auto  flex flex-col items-center">
        {children}
      </main>
      <Footer />
    </div>
  );
}
