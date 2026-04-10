import React, { useState } from 'react'; // We don't need useRef anymore!
import { X } from 'lucide-react'; // We don't need the arrows; Swiper provides them

// --- 1. Import Swiper React components ---
import { Swiper, SwiperSlide } from 'swiper/react';

// --- 2. Import Swiper core and required modules ---
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

// --- 3. Import Swiper styles ---
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// --- (All your image imports are the same) ---
import week1Img from '../assets/sessions/week1.webp';
import week2Img from '../assets/sessions/week2.webp';
import week3Img from '../assets/sessions/week3.webp';
import week4Img from '../assets/sessions/week4.webp';
import week5Img from '../assets/sessions/week5.webp';
import week6Img from '../assets/sessions/week6.webp';
import week7Img from '../assets/sessions/week7.webp';


// --- (Your types and data are exactly the same) ---
type JourneyItem = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  detailedDescription: string[];
};



// --- 2. Mock Data for the Carousel (UPDATED) ---

// I've added 'detailedDescription' to every item

// Don't forget to import your images at the top! 
// import week1Img from './assets/week1.jpg'; (etc...)

export const sessionData = [
  {
    id: 1,
    title: 'Intro to Employability Skills',
    description: 'The foundation: Why soft skills matter for your career.',
    imageUrl: week1Img, // Make sure you have this variable imported
    detailedDescription: [
      'Resource Person: Ms. Vishaliney Pirathap (Lecturer, Northern Uni).',
      'Topic: Introduction to Employability Skills Development (ESD).',
      'Learned that soft skills + technical knowledge = The "Magic Combo" ✨.',
      'Key takeaway: Self-reflection is crucial to identify where we need to improve.'
    ],
  },
  {
    
    id: 2,
    title: 'Company & Business Law',
    description: 'The "Startup Survival Kit": Contracts, IP, and Legal Structures.',
    imageUrl: week2Img, 
    detailedDescription: [
      'Resource Person: Ms. Vaishnavy Shanmuganathan (Attorney-at-Law).',
      'Topic: Company Law & Business Law.',
      'Core Lesson: Understanding business structures (Sole proprietorship vs. Corporation).',
      'Key Insight: Intellectual Property (IP) rights are the "shield" for your ideas 🛡️.',
      'Takeaway: Contracts and compliance are not optional—they are essential for success.',
      'Future Plan: deepening legal literacy to protect future business endeavors.'
    ],
  },
  {
    id: 3,
    title: 'Selecting a Career Path',
    description: 'The roadmap from "Just Curious" to "Hired Developer".',
    imageUrl: week3Img,
    detailedDescription: [
      'Resource Person: Mr. Gajarthan Thevarajah (CEO, Bohar Solutions).',
      'The Golden Rule: "Start messy!" Don\'t wait for perfection—build with what you know.',
      'Tech Stack: Git, HTML/CSS/JS, React, and UI/UX with Figma 🎨.',
      'Mistakes to Avoid: Focusing only on theory and being too shy to share work publicly.',
      'Action Plan: Build a personal site, push 10 commits to GitHub, and post weekly on LinkedIn.',
      'Core Lesson: Resilience + Curiosity > Talent.'
    ],

  },
  {

    id: 4,
    title: 'Non-IT Career Opportunities',
    description: 'Expanding horizons: Entrepreneurship & Public Speaking.',
    imageUrl: week4Img,
    detailedDescription: [
      'Resource Person: Ms. Sarmila Sivaraja (CEO, 2SF Labs & Google WTM Ambassador).',
      'Topic: Achieving your dream job & exploring Non-IT avenues.',
      'The Toolkit: Toastmasters for speaking 🎤, Clubhouse for networking 🤝, and Coursera for skills.',
      'Mindset Shift: Read "Rich Dad, Poor Dad" and prioritize knowledge sharing.',
      'Core Lesson: Your tech skills can build businesses in non-tech fields (Entrepreneurship).',
      'Action Plan: Join Toastmasters to fix communication gaps and explore startup ideas.'
    ],
  },
  {
  
    id: 5,
    title: 'HR Expectations & Industry Attitudes',
    description: 'Cracking the HR Code: Resumes, Interviews, & Corporate Culture.',
    imageUrl: week5Img,
    detailedDescription: [
      'Resource Person: Mr. Mahinthan.',
      'The Golden Quote: "HR is not a job, it is a practice." Treat people with respect 🤝.',
      'Key Concept: Equity vs. Equality — Understanding that "Fairness" > "Sameness".',
      'The Hiring Trinity: Tech Skills + Adaptability + English Proficiency = Job Offer ✅.',
      'Interview Hacks: Punctuality, polished resumes, and understanding "Cultural Fit" are non-negotiable.',
      'Corporate Survival: Navigating employment contracts, labor laws, and company policies.',
      'Action Plan: Professionalize LinkedIn profile and master the art of writing Project Proposals.'
    ],
  },
  {
    id: 6,
    title: 'Managing Stress & Work-Life Balance',
    description: 'Mastering the art of staying cool under pressure.',
    imageUrl: week6Img, 
    detailedDescription: [
      'Resource Person: Mr. Kuga.',
      'Topic: Managing Stress and Balancing Work-Life.',
      'Key Takeaway: Mental health is the secret weapon for professional success 🧠.',
      'Techniques: Mindfulness, taking breaks, and setting boundaries to avoid burnout.',
      'Approach: A humorous and relatable session that made heavy topics easy to digest.',
      'Future Goal: Using time management tools to work smarter, not harder.'
    ],
  },
  {
    id: 7,
    title: 'UI/UX & Data Science Trends',
    description: 'Modern tech roles and what the industry demands.',
    imageUrl: week7Img,
    detailedDescription: [
      'Resource Person: Mr. Ravichelvan Kanagasabapathy (Tech Lead, HCLTech).',
      'Topic: Job Roles – UI/UX and Data Science.',
      'Date: 14th August 2025.',
      'Explored the high-demand fields of User Experience and Data Science in today’s market.'
    ],
  },
];


