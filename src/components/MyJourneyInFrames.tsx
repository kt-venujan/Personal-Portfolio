import React, { useState, useRef } from 'react';
// 1. We need the 'X' icon for the close button
import { ArrowLeft, ArrowRight, X } from 'lucide-react'; 

import week1Img from '../assets/sessions/week1.jpg';
import week2Img from '../assets/sessions/week2.jpg';
import week3Img from '../assets/sessions/attidude.jpeg';
import week4Img from '../assets/sessions/cv.jpeg';
import week5Img from '../assets/sessions/interview.jpg';
import week6Img from '../assets/sessions/week6.jpeg';
import week7Img from '../assets/sessions/week7.jpg';
import week8Img from '../assets/sessions/week8.jpg';
import week9Img from '../assets/sessions/proposal.jpeg';
import week11Img from '../assets/sessions/emotional.jpg';
import week10Img from '../assets/sessions/Team leader.jpg';

// --- 1. Define the type for each slide (UPDATED) ---
type JourneyItem = {
  id: number;
  title: string;
  description: string; // The short description for the slide
  imageUrl: string;
  detailedDescription: string[]; // NEW: An array of paragraphs for the modal
};

// --- 2. Mock Data for the Carousel (UPDATED) ---
// I've added 'detailedDescription' to every item
const journeyData: JourneyItem[] = [
  {
    id: 1,
    title: 'Week 1 - Professional Skills',
    description: 'Building foundational professional competencies for workplace success.',
    imageUrl: week1Img,
    detailedDescription: [
      'This module set the stage for our entire professional journey. We focused on core competencies that are essential in any workplace.',
      'Key topics included: effective communication, time management (using techniques like Pomodoro), and understanding corporate etiquette. It was all about building a solid foundation.'
    ],
  },
  {
    id: 2,
    title: 'Week 2 - Employability Skills',
    description: 'Developing essential skills that enhance job readiness.',
    imageUrl: week2Img,
    detailedDescription: [
      'This week was about making ourselves "job-ready". We moved from theory to practical application.',
      'We practiced problem-solving with real-world case studies, learned critical thinking frameworks, and honed our ability to work effectively in a team environment.'
    ],
  },
  {
    id: 3,
    title: 'Week 3 - Value, Beliefs, Attitude & Character',
    description: 'Understanding the core principles that drive professional conduct.',
    imageUrl: week3Img,
    detailedDescription: [
      'A deep-dive week into the "why" behind our actions. We explored how personal values and beliefs shape our professional attitude and character.',
      'Discussions on integrity, accountability, and building trust were central. This module helped us align our personal principles with our career goals.'
    ],
  },
  {
    id: 4,
    title: 'Week 4 - CV Writing',
    description: 'Crafting a compelling CV that gets noticed by recruiters.',
    imageUrl: week4Img,
    detailedDescription: [
      'This was a hands-on workshop. We learned that a CV is a marketing document, not just a history report.',
      'We mastered the art of using action verbs, quantifying our achievements (e.g., "Increased efficiency by 20%"), and tailoring our CVs for different job applications using the STAR method.'
    ],
  },
  {
    id: 5,
    title: 'Week 5 - Interview Manners',
    description: 'Mastering interview etiquette to make a strong impression.',
    imageUrl: week5Img,
    detailedDescription: [
      'First impressions matter! This module covered everything from the pre-interview research to the post-interview follow-up email.',
      'We conducted mock interviews, practiced non-verbal communication (body language, eye contact), and learned how to answer common (and tricky) interview questions with confidence.'
    ],
  },
    {
    id: 6,
    title: 'Week 6 - Portfolio',
    description: 'Building a personal portfolio to showcase skills and projects.',
    imageUrl: week6Img,
    detailedDescription: [
      'Your portfolio is your proof. We learned how to build a personal website (like the one you\'re on!) to showcase our projects.',
      'Key focus was on storytelling – how to present a project, explain the problem, the solution, and the technologies used. This is where we show, not just tell.'
    ],
  },
  // ... (I've added data for the rest below) ...
  {
    id: 7,
    title: 'Week 7 - Meeting and Speaking Skills',
    description: 'Enhancing public speaking and effective meeting participation.',
    imageUrl: week7Img,
    detailedDescription: [
      'This module tackled the fear of public speaking. We learned how to structure a presentation, engage an audience, and use visual aids effectively.',
      'We also covered meeting etiquette: how to prepare an agenda, contribute constructively, and ensure meetings are productive and not a waste of time.'
    ],
  },
  {
    id: 8,
    title: 'Week 8 - Email Writing Etiquettes',
    description: 'Mastering professional email communication.',
    imageUrl: week8Img,
    detailedDescription: [
      'An email can make or break a professional relationship. We learned the dos and don\'ts of email writing.',
      'This included crafting clear subject lines, maintaining a professional tone, understanding when to use "Reply All" (and when not to!), and structuring emails for clarity.'
    ],
  },
  {
    id: 9,
    title: 'Week 9 - Proposal Writing',
    description: 'Learning to write persuasive proposals for projects or ideas.',
    imageUrl: week9Img,
    detailedDescription: [
      'How do you get a "yes" for your idea? By writing a compelling proposal. We broke down the structure: The Problem, The Proposed Solution, The Budget/Resources, and The Timeline.',
      'This skill is crucial for freelancers, entrepreneurs, and anyone trying to drive change within a company.'
    ],
  },
  {
    id: 10,
    title: 'Week 10 - Team and Leadership',
    description: 'Exploring dynamics of teamwork and fundamentals of leadership.',
    imageUrl: week10Img,
    detailedDescription: [
      'This module explored different leadership styles (e.g., democratic, autocratic) and the qualities of an effective leader.',
      'We also focused on being a good team player: understanding team roles, resolving conflicts, and collaborating towards a common goal. Everyone can be a leader in their own role.'
    ],
  },
  {
    id: 11,
    title: 'Week 11 - Emotional Intelligence',
    description: 'Developing self-awareness and empathy in a professional context.',
    imageUrl: week11Img,
    detailedDescription: [
      'Often more important than IQ, Emotional Intelligence (EQ) is the key to managing relationships. We focused on the four pillars: self-awareness, self-management, social awareness, and relationship management.',
      'This helps in handling stress, giving/receiving feedback, and building strong, empathetic connections with colleagues.'
    ],
  },
];

