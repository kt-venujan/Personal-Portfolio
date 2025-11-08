import React, { useRef, useEffect } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

// We'll track the mouse position using a ref to avoid re-renders
const mouse = {
  x: null as number | null,
  y: null as number | null,
  radius: 100, // Area of effect for mouse interaction
};

export const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // We'll store request ID to cancel it on unmount
  const animationFrameId = useRef<number | null>(null); 
  const particles = useRef<Particle[]>([]);

  // This function initializes or re-initializes particles
  const initParticles = (canvas: HTMLCanvasElement) => {
    particles.current = [];
    const particleCount = canvas.width > 768 ? 50 : 25; // Fewer particles on mobile

    for (let i = 0; i < particleCount; i++) {
      particles.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }
  };

  // The main animation loop
  const animate = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.current.forEach((particle, i) => {
      // 1. Update particle position
      particle.x += particle.speedX;
      particle.y += particle.speedY;

      // 2. Handle wall bouncing
      if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
      if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

      // 3. Draw the particle
      // Optimization: Set shadow *once* outside the loop
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(238, 238, 238, ${particle.opacity})`;
      ctx.fill();

      // 4. --- NEW: Draw lines to other particles ---
      for (let j = i + 1; j < particles.current.length; j++) {
        const otherParticle = particles.current[j];
        const dx = particle.x - otherParticle.x;
        const dy = particle.y - otherParticle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) { // Max distance to draw a line
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(otherParticle.x, otherParticle.y);
          // Line opacity based on distance
          ctx.strokeStyle = `rgba(0, 191, 255, ${1 - distance / 150})`;
          ctx.lineWidth = 0.2;
          ctx.stroke();
        }
      }

      // 5. --- NEW: Draw line to mouse ---
      if (mouse.x !== null && mouse.y !== null) {
        const dx = particle.x - mouse.x;
        const dy = particle.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(0, 191, 255, ${1 - distance / mouse.radius})`;
          ctx.lineWidth = 0.5; // Make mouse line slightly thicker
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

    // Set canvas size and initialize particles
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles(canvas); // Re-create particles on resize
    };
    setCanvasSize();

    // --- NEW: Mouse Move Listener ---
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

    // --- Optimization: Set shadow properties once ---
    ctx.shadowBlur = 10;
    ctx.shadowColor = 'rgba(0, 191, 255, 0.3)';

    // Start animation
    animate(ctx, canvas);

    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasSize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ background: 'transparent' }} // This canvas sits on top of your dark bg
    />
  );
};

export default ParticleBackground;