// --- 4. The NEW Carousel Component ---
export const MyJourneyInFrames: React.FC = () => {
  // This state is all we need! All the 'currentIndex' and 'ref' logic is gone.
  const [selectedItem, setSelectedItem] = useState<JourneyItem | null>(null);

  return (
    // The main section is the same
    <section className="relative py-16 md:py-24 bg-gray-900/50 backdrop-blur-lg text-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Weekly Learning Journey - Employability Skills Development
        </h2>
      </div>

      {/* --- 5. THE NEW SWIPER CAROUSEL --- */}
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true} // Makes it an infinite loop
        slidesPerView={'auto'} // 'auto' is key for this effect
        coverflowEffect={{
          rotate: 50,     // Slide rotate in degrees
          stretch: 0,     // Stretch space between slides (in px)
          depth: 100,     // Depth offset of slides (in px)
          modifier: 1,    // Effect multiplier
          slideShadows: true, // Whether to add shadows
        }}
        pagination={{
          clickable: true, // We can click the dots
        }}
        navigation={true} // This adds the Prev/Next arrows
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="w-full py-12" // Add some padding for shadows
      >
        {sessionData.map((item) => (
          // Each slide is now a <SwiperSlide>
          <SwiperSlide 
            key={item.id} 
            // We control the slide size here.
            // On large screens, max 60%. On small screens, 80%.
            className="w-[80%] md:w-[60%] lg:w-[50%]"
          >
            {/* This is your EXACT slide content from before.
              No logic changes needed.
            */}
            <div
              className="w-full h-[60vh] md:h-[70vh] relative rounded-lg overflow-hidden shadow-2xl group"
            >
              {/* Background Image */}
              <img
                src={item.imageUrl}
                alt={item.title}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => (e.currentTarget.src = 'https://placehold.co/1200x800?text=Image+Error')}
              />
              
              {/* Faded Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

              {/* Text Content */}
              <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white max-w-2xl">
                <h3 className="text-3xl md:text-4xl font-bold mb-3">{item.title}</h3>
                <p className="text-lg md:text-xl text-white/90 mb-6">
                  {item.description}
                </p>
                <button 
                  className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
                  onClick={() => setSelectedItem(item)}
                >
                  View Details
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* --- 6. THE MODAL (Exactly the same as before) --- */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative w-11/12 max-w-2xl rounded-2xl border border-blue-400/30 bg-gray-900/60 shadow-2xl backdrop-blur-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 text-gray-300 hover:text-white transition-colors z-10"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            {/* Modal Content */}
            <div className="p-8 md:p-12 max-h-[80vh] overflow-y-auto">
              <h3 className="text-3xl font-bold text-white mb-6">
                {selectedItem.title}
              </h3>
              
              <div className="space-y-4 text-lg text-gray-200">
                {selectedItem.detailedDescription.map((paragraph, index) => (
                  <p 
                    key={index}
                    // This will render the <b> tags from your data
                    dangerouslySetInnerHTML={{ __html: paragraph }} 
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};