// --- 3. The Carousel Component (UPDATED) ---
export const MyJourneyInFrames: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // 2. NEW STATE: To track which item is selected for the modal
  const [selectedItem, setSelectedItem] = useState<JourneyItem | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const totalSlides = journeyData.length;

  const scrollToSlide = (index: number) => {
    if (containerRef.current) {
      const scrollAmount = containerRef.current.offsetWidth * index;
      containerRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // --- 4. Navigation Handlers (No change here) ---
  const handleNext = () => {
    const newIndex = (currentIndex + 1) % totalSlides;
    setCurrentIndex(newIndex);
    scrollToSlide(newIndex);
  };

  const handlePrev = () => {
    const newIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    setCurrentIndex(newIndex);
    scrollToSlide(newIndex);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    scrollToSlide(index);
  };

  return (
    // We add 'relative' here so the 'fixed' modal can live inside it
    <section className="relative py-16 md:py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Journey - Professional Skills Module
        </h2>

        {/* --- 5. Carousel Container --- */}
        <div className="relative rounded-lg overflow-hidden shadow-2xl">
          
          {/* --- 6. Scrollable Track --- */}
          <div
            ref={containerRef}
            className="flex overflow-x-auto scroll-smooth scroll-snap-type-x-mandatory scrollbar-hide"
            onScroll={(e) => {
              const scrollLeft = e.currentTarget.scrollLeft;
              const slideWidth = e.currentTarget.offsetWidth;
              const newIndex = Math.round(scrollLeft / slideWidth);
              if (newIndex !== currentIndex) {
                setCurrentIndex(newIndex);
              }
            }}
          >
            {/* --- 7. Mapping Each Slide --- */}
            {journeyData.map((item) => (
              <div
                key={item.id}
                className="w-full flex-shrink-0 h-[60vh] md:h-[70vh] relative scroll-snap-align-start"
              >
                {/* Background Image */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
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
                  {/* 3. ONCLICK ADDED: This now sets the selected item, opening the modal */}
                  <button 
                    className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
                    onClick={() => setSelectedItem(item)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* --- 8. Navigation Buttons (Prev/Next) --- */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/70 transition-all z-10"
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
          </button>
          
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/70 transition-all z-10"
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
          </button>

          {/* --- 9. Navigation Dots --- */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {journeyData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'bg-white scale-125' : 'bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>

      {/* --- 10. THE NEW MODAL (GLASSMORPHISM STYLE) --- */}
      {selectedItem && (
        <div
          // This is the overlay. Clicking it will close the modal.
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedItem(null)}
        >
          <div
            // This is the modal content box. 
            // We use e.stopPropagation() to prevent clicks inside it from closing the modal.
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
            {/* We add an inner div for padding */}
            <div className="p-8 md:p-12">
              <h3 className="text-3xl font-bold text-white mb-6">
                {selectedItem.title}
              </h3>
              
              {/* We map the detailedDescription array into paragraphs */}
              <div className="space-y-4 text-lg text-gray-200">
                {selectedItem.detailedDescription.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Note: You'll need to add this 'animate-fade-in' to your tailwind.config.js
        for a smooth entry, but it works without it too!
        
        // In tailwind.config.js -> theme -> extend:
        keyframes: {
          'fade-in': {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
        },
        animation: {
          'fade-in': 'fade-in 0.3s ease-out',
        },
      */}
    </section>
  );
};