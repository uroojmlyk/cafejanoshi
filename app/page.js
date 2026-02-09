import Hero from "./components/Hero";
import AboutSection from './components/AboutSection'
import Menu from "./components/Menu";
import BookTableSection from "./components/BookTableSection";
import ContactSection from "./components/ContactSection";
import GallerySection from "./components/GallerySection";
// Navbar import mat karo - layout.js mein already hai

export default function Home() {
  return (
    <>
    <Hero />
    <AboutSection />
     <Menu/>
     <GallerySection/>
     <BookTableSection/>
     <ContactSection/>
    </>
  );
}