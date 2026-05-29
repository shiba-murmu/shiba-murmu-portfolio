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
import Lenis from 'lenis';
import { useEffect } from 'react';

export default function App() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
        });

        // Make lenis globally accessible to the Navbar scroll handler
        window.lenis = lenis;

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <>
            {/* Your Page Sections */}
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <EducationAndExperience />
            <Contact />
            <Footer />
        </>
    );
}