// Imports (React, motion, etc.)
import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { GridCard } from './GridCard';

// Image imports (exact filenames)
import americanCorner from '@/assets/journey/americanconrner.JPG?url';
import aptitude from '@/assets/journey/Aptitude.jpg';
import bohar from '@/assets/journey/bohar1.jpg';
import ciccra from '@/assets/journey/ciccra.jpg';
import codeStorm from '@/assets/journey/codesreom.jpg';
import dreamin from '@/assets/journey/Dreamin.jpg';
import fixora from '@/assets/journey/fixora.jpg';
import leoProject1 from '@/assets/journey/Leo club Project.jpg';
import leoProject2 from '@/assets/journey/Leo club Project 2.jpg';
import leoProject3 from '@/assets/journey/Leo club Project 3.jpg';
import sfWeekly from '@/assets/journey/sf weekly.jpg';
import uoj1 from '@/assets/journey/uoj1.jpg';
import uoj2 from '@/assets/journey/uoj2.jpg';
import ygc from '@/assets/journey/YGC.jpg';
import cricket from '@/assets/journey/cricket.jpg';
import god from '@/assets/journey/extra1.jpg';
import viva from '@/assets/journey/First viva.jpg';
import rotract from '@/assets/journey/Rotract.jpg';
import christmas from '@/assets/journey/Christmas.jpg';
// --- Type Definitions ---
export type GridItemType = {
  id: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  imageUrl: string;
  category: 'Education' | 'Extra-curricular';
};

// --- Events Data ---
const allMyEvents: GridItemType[] = [
  { id: '1', title: 'Aptitude Test - NorthernUNI', date: '2024', description: 'The Beginning of My Professional Path', tags: ['University', 'Skills'], imageUrl: aptitude, category: 'Education' },
  { id: '2', title: 'First VIVA', date: '2024', description: 'Where Confidence Began', tags: ['University', 'Skills'], imageUrl: viva, category: 'Education' },
  { id: '3', title: 'Code Storm Competition', date: '2024', description: 'Competitive programming event.', tags: ['Competition', 'Programming'], imageUrl: codeStorm, category: 'Education' },
  { id: '4', title: 'Leo Club Community Projects', date: '2025', description: 'Community service initiative...', tags: ['Leadership', 'Community'], imageUrl: leoProject1, category: 'Extra-curricular' },
  { id: '5', title: 'Rotract Club of NorthernUNI', date: '2025', description: 'Community initiative...', tags: ['Leadership', 'Community'], imageUrl: rotract, category: 'Extra-curricular' },
  { id: '6', title: 'Final UOJ Coders v3.0', date: '2024', description: 'Final Coding competition', tags: ['Competiton', 'University'], imageUrl: uoj1, category: 'Education' },
  { id: '7', title: 'Leo Club Community Projects', date: '2025', description: 'Leo Club community initiative.', tags: ['Community', 'Service'], imageUrl: leoProject3, category: 'Extra-curricular' },
  { id: '8', title: 'American Corner', date: '2025', description: 'Spoken English Educational program...', tags: ['Education', 'Spoken'], imageUrl: americanCorner, category: 'Education' },
  { id: '9', title: 'YGC Workshop', date: '2025', description: 'UI/UX Workshop', tags: ['Hackathon', 'Coding'], imageUrl: ygc, category: 'Education' },
  { id: '10', title: 'Bohar Solutions', date: '2025', description: 'Vulnerability Assessment for CS module', tags: ['Cybersecurity', 'Computer Security'], imageUrl: bohar, category: 'Education' },
  { id: '11', title: 'CICCRA Certification', date: '2024', description: 'Course Completion Certificate.', tags: ['Conference', 'Tech'], imageUrl: ciccra, category: 'Education' },
  { id: '12', title: 'Salesforce - Dreamin Event', date: '2025', description: 'Innovation and entrepreneurship...', tags: ['Innovation', 'Startup'], imageUrl: dreamin, category: 'Extra-curricular' },
  { id: '13', title: 'Fixora Startup Project', date: '2025', description: 'Full stack Web app', tags: ['Project', 'Startup'], imageUrl: fixora, category: 'Education' },
  { id: '14', title: 'SF Weekly Sessions', date: '2025', description: 'Salesforce ohana weekly meetups', tags: ['Salesforce', 'Recognition'], imageUrl: sfWeekly, category: 'Extra-curricular' },
  { id: '15', title: 'UOJ Competition', date: '2024', description: 'Coding competition at UOJ.', tags: ['Competition', 'Coding'], imageUrl: uoj2, category: 'Education' },
  { id: '16', title: 'Leo Club Projects', date: '2025', description: 'Leo Club initiative.', tags: ['Leadership', 'Community'], imageUrl: leoProject2, category: 'Extra-curricular' },
  { id: '17', title: 'SNUPL Cricket Tournament', date: '2025', description: 'SLIIT NorthernUNI Tournament', tags: ['Cricket', 'Sports'], imageUrl: cricket, category: 'Extra-curricular' },
  { id: '18', title: 'Sarswathy Pooja', date: '2025', description: 'Saraswathy Pooja Decorations.', tags: ['Leadership', 'Team work'], imageUrl: god, category: 'Extra-curricular' },
  { id: '19', title: 'Christmas', date: '2024', description: 'Christmas Decoration.', tags: ['Leadership', 'Team work'], imageUrl: christmas, category: 'Extra-curricular' },
];

const ITEMS_PER_LOAD = 8;
type Category = 'All' | 'Education' | 'Extra-curricular';
const TABS: Category[] = ['All', 'Education', 'Extra-curricular'];

// ------------------------------------------

export const GlassHoverGrid = () => {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_LOAD);
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filteredEvents = allMyEvents.filter(event => {
    if (activeCategory === 'All') return true;
    return event.category === activeCategory;
  });

  const itemsToShow = filteredEvents.slice(0, visibleCount);

  const handleTabClick = (category: Category) => {
    setActiveCategory(category);
    setVisibleCount(ITEMS_PER_LOAD);
  };

  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          My Journey: Past Events
        </h2>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {TABS.map((category) => (
            <button
              key={category}
              onClick={() => handleTabClick(category)}
              className={`px-5 py-2 font-medium rounded-lg transition-all text-sm
                ${activeCategory === category
                  ? 'bg-accent text-white shadow-lg shadow-accent/50'
                  : 'bg-secondary/70 text-muted-foreground hover:bg-secondary'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {itemsToShow.map((item) => (
            <div key={item.id}>
              <GridCard item={item} />
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < filteredEvents.length && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setVisibleCount((prev) => prev + ITEMS_PER_LOAD)}
              className="flex items-center gap-2 px-6 py-3 bg-accent text-white font-semibold rounded-lg shadow-lg shadow-accent/50 hover:bg-accent/80 transition-colors hover:scale-105 active:scale-95"
            >
              <Plus size={20} />
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};