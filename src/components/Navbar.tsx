"use client"

// Utility function to combine class names
function cn(...classes: (string | undefined | null | boolean)[]): string {
  return classes.filter(Boolean).join(" ")
}

import { Menu, X, Phone } from "lucide-react"
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
            className="group inline-flex items-center gap-2 px-6 py-2 rounded-xl font-bold text-sm hover:-translate-y-0.5 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Phone className="w-4 h-4" />
            Book Call
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
              onClick={() => setIsMobileMenuOpen(false)}
              variant="primary"
              className="w-full group inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Book Call
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </motion.div>
    </motion.div>
  )
}
