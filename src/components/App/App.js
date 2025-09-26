import Contact from '../../Contact/Contact';
import About from '../About/About';
import Experience from '../Experience/Experience';
import Hero from '../Hero/Hero';
import Navbar from '../Navbar/Navbar';
import Projects from '../Projects/Projects';
import styles from './App.module.css'

export default function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

