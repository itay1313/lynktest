import React, { useRef, useEffect, useState, useCallback } from 'react'

interface MagicBentoProps {
  children: React.ReactNode
  textAutoHide?: boolean
  enableStars?: boolean
  enableSpotlight?: boolean
  enableBorderGlow?: boolean
  enableTilt?: boolean
  enableMagnetism?: boolean
  clickEffect?: boolean
  spotlightRadius?: number
  particleCount?: number
  glowColor?: string
  className?: string
}

const MagicBento: React.FC<MagicBentoProps> = ({
  children,
  textAutoHide = false,
  enableStars = false,
  enableSpotlight = false,
  enableBorderGlow = false,
  enableTilt = false,
  enableMagnetism = false,
  clickEffect = false,
  spotlightRadius = 300,
  particleCount = 12,
  glowColor = '132, 0, 255',
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const [clickPosition, setClickPosition] = useState<{ x: number; y: number } | null>(null)
  const [stars, setStars] = useState<Array<{ x: number; y: number; size: number; opacity: number }>>([])

  // Generate stars
  useEffect(() => {
    if (enableStars && containerRef.current) {
      const newStars = Array.from({ length: particleCount }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.3,
      }))
      setStars(newStars)
    }
  }, [enableStars, particleCount])

  // Mouse move handler for spotlight and magnetism
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      setMousePosition({ x, y })

      if (enableMagnetism && containerRef.current) {
        const centerX = rect.width / 2
        const centerY = rect.height / 2
        const deltaX = (x - centerX) * 0.1
        const deltaY = (y - centerY) * 0.1

        containerRef.current.style.transform = `translate(${deltaX}px, ${deltaY}px)`
      } else if (containerRef.current && !enableTilt && !enableMagnetism) {
        // Reset transform when both effects are disabled
        containerRef.current.style.transform = ''
      }
    },
    [enableMagnetism, enableTilt]
  )

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false)
    if (containerRef.current) {
      if (enableMagnetism) {
        containerRef.current.style.transform = 'translate(0, 0)'
      } else if (!enableTilt) {
        // Reset transform when both tilt and magnetism are disabled
        containerRef.current.style.transform = ''
      }
    }
  }, [enableMagnetism, enableTilt])

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!clickEffect || !containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      setClickPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })

      setTimeout(() => setClickPosition(null), 600)
    },
    [clickEffect]
  )

  // Tilt effect
  useEffect(() => {
    if (!enableTilt || !containerRef.current) return

    const handleTilt = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const centerX = rect.width / 2
      const centerY = rect.height / 2

      const rotateX = ((y - centerY) / centerY) * -10
      const rotateY = ((x - centerX) / centerX) * 10

      containerRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    }

    const resetTilt = () => {
      if (containerRef.current) {
        containerRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)'
      }
    }

    if (isHovered) {
      window.addEventListener('mousemove', handleTilt)
      return () => {
        window.removeEventListener('mousemove', handleTilt)
        resetTilt()
      }
    } else {
      resetTilt()
    }
  }, [enableTilt, isHovered])

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{
        transition: enableTilt || enableMagnetism ? 'none' : 'transform 0.3s ease-out',
      }}
    >
      {/* Stars background - only visible on hover */}
      {enableStars && isHovered && (
        <div className="absolute inset-0 pointer-events-none">
          {stars.map((star, index) => (
            <div
              key={index}
              className="absolute rounded-full bg-white"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                opacity: star.opacity,
                animation: `twinkle ${2 + Math.random() * 2}s infinite`,
                transition: 'opacity 0.3s ease',
              }}
            />
          ))}
        </div>
      )}

      {/* Spotlight effect - only visible on hover */}
      {enableSpotlight && isHovered && (
        <div
          className="absolute pointer-events-none"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
            width: `${spotlightRadius * 2}px`,
            height: `${spotlightRadius * 2}px`,
            transform: 'translate(-50%, -50%)',
            background: `radial-gradient(circle, rgba(${glowColor}, 0.4) 0%, transparent 70%)`,
            borderRadius: '50%',
            transition: 'opacity 0.3s ease, background 0.3s ease',
          }}
        />
      )}

      {/* Border glow - only visible on hover */}
      {enableBorderGlow && isHovered && (
        <div
          className="absolute inset-0 pointer-events-none rounded-lg"
          style={{
            boxShadow: `0 0 ${spotlightRadius / 2}px rgba(${glowColor}, 0.5), inset 0 0 ${spotlightRadius / 2}px rgba(${glowColor}, 0.3)`,
            transition: 'opacity 0.3s ease, box-shadow 0.3s ease',
          }}
        />
      )}

      {/* Click effect */}
      {clickEffect && clickPosition && (
        <div
          className="absolute pointer-events-none rounded-full"
          style={{
            left: `${clickPosition.x}px`,
            top: `${clickPosition.y}px`,
            width: '0px',
            height: '0px',
            transform: 'translate(-50%, -50%)',
            background: `radial-gradient(circle, rgba(${glowColor}, 0.6) 0%, transparent 70%)`,
            animation: 'ripple 0.6s ease-out',
          }}
        />
      )}

      {/* Content - always fully visible for better readability */}
      <div className="relative z-10">
        {children}
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        @keyframes ripple {
          0% {
            width: 0px;
            height: 0px;
            opacity: 1;
          }
          100% {
            width: ${spotlightRadius * 2}px;
            height: ${spotlightRadius * 2}px;
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}

export default MagicBento

