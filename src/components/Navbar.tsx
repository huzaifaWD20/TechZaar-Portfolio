"use client"

// Utility function to combine class names
function cn(...classes: (string | undefined | null | boolean)[]): string {
  return classes.filter(Boolean).join(" ")
}

import { Menu, X } from "lucide-react"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import type React from "react"
import { useRef, useState } from "react"

interface NavItem {
  name: string
  link: string
}

interface AdvancedNavbarProps {
  className?: string
}

// WhatsApp utility function
const openWhatsApp = () => {
  const phoneNumber = "+923218232174" // Replace with your actual WhatsApp number (with country code, no + or spaces)
  const message = "Hi! I'm interested in your software development services. Can we discuss my project?"
  const encodedMessage = encodeURIComponent(message)
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
  window.open(whatsappUrl, '_blank')
}

export default function AdvancedNavbar({ className }: AdvancedNavbarProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const [visible, setVisible] = useState<boolean>(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hovered, setHovered] = useState<number | null>(null)

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  })

  const navItems: NavItem[] = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Services",
      link: "#services",
    },
    {
      name: "Technologies",
      link: "#technologies",
    },
  ]

  const NavbarLogo = () => {
    return (
      <a href="#" className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-white">
        {/* <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
          <span className="text-white font-bold text-sm">⚛</span>
        </div> */}
        <img
          src="/images/logoTechZaar-removebg-1.png" // <-- replace with your image path
          alt="Logo"
          className="h-8 w-8 rounded-full object-cover"
        />
        <span className="font-medium text-white">TechZaar Technology</span>
      </a>
    )
  }

  const NavbarButton = ({
    href,
    children,
    className: buttonClassName,
    variant = "primary",
    onClick,
    ...props
  }: {
    href?: string
    children: React.ReactNode
    className?: string
    variant?: "primary" | "secondary" | "dark" | "gradient"
    onClick?: () => void
  } & React.ComponentPropsWithoutRef<"a">) => {
    const baseStyles =
      "px-4 py-2 rounded-md text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center"

    const variantStyles = {
      primary: "bg-white text-black shadow-lg hover:shadow-xl",
      secondary:
        "bg-transparent shadow-none text-white hover:text-gray-200 border border-white/20 hover:border-white/40",
      dark: "bg-black text-white shadow-lg",
      gradient: "bg-gradient-to-b from-purple-500 to-purple-700 text-white shadow-lg",
    }

    return (
      <a
        href={href || "#"}
        onClick={onClick}
        className={cn(baseStyles, variantStyles[variant], buttonClassName)}
        {...props}
      >
        {children}
      </a>
    )
  }

  const NavItems = ({ onItemClick }: { onItemClick?: () => void }) => {
    return (
      <motion.div
        onMouseLeave={() => setHovered(null)}
        className="absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-white transition duration-200 lg:flex lg:space-x-2"
      >
        {navItems.map((item, idx) => (
          <a
            onMouseEnter={() => setHovered(idx)}
            onClick={onItemClick}
            className="relative px-4 py-2 text-white hover:text-gray-200 transition-colors duration-200"
            key={`link-${idx}`}
            href={item.link}
          >
            {hovered === idx && (
              <motion.div layoutId="hovered" className="absolute inset-0 h-full w-full rounded-full bg-white/10" />
            )}
            <span className="relative z-20">{item.name}</span>
          </a>
        ))}
      </motion.div>
    )
  }

  const MobileNavToggle = ({
    isOpen,
    onClick,
  }: {
    isOpen: boolean
    onClick: () => void
  }) => {
    return isOpen ? (
      <X className="text-white h-6 w-6" onClick={onClick} />
    ) : (
      <Menu className="text-white h-6 w-6" onClick={onClick} />
    )
  }

  const MobileNavMenu = ({
    children,
    isOpen,
  }: {
    children: React.ReactNode
    isOpen: boolean
    onClose: () => void
  }) => {
    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-black/90 backdrop-blur-md px-4 py-8 shadow-xl border border-white/10"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    )
  }

  return (
    <motion.div ref={ref} className={cn("fixed inset-x-0 top-0 z-40 w-full", className)}>
      {/* Desktop Navigation */}
      <motion.div
        animate={{
          backdropFilter: visible ? "blur(10px)" : "none",
          boxShadow: visible
            ? "0 0 24px rgba(0, 0, 0, 0.3), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(255, 255, 255, 0.1)"
            : "none",
          width: visible ? "40%" : "100%",
          y: visible ? 20 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 50,
        }}
        style={{
          minWidth: "800px",
        }}
        className={cn(
          "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full bg-black/20 px-4 py-2 lg:flex",
          visible && "bg-black/40",
        )}
      >
        <NavbarLogo />
        <NavItems />
        <div className="flex items-center gap-4">
          <NavbarButton
            variant="primary"
            onClick={openWhatsApp}
            className="group inline-flex items-center gap-2 px-6 py-2 rounded-xl font-bold text-sm hover:-translate-y-0.5 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516"/>
            </svg>
            Chat Now
          </NavbarButton>
        </div>
      </motion.div>

      {/* Mobile Navigation */}
      <motion.div
        animate={{
          backdropFilter: visible ? "blur(10px)" : "none",
          boxShadow: visible
            ? "0 0 24px rgba(0, 0, 0, 0.3), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(255, 255, 255, 0.1)"
            : "none",
          width: visible ? "90%" : "100%",
          paddingRight: visible ? "12px" : "0px",
          paddingLeft: visible ? "12px" : "0px",
          borderRadius: visible ? "4px" : "2rem",
          y: visible ? 20 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 50,
        }}
        className={cn(
          "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-black/20 px-0 py-2 lg:hidden",
          visible && "bg-black/40",
        )}
      >
        <div className="flex w-full flex-row items-center justify-between">
          <NavbarLogo />
          <MobileNavToggle isOpen={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
        </div>

        <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-white hover:text-gray-200 transition-colors duration-200"
            >
              <span className="block">{item.name}</span>
            </a>
          ))}
          <div className="flex w-full flex-col gap-4">
            <NavbarButton
              onClick={() => {
                setIsMobileMenuOpen(false)
                openWhatsApp()
              }}
              variant="primary"
              className="w-full group inline-flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516"/>
              </svg>
              Chat on WhatsApp
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </motion.div>
    </motion.div>
  )
}