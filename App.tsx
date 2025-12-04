import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Instructor } from './components/Instructor';
import { CourseContent } from './components/CourseContent';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-dark">
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <main className="flex flex-col items-center">
            <Hero />
            <Features />
            <Instructor />
            <CourseContent />
            <Pricing />
            <FAQ />
            <ContactForm />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;