import { useTheme } from './hooks/useTheme';
import { useActiveSection } from './hooks/useActiveSection';
import { navLinks } from './data/content';

// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollProgress from './components/layout/ScrollProgress';
import LoadingScreen from './components/layout/LoadingScreen';
import CursorGlow from './components/layout/CursorGlow';

// Sections
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Achievements from './components/sections/Achievements';
import Education from './components/sections/Education';
import CodingJourney from './components/sections/CodingJourney';
import Stats from './components/sections/Stats';
import Certifications from './components/sections/Certifications';
import Testimonials from './components/sections/Testimonials';
import Blog from './components/sections/Blog';
import Contact from './components/sections/Contact';

function App() {
  const { theme, toggleTheme } = useTheme();
  
  // Create an array of section IDs from navLinks without the '#'
  const sectionIds = navLinks.map(link => link.href.substring(1));
  const activeSection = useActiveSection(sectionIds);

  return (
    <>
      <LoadingScreen />
      <CursorGlow />
      <ScrollProgress />
      
      <Navbar theme={theme} toggleTheme={toggleTheme} activeSection={activeSection} />

      <main className="relative z-10 pt-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Education />
        <CodingJourney />
        <Stats />
        <Certifications />
        <Testimonials />
        <Blog />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
