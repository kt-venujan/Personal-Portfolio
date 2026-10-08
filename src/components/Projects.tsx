import React, { lazy, Suspense, memo } from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import dietaraImg from '@/assets/projects-generated/dietara-hub.png';
import seatSnapsImg from '@/assets/projects-generated/seatsnaps.png';
import childrenImg from '@/assets/projects-generated/children-lk.png';
import shoppingImg from '@/assets/projects-generated/mern-shopping.png';
import tripImg from '@/assets/projects-generated/24trip.png';
import fastTrackImg from '@/assets/projects-generated/fasttrack-java.png';

// Lazy-load ProjectCard to split bundle
const ProjectCard = lazy(() =>
  import('./ProjectCard').then((m) => ({ default: m.ProjectCard }))
);

const projectImages = {
	dietara: dietaraImg,
	seatSnaps: seatSnapsImg,
	children: childrenImg,
	shopping: shoppingImg,
	trip: tripImg,
	fastTrack: fastTrackImg,
};

// Project data (static, outside component for referential stability)
const projects = [
	{
		title: 'Dietara Hub',
		description:
			'A health-tracking application with interactive dashboards, real-time data visualization, and a secure payment sandbox integration.',
		tags: ['Next.js', 'Payment Gateway', 'Data Visualization'],
		imageUrl: projectImages.dietara,
	},
	{
		title: 'SeatSnaps.com',
		description:
			'A responsive booking interface and secure admin dashboard for real-time booking operations, protected by JWT authentication and route middleware.',
		tags: ['Next.js', 'Tailwind CSS', 'JWT Auth'],
		imageUrl: projectImages.seatSnaps,
	},
	{
		title: 'Children.lk',
		description:
			'A fast, maintainable frontend integrated with complex REST APIs for seamless data synchronization and high-speed content delivery.',
		tags: ['Next.js', 'REST APIs', 'Tailwind CSS'],
		imageUrl: projectImages.children,
	},
	{
		title: 'MERN Shopping App',
		description:
			'A full-stack e-commerce platform with JWT authentication, product browsing, cart and checkout flows, plus tools for managing products and orders.',
		tags: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT'],
		imageUrl: projectImages.shopping,
	},
	{
		title: '24Trip',
		description:
			'A responsive travel-focused web application designed to make discovering and planning trips simple and accessible across devices.',
		tags: ['Web Application', 'Travel', 'Responsive UI'],
		imageUrl: projectImages.trip,
	},
	{
		title: 'FastTrack (Java Swing)',
		description:
			'A desktop quiz management system with add, delete, and preview features, built with CardLayout and interactive Swing panels.',
		tags: ['Java', 'Swing', 'NetBeans', 'OOP'],
		imageUrl: projectImages.fastTrack,
		githubUrl: 'https://github.com/kt-venujan/FastTrack',
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
