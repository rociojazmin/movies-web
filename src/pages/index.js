import Navbar from '@/components/Navbar';
import HomeContainer from '@/containers/HomeContainer';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Carousel from '@/components/Carousel';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Carousel />
      <Footer />
    </>
  );
}
