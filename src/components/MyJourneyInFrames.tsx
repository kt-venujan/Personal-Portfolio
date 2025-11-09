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

      'Key skills gained: **Active listening**, **clear verbal and written communication**, **time management using the Pomodoro Technique**, **task prioritization with Eisenhower Matrix**, and understanding **professional boundaries and workplace etiquette**. These competencies form the bedrock of reliability, productivity, and collaborative effectiveness in any team setting.'

    ],

  },

  {

    id: 2,

    title: 'Week 2 - Employability Skills',

    description: 'Developing essential skills that enhance job readiness.',

    imageUrl: week2Img,

    detailedDescription: [

      'Moving beyond theory, this week focused on translating potential into real-world readiness. Through case studies and group simulations, we practiced solving ambiguous problems under constraints—mirroring actual workplace challenges.',

      'Skills developed include **structured problem-solving using root-cause analysis**, **critical thinking through assumption testing**, **collaborative decision-making**, and **adaptive thinking in dynamic environments**. We also learned how to articulate our thought process clearly—a vital skill during interviews and team discussions.'

    ],

  },

  {

    id: 3,

    title: 'Week 3 - Value, Beliefs, Attitude & Character',

    description: 'Understanding the core principles that drive professional conduct.',

    imageUrl: week3Img,

    detailedDescription: [

      'This introspective module examined how personal ethics shape professional identity. We analyzed scenarios where values clash with organizational goals, and discussed strategies to uphold integrity without compromising collaboration.',

      'Key outcomes: strengthened **moral reasoning**, deeper **self-awareness of personal values**, practice in **ethical decision-making frameworks**, and the ability to **align personal purpose with professional roles**. We also explored how **accountability**, **humility**, and **consistency in behavior** build long-term trust and credibility in any career.'

    ],

  },

  {

    id: 4,

    title: 'Week 4 - CV Writing',

    description: 'Crafting a compelling CV that gets noticed by recruiters.',

    imageUrl: week4Img,

    detailedDescription: [

      'We transformed the CV from a chronological list into a strategic marketing tool. Through iterative drafting and peer feedback, we learned to highlight impact—not just responsibilities.',

      'Technical and transferable skills gained: **achievement-oriented writing using the STAR method**, **quantification of results (e.g., “Reduced processing time by 30%”)**, **keyword optimization for ATS (Applicant Tracking Systems)**, **tailoring content to job descriptions**, and **designing clean, scannable layouts**. By the end, each CV told a clear, compelling narrative of capability and growth.'

    ],

  },

  {

    id: 5,

    title: 'Week 5 - Interview Manners',

    description: 'Mastering interview etiquette to make a strong impression.',

    imageUrl: week5Img,

    detailedDescription: [

      'Interview success hinges on more than just answers—it’s about presence, preparation, and perception. We dissected the entire interview lifecycle: from researching company culture to sending a thoughtful follow-up.',

      'Skills practiced include: **answering behavioral questions using STAR**, **managing nerves through breathing and framing techniques**, **interpreting body language (both ours and the interviewer’s)**, **asking insightful questions that demonstrate engagement**, and **crafting a personal brand narrative** that connects past experiences to future potential.'

    ],

  },

  {

    id: 6,

    title: 'Week 6 - Portfolio',

    description: 'Building a personal portfolio to showcase skills and projects.',

    imageUrl: week6Img,

    detailedDescription: [

      'Your portfolio is your proof of competence. This hands-on week guided us in creating a living, digital showcase that communicates not just what we’ve done—but how we think and solve problems.',

      'Key deliverables and skills: **UX-aware web design using HTML/CSS/React**, **project storytelling with context-problem-solution-impact structure**, **visual documentation of code and process**, and **strategic selection of work that demonstrates range and depth**. We also learned how to maintain and evolve a portfolio as a career asset.'

    ],

  },

  {

    id: 7,

    title: 'Week 7 - Meeting and Speaking Skills',

    description: 'Enhancing public speaking and effective meeting participation.',

    imageUrl: week7Img,

    detailedDescription: [

      'Whether presenting to executives or contributing in a team huddle, clear communication drives results. We tackled anxiety through practice and structure, turning nervous energy into confident delivery.',

      'Skills mastered: **designing audience-centered presentations**, **using vocal variety and pacing for emphasis**, **managing Q&A sessions gracefully**, **preparing concise meeting agendas**, **facilitating inclusive discussions**, and **taking effective meeting notes with clear action items**. These tools ensure your voice adds value in any professional setting.'

    ],

  },

  {

    id: 8,

    title: 'Week 8 - Email Writing Etiquettes',

    description: 'Mastering professional email communication.',

    imageUrl: week8Img,

    detailedDescription: [

      'In a world of digital overload, a well-crafted email cuts through noise and builds trust. We learned to write emails that are clear, respectful, and action-oriented—saving time for everyone involved.',

      'Key competencies: **crafting purpose-driven subject lines**, **structuring messages with BLUF (Bottom Line Up Front)**, **adjusting tone for context (formal vs. internal)**, **managing email threads professionally**, **writing effective requests and follow-ups**, and **avoiding common pitfalls like overusing “Reply All” or vague language**. This skill directly impacts efficiency and professional reputation.'

    ],

  },

  {

    id: 9,

    title: 'Week 9 - Proposal Writing',

    description: 'Learning to write persuasive proposals for projects or ideas.',

    imageUrl: week9Img,

    detailedDescription: [

      'Ideas only create impact when others buy into them. This module taught us to write proposals that convince stakeholders by balancing logic, feasibility, and vision.',

      'We gained proficiency in: **defining clear problem statements**, **designing viable solutions with scope and constraints**, **estimating resources and timelines realistically**, **justifying ROI or impact**, and **using persuasive language without hype**. Whether pitching a side project or a business initiative, this skill empowers you to lead change.'

    ],

  },

  {

    id: 10,

    title: 'Week 10 - Team and Leadership',

    description: 'Exploring dynamics of teamwork and fundamentals of leadership.',

    imageUrl: week10Img,

    detailedDescription: [

      'Leadership isn’t about titles—it’s about influence, responsibility, and service. Through role-plays and team simulations, we experienced how different leadership approaches affect morale, innovation, and outcomes.',

      'Core skills developed: **identifying team roles using models like Belbin**, **giving and receiving constructive feedback**, **managing conflict through active listening and empathy**, **delegating effectively**, and **practicing situational leadership** (adapting style to context). We also emphasized **followership**—how to support leaders while maintaining critical thinking.'

    ],

  },

  {

    id: 11,

    title: 'Week 11 - Emotional Intelligence',

    description: 'Developing self-awareness and empathy in a professional context.',

    imageUrl: week11Img,

    detailedDescription: [

      'High-performing professionals don’t just know their field—they understand people. This module focused on Emotional Intelligence (EQ) as a multiplier of technical and cognitive skills.',

      'We built capabilities in: **recognizing and regulating our own emotions under pressure**, **reading social cues to navigate office dynamics**, **practicing empathetic communication**, **managing stress through mindfulness techniques**, and **building psychological safety in teams**. Research shows EQ predicts 58% of job performance—making this one of the most valuable skills in any career.'

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