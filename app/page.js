import Hero          from './components/Hero';
import Experience    from './components/Experience';
import FeaturedMenu  from './components/FeaturedMenu';
import Ambiance      from './components/Ambiance';
import BrandStory    from './components/BrandStory';
import Testimonials  from './components/Testimonials';
import Reservation   from './components/Reservation';

export default function Home() {
  return (
    <>
      <Hero />
      <Experience />
      <FeaturedMenu />
      <Ambiance />
      <BrandStory />
      <Testimonials />
      <Reservation />
    </>
  );
}