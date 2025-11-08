// eventsData.ts
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

// --- Type ---
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
export const allMyEvents: GridItemType[] = [
  { id: '1', title: 'Aptitude Test - NorthernUNI', date: '2024', description: 'Turning point of Life', tags: ['University', 'Skills'], imageUrl: aptitude, category: 'Education' },
  { id: '2', title: 'First VIVA', date: '2024', description: 'Turning point of Life', tags: ['University', 'Skills'], imageUrl: viva, category: 'Education' },
  { id: '3', title: 'Code Storm Competition', date: '2024', description: 'Competitive programming event.', tags: ['Competition', 'Programming'], imageUrl: codeStorm, category: 'Education' },
  { id: '4', title: 'Leo Club Community Projects', date: '2025', description: 'Community service initiative...', tags: ['Leadership', 'Community'], imageUrl: leoProject1, category: 'Extra-curricular' },
  { id: '5', title: 'Rotract Club of NorthernUNI', date: '2025', description: 'Community initiative...', tags: ['Leadership', 'Community'], imageUrl: rotract, category: 'Extra-curricular' },
  { id: '6', title: 'Final UOJ Coders v3.0', date: '2024', description: 'Final Coding competition', tags: ['Workshop', 'University'], imageUrl: uoj1, category: 'Education' },
  { id: '7', title: 'Leo Club Community Projects', date: '2025', description: 'Leo Club community initiative.', tags: ['Community', 'Service'], imageUrl: leoProject3, category: 'Extra-curricular' },
  { id: '8', title: 'American Corner', date: '2025', description: 'Spoken English Educational program...', tags: ['Education', 'Cultural'], imageUrl: americanCorner, category: 'Education' },
  { id: '9', title: 'YGC Workshop', date: '2025', description: 'UI/UX Workshop', tags: ['Hackathon', 'Coding'], imageUrl: ygc, category: 'Education' },
  { id: '10', title: 'Bohar Solutions', date: '2025', description: 'Vulnerability Assessment for CS module', tags: ['Community', 'Event'], imageUrl: bohar, category: 'Education' },
  { id: '11', title: 'CICCRA Certification', date: '2024', description: 'Course Completion Certificate.', tags: ['Conference', 'Tech'], imageUrl: ciccra, category: 'Education' },
  { id: '12', title: 'Salesforce - Dreamin Event', date: '2025', description: 'Innovation and entrepreneurship...', tags: ['Innovation', 'Startup'], imageUrl: dreamin, category: 'Extra-curricular' },
  { id: '13', title: 'Fixora Startup Project', date: '2025', description: 'Full stack Web app', tags: ['Workshop', 'Tech'], imageUrl: fixora, category: 'Education' },
  { id: '14', title: 'SF Weekly Sessions', date: '2025', description: 'Featured in SF Weekly publication.', tags: ['Media', 'Recognition'], imageUrl: sfWeekly, category: 'Extra-curricular' },
  { id: '15', title: 'UOJ Competition', date: '2024', description: 'Coding competition at UOJ.', tags: ['Competition', 'Coding'], imageUrl: uoj2, category: 'Education' },
  { id: '16', title: 'Leo Club Projects', date: '2025', description: 'Leo Club initiative.', tags: ['Leadership', 'Community'], imageUrl: leoProject2, category: 'Extra-curricular' },
  { id: '17', title: 'SNUPL Cricket Tournament', date: '2025', description: 'SLIIT NorthernUNI Tournament', tags: ['Leadership', 'Community'], imageUrl: cricket, category: 'Extra-curricular' },
  { id: '18', title: 'Sarswathy Pooja', date: '2025', description: 'Saraswathy Pooja Decorations.', tags: ['Leadership', 'Community'], imageUrl: god, category: 'Extra-curricular' },
];
