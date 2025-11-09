import React, { useRef, useEffect } from 'react';

// --- Use CDN URLs for icons ---
const iconPaths = [
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
];

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  icon: HTMLImageElement;
}

// Mouse position tracking
const mouse = {
  x: null as number | null,
  y: null as number | null,
  radius: 100,
};

export const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number | null>(null);
  const particles = useRef<Particle[]>([]);
  const loadedIcons = useRef<HTMLImageElement[]>([]);

  const initParticles = (canvas: HTMLCanvasElement) => {
    particles.current = [];
    const particleCount = canvas.width > 768 ? 40 : 20;

    if (!loadedIcons.current || loadedIcons.current.length === 0) {
      console.error('Icons are not loaded yet!');
      return;
    }

    for (let i = 0; i < particleCount; i++) {
      const randomIcon = loadedIcons.current[
        Math.floor(Math.random() * loadedIcons.current.length)
      ];

      particles.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 15 + 10,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.5 + 0.5,
        icon: randomIcon,
      });
    }
  };

  const animate = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.current.forEach((particle, i) => {
      // Update position
      particle.x += particle.speedX;
      particle.y += particle.speedY;

      // Wall bouncing
      if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
      if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

      // Draw icon
      ctx.globalAlpha = particle.opacity;
      ctx.drawImage(
        particle.icon,
        particle.x - particle.size / 2,
        particle.y - particle.size / 2,
        particle.size,
        particle.size
      );
      ctx.globalAlpha = 1.0;

      // Draw lines to other particles
      for (let j = i + 1; j < particles.current.length; j++) {
        const otherParticle = particles.current[j];
        const dx = particle.x - otherParticle.x;
        const dy = particle.y - otherParticle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(otherParticle.x, otherParticle.y);
          ctx.strokeStyle = `rgba(0, 191, 255, ${1 - distance / 150})`;
          ctx.lineWidth = 0.2;
          ctx.stroke();
        }
      }

      // Draw line to mouse
      if (mouse.x !== null && mouse.y !== null) {
        const dx = particle.x - mouse.x;
        const dy = particle.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(0, 191, 255, ${1 - distance / mouse.radius})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    });

    animationFrameId.current = requestAnimationFrame(() => animate(ctx, canvas));
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Load images from CDN URLs
    const loadImages = () => {
      const imagePromises = iconPaths.map((url) => {
        return new Promise<HTMLImageElement>((resolve, reject) => {
          const img = new Image();
          img.crossOrigin = 'anonymous'; // Enable CORS for external images
          img.src = url;
          img.onload = () => resolve(img);
          img.onerror = (err) => {
            console.error(`Failed to load icon from ${url}`, err);
            reject(err);
          };
        });
      });

      return Promise.all(imagePromises);
    };

    // Setup after images load
    const setup = (loadedImageElements: HTMLImageElement[]) => {
      loadedIcons.current = loadedImageElements;

      const setCanvasSize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initParticles(canvas);
      };
      setCanvasSize();

      const handleMouseMove = (event: MouseEvent) => {
        mouse.x = event.x;
        mouse.y = event.y;
      };
      const handleMouseLeave = () => {
        mouse.x = null;
        mouse.y = null;
      };

      window.addEventListener('resize', setCanvasSize);
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseleave', handleMouseLeave);

      ctx.shadowBlur = 30;
      ctx.shadowColor = 'rgba(0, 191, 255, 0.7)';

      animate(ctx, canvas);

      return () => {
        window.removeEventListener('resize', setCanvasSize);
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseleave', handleMouseLeave);
        if (animationFrameId.current) {
          cancelAnimationFrame(animationFrameId.current);
        }
      };
    };

    let cleanup: (() => void) | undefined;

    loadImages()
      .then((loadedImageElements) => {
        cleanup = setup(loadedImageElements);
      })
      .catch((err) => {
        console.error('Failed to load images for canvas:', err);
      });

    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ background: 'transparent' }}
    />
  );
};

export default ParticleBackground;