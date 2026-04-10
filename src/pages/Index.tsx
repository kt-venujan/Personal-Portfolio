import React, { lazy, Suspense } from 'react';
import { ParticleBackground } from '@/components/ParticleBackground';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';

// Lazy load non-critical sections
const AboutMe = lazy(() => import('@/components/AboutMe').then(m => ({ default: m.AboutMe })));
const Skills = lazy(() => import('@/components/Skills'));
const Projects = lazy(() => import('@/components/Projects').then(m => ({ default: m.Projects })));
const AchievementsContact = lazy(() => import('@/components/Contacts').then(m => ({ default: m.AchievementsContact })));
const Storyline = lazy(() => import('@/components/Storyline'));
const MyJourneyInFrames = lazy(() => import('@/components/MyJourneyInFrames').then(m => ({ default: m.MyJourneyInFrames })));
const GlassHoverGrid = lazy(() => import('@/components/GlassHoverGrid').then(m => ({ default: m.GlassHoverGrid })));
const Certificates = lazy(() => import('@/components/Certificates').then(m => ({ default: m.Certificates })));

// Loading placeholder
const SectionLoader = () => (
  <div className="h-96 flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);


const Index = () => {
  return (
    <div className="relative min-h-screen">
      <ParticleBackground />
      <Navigation />
      <Hero />
      <Suspense fallback={<SectionLoader />}>
        <AboutMe />
        <Certificates />
        <Storyline />
        <Skills />
        <Projects />
        <MyJourneyInFrames />
        <GlassHoverGrid />
        <AchievementsContact />
      </Suspense>
    </div>
  );
};

export default Index;
