import Navbar from '@/components/Navbar';
import HomeContainer from '@/containers/HomeContainer';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Carousel from '@/components/Carousel';
import CardsContainer from '@/containers/CardsContainer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CardsContainer />
      <Carousel />
      <Footer />
    </>
  );
}
