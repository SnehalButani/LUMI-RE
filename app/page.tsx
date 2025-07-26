"use client"

import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import CTA from "./components/CTA"
import Reviews from "./components/Reviews"
import Fragrance from "./components/Fragrance"
import Story from "./components/Story"
import Hero from "./components/Hero"
import Footer from "./components/Footer"

interface Review {
  id: number
  name: string
  rating: number
  comment: string
  date: string
  verified: boolean
}
const reviews: Review[] = [
  {
    id: 1,
    name: "Isabella M.",
    rating: 5,
    comment:
      "This fragrance is pure poetry. It evolves beautifully throughout the day, leaving the most exquisite trail. I've received countless compliments.",
    date: "3 days ago",
    verified: true,
  },
  {
    id: 2,
    name: "Alexander R.",
    rating: 5,
    comment:
      "Sophisticated and timeless. The bottle itself is a work of art, and the scent is even more magnificent. Worth every penny.",
    date: "1 week ago",
    verified: true,
  },
  {
    id: 3,
    name: "Sophia L.",
    rating: 5,
    comment:
      "I've been searching for my signature scent for years. This is it. Elegant, mysterious, and absolutely unforgettable.",
    date: "2 weeks ago",
    verified: true,
  },
]

export default function LuxuryPerfume() {

  const [scrollY, setScrollY] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])


  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Advanced CSS Animations */}
      <style jsx global>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) rotate(45deg); }
          100% { transform: translateX(300%) rotate(45deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(212, 175, 55, 0.3), 0 0 40px rgba(212, 175, 55, 0.1);
            transform: scale(1);
          }
          50% { 
            box-shadow: 0 0 30px rgba(212, 175, 55, 0.5), 0 0 60px rgba(212, 175, 55, 0.2);
            transform: scale(1.02);
          }
        }
        
        @keyframes ripple {
          0% { 
            transform: scale(0.8); 
            opacity: 1; 
          }
          100% { 
            transform: scale(2.5); 
            opacity: 0; 
          }
        }
        
        @keyframes note-reveal {
          0% { 
            opacity: 0; 
            transform: translateY(30px) scale(0.8); 
          }
          100% { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
          }
        }
        
        @keyframes bottle-entrance {
          0% { 
            opacity: 0; 
            transform: translateY(100px) scale(0.8) rotateY(-15deg); 
          }
          100% { 
            opacity: 1; 
            transform: translateY(0) scale(1) rotateY(0deg); 
          }
        }
        
        @keyframes golden-particles {
          0% { 
            transform: translateY(0) rotate(0deg); 
            opacity: 0; 
          }
          50% { 
            opacity: 1; 
          }
          100% { 
            transform: translateY(-100px) rotate(360deg); 
            opacity: 0; 
          }
        }
        
        .shimmer-effect {
          position: relative;
          overflow: hidden;
        }
        
        .shimmer-effect::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            45deg,
            transparent 30%,
            rgba(212, 175, 55, 0.3) 50%,
            transparent 70%
          );
          animation: shimmer 3s ease-in-out infinite;
        }
        
        .float-animation {
          animation: float 6s ease-in-out infinite;
        }
        
        .pulse-glow {
          animation: pulse-glow 4s ease-in-out infinite;
        }
        
        .ripple-effect {
          position: relative;
        }
        
        .ripple-effect::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100px;
          height: 100px;
          border: 2px solid rgba(212, 175, 55, 0.3);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          animation: ripple 3s ease-out infinite;
        }
        
        .note-reveal {
          animation: note-reveal 0.8s ease-out forwards;
        }
        
        .bottle-entrance {
          animation: bottle-entrance 1.5s ease-out forwards;
        }
        
        .golden-particles {
          animation: golden-particles 4s ease-in-out infinite;
        }
        
        .luxury-gradient {
          background: linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%);
        }
        
        .gold-gradient {
          background: linear-gradient(135deg, #d4af37 0%, #ffd700 50%, #d4af37 100%);
        }
        
        .glass-effect {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .hover-lift {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .hover-lift:hover {
          transform: translateY(-8px) scale(1.02);
        }
        
        .text-shadow-gold {
          text-shadow: 0 0 20px rgba(212, 175, 55, 0.5);
        }
      `}</style>

      {/* Floating Golden Particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full golden-particles"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Dynamic Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-yellow-400/10 to-amber-500/10 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-amber-500/10 to-yellow-600/10 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px)`,
          }}
        />
      </div>

      <Navbar />
      <Hero />
      <Story />
      <Fragrance />
      <Reviews reviews={reviews} />
      <CTA />
      <Footer />
    </div>
  )
}
