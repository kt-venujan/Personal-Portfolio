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

const journeyData: JourneyItem[] = [

  {

    id: 1,

    title: 'Week 1 - Professional Skills',

    description: 'Building foundational professional competencies for workplace success.',

    imageUrl: week1Img,

    detailedDescription: [

      'This foundational module laid the groundwork for professional excellence by cultivating habits and mindsets critical in modern workplaces. We explored how soft skills often outweigh technical abilities in determining long-term career success.',

      'This session introduces the fundamentals of professional skills essential for workplace success. We covered communication basics, workplace etiquette, and personal branding.',

      'What I Plan to Implement in the Future Plan to apply active listening techniques in daily communications and maintain consistent professional standards in all interactions.'

    ],

  },

  {

    id: 2,

    title: 'Week 2 - Employability Skills',

    description: 'Developing essential skills that enhance job readiness.',

    imageUrl: week2Img,

    detailedDescription: [

      'This week focused on translating potential into real-world readiness. Through case studies and group simulations, Enhanced understanding of core employability skills valued by modern employers. Learned practical strategies for developing adaptability in changing work environment.'


    ],

  },

  {

    id: 3,

    title: 'Week 3 - Value, Beliefs, Attitude & Character',

    description: 'Understanding the core principles that drive professional conduct.',

    imageUrl: week3Img,

    detailedDescription: [

      'This introspective module examined how personal ethics shape professional identity. We analyzed scenarios where values clash with organizational goals, and discussed strategies to uphold integrity without compromising collaboration.',

      'Key outcomes :  strengthened moral reasoning, deeper self-awareness of personal values, practice in ethical decision-making frameworks, and the ability to align personal purpose with professional roles. We also explored how accountability, humility, and consistency in behavior build long-term trust and credibility in any career.'

    ], 

  },

  {

    id: 4,

    title: 'Week 4 - CV Writing',

    description: 'Crafting a compelling CV that gets noticed by recruiters.',

    imageUrl: week4Img,

    detailedDescription: [

      'We transformed the CV from a chronological list into a strategic marketing tool. Through iterative drafting and peer feedback, we learned to highlight impact, not just responsibilities.',

      'Focused on creating compelling CVs through structure, content optimization, and tailoring for specific job roles.',

      'Learned to present experiences effectively and optimize CVs for applicant tracking systems.'

    ],

  },

  {

    id: 5,

    title: 'Week 5 - Interview Manners',

    description: 'Practical interview preparation.',

    imageUrl: week5Img,

    detailedDescription: [

      'Interview success hinges on more than just answers, it’s about presence, preparation, and perception. We dissected the entire interview lifecycle, from researching company culture to sending a thoughtful follow-up.',

      'Practical interview preparation through mock sessions. We practiced common interview questions and received feedback on performance.',

      'Common Interview Questions, Behavioral Interview Techniques, Body Language and Presentation, Handling Difficult Questions'
    ],

  },

  {

    id: 6,

    title: 'Week 6 - Portfolio',

    description: 'Building a personal portfolio to showcase skills and projects.',

    imageUrl: week6Img,

    detailedDescription: [

      'This hands-on week guided us in creating a living, digital showcase that communicates, Focused on creating and maintaining digital portfolios to showcase achievements',

      'Portfolio Content Selection, Digital Portfolio Platforms, Visual Design Principles, Content Organization Strategies, Portfolio Maintenance'

    ],

  },

  {

    id: 7,

    title: 'Week 7 - Meeting and Speaking Skills',

    description: 'Enhancing public speaking and effective meeting participation.',

    imageUrl: week7Img,

    detailedDescription: [

      'Whether presenting to executives or contributing in a team huddle, clear communication drives results. We tackled anxiety through practice and structure, turning nervous energy into confident delivery.',

      'Skills mastered: designing audience-centered presentations, sing vocal variety and pacing for emphasis, managing Q&A sessions gracefully, preparing concise meeting agendas, facilitating inclusive discussions, and taking effective meeting notes with clear action items. These tools ensure your voice adds value in any professional setting.'

    ],

  },

  {

    id: 8,

    title: 'Week 8 - Email Writing Etiquettes',

    description: 'Mastering professional email communication.',

    imageUrl: week8Img,

    detailedDescription: [

      'In a world of digital overload, a well-crafted email cuts through noise and builds trust. We learned to write emails that are clear, respectful, and action oriented saving time for everyone involved.',

      'Practiced - Email Structure and Formatting, Tone and Professionalism, Subject Line Best Practices, Response Timing and Etiquette, Cross Cultural Email Communication'

    ],

  },

  {

    id: 9,

    title: 'Week 9 - Proposal Writing',

    description: 'Learning to write persuasive proposals for projects or ideas.',

    imageUrl: week9Img,

    detailedDescription: [

      'This module taught us to write proposals that convince stakeholders by balancing logic, feasibility, and vision.',

      'We gained proficiency in defining clear problem statements, designing viable solutions with scope and constraints, estimating resources and timelines realistically, justifying ROI or impact, and using persuasive language without hype. Whether pitching a side project or a business initiative, this skill empowers you to lead change.'

    ],

  },

  {
  id: 10,

  title: 'Week 10 - Team and Leadership',
  description: 'Exploring dynamics of teamwork and fundamentals of leadership.',

  imageUrl: week10Img,

  detailedDescription: [

    'Leadership isn’t about titles, it’s about influence, responsibility, and collaboration. During this session, we organized a fun and engaging role-play activity as a general meeting of the "Vettarak Club", where everyone took on different roles to simulate a real club environment.',
    'The experience helped us understand how real meetings are conducted, how teamwork functions in structured groups, and how leadership naturally emerges through coordination, communication, and shared purpose. It clearly showed how leaders guide, motivate, and support others while maintaining group harmony.'
  ],
},


  {
  id: 11,

  title: 'Week 11 - Emotional Intelligence',

  description: 'Developing self-awareness and empathy in a professional context.',

  imageUrl: week11Img,

  detailedDescription: [
    'High-performing professionals don’t just know their field, they understand people. This session emphasized Emotional Intelligence (EQ) as a vital skill for managing relationships and decision-making effectively.',
    'We divided into groups, and my friend "Kavishan" and I created a real-life scenario where we acted out two scenes, first as friends, and then as a "manager and employee". The situation explored how I introduced a new idea that the manager initially rejected, testing how emotional intelligence guided my reactions and communication.',
    'Through this activity, we learned how empathy, emotional control, and active listening help resolve conflict and maintain professionalism even in challenging situations.'
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
          Journey - Professional Skills Module
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
        {journeyData.map((item) => (
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