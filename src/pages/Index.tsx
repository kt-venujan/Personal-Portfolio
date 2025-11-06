import { ParticleBackground } from '@/components/ParticleBackground';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { AboutMe } from '@/components/AboutMe';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { AchievementsContact } from '@/components/AchievementsContact';

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <ParticleBackground />
      <Navigation />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <AchievementsContact />
    </div>
  );
};

export default Index;
