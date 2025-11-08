import { ParticleBackground } from '@/components/ParticleBackground';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { AboutMe } from '@/components/AboutMe';
import Skills from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { AchievementsContact } from '@/components/Contacts';
import Storyline from '@/components/Storyline';
import { MyJourneyInFrames } from '@/components/MyJourneyInFrames';
import {GlassHoverGrid} from '@/components/GlassHoverGrid';
import { Certificates } from '@/components/Certificates';


const Index = () => {
  return (
    <div className="relative min-h-screen">
      <ParticleBackground />
      <Navigation />
      <Hero />
      <AboutMe />
      <Certificates />
      <Storyline />
      <Skills />
      <Projects />
      <MyJourneyInFrames />
      <GlassHoverGrid />
      <AchievementsContact />
    </div>
  );
};

export default Index;
