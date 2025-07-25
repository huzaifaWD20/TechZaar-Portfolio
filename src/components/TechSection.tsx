"use client"

import { useEffect, useId, useState, useRef } from "react"
import { motion } from "framer-motion"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"

// Simple utility function to combine class names
// function cn(...classes: (string | undefined | null | boolean)[]): string {
//   return classes.filter(Boolean).join(" ")
// }

// Sparkles Component
function Sparkles({
  className,
  size = 1,
  minSize = null,
  density = 800,
  speed = 1,
  minSpeed = null,
  opacity = 1,
  opacitySpeed = 3,
  minOpacity = null,
  color = "#FFFFFF",
  background = "transparent",
  options = {},
}: {
  className?: string
  size?: number
  minSize?: number | null
  density?: number
  speed?: number
  minSpeed?: number | null
  opacity?: number
  opacitySpeed?: number
  minOpacity?: number | null
  color?: string
  background?: string
  options?: any
}) {
  const [isReady, setIsReady] = useState(false)
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setIsReady(true)
    })
  }, [])

  const id = useId()
  const defaultOptions = {
    background: {
      color: {
        value: background,
      },
    },
    fullScreen: {
      enable: false,
      zIndex: 1,
    },
    fpsLimit: 120,
    particles: {
      color: {
        value: color,
      },
      move: {
        enable: true,
        direction: "none",
        speed: {
          min: minSpeed || speed / 10,
          max: speed,
        },
        straight: false,
      },
      number: {
        value: density,
      },
      opacity: {
        value: {
          min: minOpacity || opacity / 10,
          max: opacity,
        },
        animation: {
          enable: true,
          sync: false,
          speed: opacitySpeed,
        },
      },
      size: {
        value: {
          min: minSize || size / 2.5,
          max: size,
        },
      },
    },
    detectRetina: true,
  }

  return isReady && <Particles id={id} options={{ ...defaultOptions, ...options }} className={className} />
}

// Technology data with colored icons class names
const technologies = [
  { name: "React.js", iconClass: "ci ci-react" },
  { name: "React Native", iconClass: "ci ci-react" },
  { name: "Angular", iconClass: "ci ci-angular" },
  { name: "iOS", iconClass: "ci ci-apple" },
  { name: "Tailwind CSS", iconClass: "ci ci-tailwindcss" },
  { name: "Python", iconClass: "ci ci-python" },
  { name: ".NET", iconClass: "ci ci-dotnet" },
  { name: "C#", iconClass: "ci ci-csharp" },
  { name: "Shopify", iconClass: "ci ci-shopify" },
  { name: "WordPress", iconClass: "ci ci-wordpress" },
  { name: "PHP", iconClass: "ci ci-php" },
  { name: "Laravel", iconClass: "ci ci-laravel" },
]

// Duplicate technologies for infinite scroll
const duplicatedTechnologies = [...technologies, ...technologies, ...technologies]

export default function TechSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    // Load the colored icons CSS
    const link = document.createElement("link")
    link.rel = "stylesheet"
    link.href = "https://cdn.jsdelivr.net/gh/dheereshagrwal/coloured-icons@1.9.4/src/app/ci.min.css"
    document.head.appendChild(link)

    return () => {
      // Cleanup: remove the link when component unmounts
      document.head.removeChild(link)
    }
  }, [])

  return (
    <section id="technologies" ref={sectionRef} className="py-20 bg-black relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/5 to-black" />

      {/* Sparkles background - only in upper portion */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,rgba(168,85,247,0.3),transparent_70%)] before:opacity-40" />
        <Sparkles
          density={600}
          className="absolute inset-x-0 top-0 h-3/4 w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
          color="#a855f7"
          size={1.5}
          speed={0.5}
          opacity={0.6}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 text-sm text-white mb-6"
          >
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
            <span>Technologies We Master</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Our Tech
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-300 bg-clip-text text-transparent">
              Stack
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Cutting-edge technologies and frameworks we use to build exceptional digital experiences that drive results.
          </motion.p>
        </div>

        {/* Infinite Scrolling Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          viewport={{ once: true, margin: "-150px" }}
          className="relative"
        >
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10" />

          {/* Scrolling container */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-12 py-8 items-center"
              animate={{
                x: [0, -100 * technologies.length],
              }}
              transition={{
                x: {
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
              style={{
                width: `${120 * duplicatedTechnologies.length}px`,
              }}
            >
              {duplicatedTechnologies.map((tech, index) => (
                <div
                  key={`${tech.name}-${index}`}
                  className="flex-shrink-0 flex flex-col items-center justify-center gap-3"
                >
                  <i className={`${tech.iconClass} text-6xl sm:text-7xl`}></i>
                  <span className="text-white text-sm sm:text-base font-medium text-center whitespace-nowrap">
                    {tech.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
