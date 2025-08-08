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
  { 
    name: "Shopify", 
    iconClass: "", 
    customIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="text-6xl sm:text-7xl w-[0.25em] h-[0.25em]">
        <path fill="#95bf47" d="M484.5 168.1C484.3 167 483.8 166 483 165.3C482.2 164.6 481.2 164.1 480.1 164.1C478.1 164.1 442.9 163.3 442.9 163.3C442.9 163.3 421.3 142.5 413.3 134.5L413.3 567.2L539 536C539 536 485 170.5 484.6 168.1zM384.9 134.5C383 128.4 380.6 122.6 377.7 116.9C367.3 96.9 351.7 86 333.3 86C332 86 330.6 86.1 329.3 86.4C328.9 85.6 328.1 85.2 327.7 84.4C319.7 75.6 309.3 71.6 296.9 72C272.9 72.8 248.9 90 229.7 120.8C216.1 142.4 205.7 169.6 202.9 190.9C175.3 199.3 156.1 205.3 155.7 205.7C141.7 210.1 141.3 210.5 139.7 223.7C138.5 233.7 101.7 515.5 101.7 515.5L404.3 568L404.3 129.7C402.8 129.8 401.4 129.9 399.9 130.1C399.9 130.1 394.3 131.7 385.1 134.5zM329.6 151.7C313.6 156.5 296 162.1 278.8 167.3C283.6 148.5 293.2 129.7 304.4 117.3C308.8 112.9 314.8 107.7 321.6 104.5C328.4 118.9 330 138.5 329.6 151.7zM296.8 88.4C301.8 88.2 306.8 89.5 311.2 92C304.8 95.2 298.4 100.4 292.4 106.4C277.2 122.8 265.6 148.4 260.8 172.9C246.4 177.3 232 181.7 218.8 185.7C227.6 147.3 260 89.3 296.8 88.5zM250.4 308.6C252 334.2 319.6 339.8 323.6 400.3C326.4 447.9 298.4 480.4 258 482.8C209.2 486 182.4 457.2 182.4 457.2L192.8 413.2C192.8 413.2 219.6 433.6 241.2 432C255.2 431.2 260.4 419.6 260 411.6C258 378 202.8 380 199.2 324.7C196 278.3 226.4 231.4 293.7 227C319.7 225.4 332.9 231.8 332.9 231.8L317.7 289.4C317.7 289.4 300.5 281.4 280.1 283C250.5 285 250.1 303.8 250.5 308.6zM345.6 146.9C345.6 134.9 344 117.7 338.4 103.3C356.8 106.9 365.6 127.3 369.6 139.7C362.4 141.7 354.4 144.1 345.6 146.9z"/>
      </svg>
    )
  },
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
                  {tech.customIcon ? tech.customIcon : <i className={`${tech.iconClass} text-6xl sm:text-7xl`}></i>}
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
