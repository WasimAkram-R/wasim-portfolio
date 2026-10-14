import React, { useEffect, useState } from 'react';

/**
 * BackgroundGlow creates subtle ambient lighting, grid texture,
 * and a cursor-following reactive glow on supported desktop devices.
 * Automatically checks for prefers-reduced-motion.
 */
export default function BackgroundGlow() {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [isPointerFine, setIsPointerFine] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check if device supports hover and fine pointer (desktop)
    const fineQuery = window.matchMedia('(pointer: fine)');
    setIsPointerFine(fineQuery.matches);

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(motionQuery.matches);

    const handlePointerChange = (e) => setIsPointerFine(e.matches);
    const handleMotionChange = (e) => setPrefersReducedMotion(e.matches);

    fineQuery.addEventListener('change', handlePointerChange);
    motionQuery.addEventListener('change', handleMotionChange);

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    if (fineQuery.matches && !motionQuery.matches) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
    }

    return () => {
      fineQuery.removeEventListener('change', handlePointerChange);
      motionQuery.removeEventListener('change', handleMotionChange);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />

      {/* Static / Ambient Floating Gradient Blobs */}
      <div 
        className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-brand-electric/15 blur-3xl animate-float-slow" 
      />
      <div 
        className="absolute top-1/3 -right-40 w-[30rem] h-[30rem] rounded-full bg-brand-violet/15 blur-3xl animate-float-reverse" 
      />
      <div 
        className="absolute bottom-20 left-1/4 w-[28rem] h-[28rem] rounded-full bg-brand-cyan/10 blur-3xl animate-pulse-glow" 
      />

      {/* Interactive Cursor Following Light (Desktop only, if not reduced motion) */}
      {isPointerFine && !prefersReducedMotion && (
        <div
          className="fixed w-[450px] h-[450px] rounded-full pointer-events-none transition-transform duration-100 ease-out -translate-x-1/2 -translate-y-1/2"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, rgba(6, 182, 212, 0.04) 40%, rgba(0, 0, 0, 0) 70%)',
          }}
        />
      )}
    </div>
  );
}
