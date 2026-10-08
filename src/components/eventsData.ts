// eventsData.ts
import { cloudinaryImage } from '@/lib/cloudinary';

const americanCorner = cloudinaryImage('journey/americanconrner', 'webp');
const aptitude = cloudinaryImage('journey/Aptitude', 'webp');
const bohar = cloudinaryImage('journey/bohar1', 'webp');
const ciccra = cloudinaryImage('journey/ciccra', 'webp');
const codeStorm = cloudinaryImage('journey/codesreom', 'webp');
const dreamin = cloudinaryImage('journey/Dreamin', 'webp');
const fixora = cloudinaryImage('journey/fixora', 'webp');
const leoProject1 = cloudinaryImage('journey/Leo club Project', 'webp');
const leoProject2 = cloudinaryImage('journey/Leo club Project 2', 'webp');
const leoProject3 = cloudinaryImage('journey/Leo club Project 3', 'webp');
const sfWeekly = cloudinaryImage('journey/sf weekly', 'webp');
const uoj1 = cloudinaryImage('journey/uoj1', 'webp');
const uoj2 = cloudinaryImage('journey/uoj2', 'webp');
const ygc = cloudinaryImage('journey/YGC', 'webp');
const cricket = cloudinaryImage('journey/cricket', 'webp');
const god = cloudinaryImage('journey/extra1', 'webp');
const viva = cloudinaryImage('journey/First viva', 'webp');
const rotract = cloudinaryImage('journey/Rotract', 'webp');

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
