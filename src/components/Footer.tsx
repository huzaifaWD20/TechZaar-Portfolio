"use client"

import { useEffect } from "react"
import type { ComponentProps, ReactNode } from "react"
import { motion, useReducedMotion } from "framer-motion"

// Simple utility function to combine class names
function cn(...classes: (string | undefined | null | boolean)[]): string {
  return classes.filter(Boolean).join(" ")
}

interface FooterLink {
  title: string
  href: string
  iconClass?: string
}

interface FooterSection {
  label: string
  links: FooterLink[]
}

const footerLinks: FooterSection[] = [
  {
    label: "Sections",
    links: [
      { title: "Home", href: "#home" },
      { title: "Projects", href: "#projects" },
      { title: "Services", href: "#services" },
      { title: "Technologies", href: "#technologies" },
    ],
  },
  {
    label: "Social Links",
    links: [
      { title: "Facebook", href: "#", iconClass: "ci ci-facebook" },
      { title: "Instagram", href: "#", iconClass: "ci ci-instagram" },
      { title: "Youtube", href: "#", iconClass: "ci ci-youtube" },
      { title: "LinkedIn", href: "#", iconClass: "ci ci-linkedin" },
    ],
  },
]

export default function Footer() {
  useEffect(() => {
    // Load the colored icons CSS if not already loaded
    if (!document.querySelector('link[href*="coloured-icons"]')) {
      const link = document.createElement("link")
      link.rel = "stylesheet"
      link.href = "https://cdn.jsdelivr.net/gh/dheereshagrwal/coloured-icons@1.9.4/src/app/ci.min.css"
      document.head.appendChild(link)
    }
  }, [])

  return (
    <footer className="bg-black py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo and Description - Centered */}
        <AnimatedContainer className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
              <span className="text-white font-bold text-lg">⚛</span>
            </div>
            <span className="text-2xl font-bold text-white">TechZaar Solutions</span>
          </div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Building innovative software solutions that transform businesses and drive digital success.
          </p>
        </AnimatedContainer>

        {/* Links - Centered Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-2xl mx-auto mb-12">
          {footerLinks.map((section, index) => (
            <AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
              <div className="text-center">
                <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">{section.label}</h3>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.title}>
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-white inline-flex items-center justify-center transition-all duration-300 text-sm hover:scale-105"
                      >
                        {link.iconClass && <i className={`${link.iconClass} mr-2 text-base`}></i>}
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedContainer>
          ))}
        </div>

        {/* Bottom Section - Centered */}
        <AnimatedContainer delay={0.4} className="text-center pt-8 border-t border-gray-800">
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-300">Follow us:</span>
              <div className="flex gap-3">
                {footerLinks[1].links.map((social) => (
                  <a
                    key={social.title}
                    href={social.href}
                    className={cn(
                      "w-10 h-10 rounded-full bg-gray-900 border border-gray-800",
                      "flex items-center justify-center",
                      "hover:bg-gray-800 hover:border-gray-700",
                      "hover:scale-110 transition-all duration-300",
                    )}
                  >
                    <i className={`${social.iconClass} text-lg`}></i>
                  </a>
                ))}
              </div>
            </div>
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} TechZaar Solutions. All rights reserved.</p>
          </div>
        </AnimatedContainer>
      </div>
    </footer>
  )
}

type ViewAnimationProps = {
  delay?: number
  className?: ComponentProps<typeof motion.div>["className"]
  children: ReactNode
}

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
