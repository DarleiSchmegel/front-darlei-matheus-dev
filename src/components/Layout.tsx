import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="my-auto self-center max-w-[1200px] flex flex-col items-center">
        {children}
      </main>
      <Footer />
    </div>
  );
}
