import React, { lazy, Suspense, memo } from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';

// Lazy-load ProjectCard to split bundle
const ProjectCard = lazy(() =>
  import('./ProjectCard').then((m) => ({ default: m.ProjectCard }))
);

// Image imports
import fixoraImg from '@/assets/projects/fixora.png';
import guessFlagImg from '@/assets/projects/guess-flag.jpg';
import fasttrackSwingImg from '@/assets/projects/fasttracknew.webp';
import fasttrackProImg from '@/assets/projects/fasttracknew2.jpeg';
import medicarePlusImg from '@/assets/projects/medicare.jpg';
import aiStudyHelperImg from '@/assets/projects/legallense.webp';
import studentMgmtImg from '@/assets/projects/student.png';

// Project data (static, outside component for referential stability)
const projects = [
	{
		title: 'Fixora - Full Stack',
		description:
			'A full-stack web platform connecting skilled workers like plumbers and electricians with clients, built by Team Elevate.',
		tags: ['Laravel', 'React', 'MySQL', 'TailwindCSS'],
		imageUrl: fixoraImg,
		githubUrl: 'https://github.com/kt-venujan/Fixora-User',
	},
	{
		title: 'Guess The Flag Game',
		description:
			'A fun Android app where users guess flags, track scores, and explore fun facts. Includes scoreboard, timer, and capital finder API.',
		tags: ['Java', 'Android Studio', 'REST API', 'Google SSO'],
		imageUrl: guessFlagImg,
		githubUrl: 'https://github.com/kt-venujan/flaggame',
	},
	{
		title: 'FastTrack (Java Swing)',
		description:
			'A desktop quiz management system with add, delete, and preview features using CardLayout and interactive UI panels.',
		tags: ['Java', 'Swing', 'NetBeans', 'OOP'],
		imageUrl: fasttrackSwingImg,
		githubUrl: 'https://github.com/kt-venujan/FastTrack',
	},
	{
		title: 'FastTrack Pro (Spring Boot)',
		description:
			'An advanced version of FastTrack built with Spring Boot, offering web-based user management and improved modular structure.',
		tags: ['Spring Boot', 'Thymeleaf', 'Maven', 'MySQL'],
		imageUrl: fasttrackProImg,
		githubUrl: 'https://github.com/kt-venujan/FastTrack_Pro',
	},
	{
		title: 'AI Study Helper',
		description:
			'An AI-powered chatbot that helps students understand topics, generate summaries, and provide smart study recommendations.',
		tags: ['OpenAI API', 'React', 'Node.js', 'Express'],
		imageUrl: aiStudyHelperImg,
		githubUrl: 'https://github.com/kt-venujan/Legal-Lens',
	},
	{
		title: 'Student Management System',
		description:
			'A web-based student record system with dynamic CRUD operations and asynchronous updates using Node.js and AJAX.',
		tags: ['Node.js', 'Express', 'AJAX', 'JSON'],
		imageUrl: studentMgmtImg,
		githubUrl: 'https://github.com/kt-venujan/Student-Managment-System',
	},
];

// Lightweight skeleton for suspense fallback
const GridSkeleton = () => (
	<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
		{Array.from({ length: 6 }).map((_, i) => (
			<div
				key={i}
				className="h-72 rounded-xl border border-border/20 bg-secondary/30 animate-pulse"
				aria-hidden="true"
			/>
		))}
	</div>
);

export const Projects = memo(() => {
	return (
		<section id="projects" className="min-h-screen py-20 px-4 scroll-mt-24">
			<div className="max-w-7xl mx-auto">
				<LazyMotion features={domAnimation}>
					<m.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.2 }}
						transition={{ duration: 0.6 }}
						className="text-center mb-16"
					>
						<h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
							Featured Projects
						</h2>
						<p className="text-xl text-muted-foreground">
							A showcase of my favorite creations and innovations 💡
						</p>
					</m.div>
				</LazyMotion>

				<Suspense fallback={<GridSkeleton />}>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{projects.map((project, index) => (
							<ProjectCard
								key={project.title}
								title={project.title}
								description={project.description}
								tags={project.tags}
								delay={index * 0.12}
								imageUrl={project.imageUrl}
								githubUrl={project.githubUrl}
							/>
						))}
					</div>
				</Suspense>
			</div>
		</section>
	);
});
