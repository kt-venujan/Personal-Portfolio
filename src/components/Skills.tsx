import React from "react";
import { motion, Variants } from "framer-motion"; // Import Variants type

const skills = [
  {
    name: "HTML",
    imgSrc: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    imgSrc: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
  },
  {
    name: "SASS",
    imgSrc: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg",
  },
  {
    name: "JAVASCRIPT",
    imgSrc: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
  },
  {
    name: "REACT JS",
    imgSrc: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
  },
  {
    name: "GITHUB",
    imgSrc: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
  },
  {
    name: "NODE JS",
    imgSrc: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "FIREBASE",
    imgSrc: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg",
  },
  {
    name: "MONGODB",
    imgSrc: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "DOCKERS",
    imgSrc: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
  },
];

// Animation variants for different elements
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const headingVariants: Variants = {
  hidden: { y: -50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" as const } },
};

const textVariants: Variants = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" as const, delay: 0.3 } },
};

const skillCardVariants: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 10,
    },
  },
  hover: {
    scale: 1.05,
    boxShadow: "0px 0px 20px rgba(78, 178, 255, 0.6)", // Blue shadow on hover
    transition: { duration: 0.2 },
  },
};


const Skills: React.FC = () => {
  return (
    <div id="skills" className="relative bg-blue-600 min-h-screen flex items-center justify-center p-6 overflow-hidden py-24 mt-16 scroll-mt-24">
      {/* Background stripes (now blue and black) */}
      <div className="absolute inset-0 bg-black/90 -skew-y-12 z-0"></div>
      <div className="absolute top-0 left-0 w-full h-full grid grid-cols-4 gap-4 z-0">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="bg-blue-600 transform -skew-y-12"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 50%, 0% 50%)" }}
          />
        ))}
      </div>

      {/* Content container */}
      <motion.div
        className="relative max-w-6xl w-full bg-black shadow-xl p-8 rounded-md text-gray-300 z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible" // Animates when component enters viewport
        viewport={{ once: true, amount: 0.2 }} // Only animate once, when 20% in view
      >
        <motion.h2
          className="text-blue-400 text-3xl font-semibold text-center mb-4"
          variants={headingVariants}
        >
          What I do
        </motion.h2>
        <motion.p
          className="text-center max-w-3xl mx-auto mb-10 text-gray-400"
          variants={textVariants}
        >
          I am from Sri Lanka and currently living in Jaffna.
          I am pursuing a Bachelor’s degree in Computer Science and will graduate in 2027.
          I am a Software Engineer and a passionate Cybersecurity enthusiast, currently working as a freelancer.
        </motion.p>

        <div className="flex flex-col lg:flex-row"> {/* Added flex-col for mobile, flex-row for larger screens */}
          {/* Skills label vertical */}
          <motion.div
            className="flex flex-col justify-center items-center lg:items-start lg:mr-6 mb-6 lg:mb-0" // Centered for mobile
            variants={itemVariants}
          >
            <span className="text-white font-semibold tracking-wider transform lg:-rotate-90 lg:origin-left whitespace-nowrap mb-2 lg:mb-0">
              Skills
            </span>
            <div className="w-1 bg-blue-400 rounded-full h-20 self-center lg:self-start"></div>
          </motion.div>

          {/* Skills grid */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 flex-1" // Responsive grid
            variants={containerVariants} // Use container variants for stagger effect
          >
            {skills.map(({ name, imgSrc }) => (
              <motion.div
                key={name}
                className="bg-[#111111] shadow-black shadow-lg rounded-md flex flex-col items-center p-6 cursor-pointer"
                variants={skillCardVariants}
                whileHover="hover" // Apply hover animation
              >
                <img
                  src={imgSrc}
                  alt={name}
                  className="w-16 h-16 object-contain mb-4"
                />
                <span className="text-sm font-semibold tracking-wide">{name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Vertical scroll lines on the right */}
        <div className="hidden lg:flex absolute right-4 top-1/2 transform -translate-y-1/2 flex-col space-y-4 z-10">
          {[3, 2, 1].map((num) => (
            <motion.div
              key={num}
              className={`w-0.5 rounded-full ${
                num === 3 ? "bg-blue-400 h-12" : "bg-gray-500 h-12"
              }`}
              initial={{ height: 0 }}
              animate={{ height: 48 }} // Animate height
              transition={{ delay: 1 + num * 0.2, duration: 0.5 }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;