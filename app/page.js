// import Hero from "./components/Hero";
// import AboutSection from './components/AboutSection'
// import Menu from "./components/Menu";
// import BookTableSection from "./components/BookTableSection";
// import ContactSection from "./components/ContactSection";
// import GallerySection from "./components/GallerySection";
// import Footer from "./components/Footer";
// // Navbar import mat karo - layout.js mein already hai

// export default function Home() {
//   return (
//     <>
//     <Hero />
//     <AboutSection />
//      <Menu/>
//      <GallerySection/>
//      <BookTableSection/>
//      <ContactSection/>
//      <Footer/>
//     </>
//   );
// }








import Hero            from './components/Hero';
import Experience      from './components/Experience';
import FeaturedMenu    from './components/FeaturedMenu';
import Ambiance        from './components/Ambiance';
import BrandStory      from './components/BrandStory';
import Testimonials    from './components/Testimonials';
import ReservationCTA  from './components/ReservationCTA';

export default function Home() {
  return (
    <>
      {/* 1 · Cinematic first impression */}
      <Hero />
      {/* 2 · Why Janoshi is different */}
      <Experience />
      {/* 3 · Taste — 8 signature items */}
      <FeaturedMenu />
      {/* 4 · Emotional — ambiance gallery */}
      <Ambiance />
      {/* 5 · Trust — brand story */}
      <BrandStory />
      {/* 6 · Social proof */}
      <Testimonials />
      {/* 7 · Conversion — book now */}
      <ReservationCTA />
      {/* 8 · Footer */}
    </>
  );
}