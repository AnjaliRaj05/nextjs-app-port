
import HomeSection from './components/HomeSection';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import ServiceFile from './components/ServiceFile';
import ContactSection from './components/ContactSection';
import FooterSection from './components/FooterSection';
export default function Home() {
  return (
    <>
    <div>
      <Navbar />
      <HomeSection/>
      <AboutSection/>
      <ServiceFile/>
      <ContactSection/>
      <FooterSection/>
      
    </div>
    </>
  );
}
