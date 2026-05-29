import React from 'react'
import useLenis from './hooks/useLenis'
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import EducationAndExperience from './components/Education';
function App() {
    useLenis();

    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <EducationAndExperience />
            <Contact />
            <Footer />
        </>

    )
}

export default App