"use client"

import DarkVeil from "./DarkVeil"
import { ArrowRight } from "lucide-react"
import { useState, useEffect, useMemo } from "react"
import { motion } from "framer-motion"

// Services data from ServicesSection
const services = [
  "Custom Web Development",
  "Mobile App Development",
  "AI Solutions",
  "E-commerce Development",
  "SaaS Development",
  "System Integration",
  "Performance Optimization",
]

// Duplicate services for infinite scroll
const duplicatedServices = [...services, ...services, ...services]

// Simple utility function to combine class names
function cn(...classes: (string | undefined | null | boolean)[]): string {
  return classes.filter(Boolean).join(" ")
}

// WhatsApp utility function
const openWhatsApp = () => {
  const phoneNumber = "+923218232174" // Replace with your actual WhatsApp number (with country code, no + or spaces)
  const message = "Hi! I'm interested in your software development services. Can we discuss my project?"
  const encodedMessage = encodeURIComponent(message)
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
  window.open(whatsappUrl, '_blank')
}

export default function HeroSection() {
  const [titleNumber, setTitleNumber] = useState(0)
  const titles = useMemo(() => ["innovative", "scalable", "intelligent", "cutting-edge", "transformative"], [])

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0)
      } else {
        setTitleNumber(titleNumber + 1)
      }
    }, 2500)
    return () => clearTimeout(timeoutId)
  }, [titleNumber, titles])

  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden pt-20 sm:pt-20 md:pt-20" >
      {/* Background with DarkVeil */}
      <div className="absolute inset-0 w-full h-full">
        <DarkVeil
          hueShift={270}
          noiseIntensity={0.03}
          scanlineIntensity={0}
          speed={0.4}
          scanlineFrequency={0}
          warpAmount={0.15}
          resolutionScale={1}
        />
      </div>

      {/* Dark overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-12">
          {/* Badge - moved down with more margin */}
          {/* <div className="pt-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 text-sm text-white py-2 my-[]">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
              <span>AI-Powered Solutions</span>
            </div>
          </div> */}

          {/* Main Heading with Animation - increased height for animation container */}
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              <span className="text-white">We build</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center h-20 md:h-24 lg:h-28 items-center">
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-300 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 100 }}
                    transition={{ type: "spring", stiffness: 50, damping: 20 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -100 : 100,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
              <span className="block">software solutions</span>
            </h1>

            <p className="text-xs sm:text-sm md:text-sm text-gray-200 max-w-4xl mx-auto leading-relaxed font-medium">
              <span className="font-bold text-white">Revolutionize your business</span> with custom software
              development, AI integration, and cloud solutions.
              <span className="block mt-2 text-xs sm:text-sm md:text-2xl text-gray-300">
                From concept to deployment, we turn your vision into powerful digital reality.
              </span>
            </p>
          </div>

          {/* CTA Button - WhatsApp Chat Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <button
              onClick={openWhatsApp}
              className={cn(
                "group inline-flex items-center gap-3 bg-white text-black px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-xl hover:shadow-2xl",
              )}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516"/>
              </svg>
              Chat on WhatsApp
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Services Preview - Simple Text Scroll */}
          <div className="pt-6 max-w-6xl mx-auto">
            <div className="relative">
              {/* Gradient overlays for fade effect */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10" />

              {/* Scrolling container */}
              <div className="overflow-hidden">
                <motion.div
                  className="flex gap-8 py-2 items-center"
                  animate={{
                    x: [0, -200 * services.length],
                  }}
                  transition={{
                    x: {
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "loop",
                      duration: 25,
                      ease: "linear",
                    },
                  }}
                  style={{
                    width: `${200 * duplicatedServices.length}px`,
                  }}
                >
                  {duplicatedServices.map((service, index) => (
                    <div key={`${service}-${index}`} className="flex-shrink-0 text-center min-w-[180px]">
                      <div className="text-sm text-gray-400 font-medium whitespace-nowrap">{service}</div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}