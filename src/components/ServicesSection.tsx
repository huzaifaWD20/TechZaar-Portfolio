"use client"

import { type ReactNode, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Globe, Smartphone, Brain, ShoppingCart, Cloud, Plug, Edit, Store } from "lucide-react"

// Simple utility function to combine class names
function cn(...classes: (string | undefined | null | boolean)[]): string {
  return classes.filter(Boolean).join(" ")
}

// Icon mapping
const iconMap = {
 globe: Globe,
 smartphone: Smartphone,
 brain: Brain,
 "shopping-cart": ShoppingCart,
 cloud: Cloud,
 plug: Plug,
 store: Store,
 edit: Edit,
}

const services = [
 {
   title: "Custom Web Development",
   description: "Build your digital presence that converts",
   icon: "globe" as keyof typeof iconMap,
 },
 {
   title: "Mobile App Development",
   description: "Launch your app on iOS and Android",
   icon: "smartphone" as keyof typeof iconMap,
 },
 {
   title: "Shopify Development",
   description: "Create profitable online stores fast",
   icon: "store" as keyof typeof iconMap,
 },
 {
   title: "WordPress Development",
   description: "Professional websites with easy management",
   icon: "edit" as keyof typeof iconMap,
 },
 {
   title: "AI Solutions",
   description: "Automate processes and boost efficiency",
   icon: "brain" as keyof typeof iconMap,
 },
 {
   title: "E-commerce Development",
   description: "Sell online with custom store solutions",
   icon: "shopping-cart" as keyof typeof iconMap,
 },
 {
   title: "SaaS Development",
   description: "Scale your business with cloud software",
   icon: "cloud" as keyof typeof iconMap,
 },
 {
   title: "System Integration",
   description: "Connect your tools and streamline workflow",
   icon: "plug" as keyof typeof iconMap,
 },
]

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  return <div className={cn("grid w-full auto-rows-[22rem] grid-cols-4 gap-4", className)}>{children}</div>
}

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  index,
}: {
  name: string
  className?: string
  background?: ReactNode
  Icon: any
  description: string
  index: number
}) => {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-xl",
        "bg-black/40 backdrop-blur-sm border border-white/10",
        "hover:border-purple-400/50 transition-all duration-500",
        "hover:shadow-[0_0_30px_rgba(168,85,247,0.3),0_0_60px_rgba(236,72,153,0.2)]",
        "transform-gpu hover:scale-[1.02]",
        className,
      )}
    >
      {background && <div>{background}</div>}

      {/* Gradient overlay that appears on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-400/0 via-pink-400/0 to-purple-300/0 group-hover:from-purple-400/10 group-hover:via-pink-400/5 group-hover:to-purple-300/10 transition-all duration-500" />

      <div className="relative z-10 flex transform-gpu flex-col gap-4 p-6 transition-all duration-500 group-hover:-translate-y-2">
        <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-400/20 via-pink-400/20 to-purple-300/20 border border-purple-400/30 group-hover:border-purple-400/50 transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]">
          <Icon className="h-8 w-8 text-purple-400 group-hover:text-purple-300 transition-all duration-500 group-hover:scale-110" />
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-bold text-white group-hover:text-purple-100 transition-colors duration-500">
            {name}
          </h3>
          <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-500 leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Subtle animated background pattern */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/5 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
      </div>
    </motion.div>
  )
}

export default function ServicesSection() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const gridRef = useRef(null)

  const isSectionInView = useInView(sectionRef, { once: true, margin: "-200px" })
  const isTitleInView = useInView(titleRef, { once: true, margin: "-100px" })
  const isSubtitleInView = useInView(subtitleRef, { once: true, margin: "-100px" })
  const isGridInView = useInView(gridRef, { once: true, margin: "-150px" })

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-black relative overflow-hidden">
      {/* Background gradient */}
      <div className="inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />

      {/* Animated background elements
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-400/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div> */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            ref={titleRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 text-sm text-white mb-6"
          >
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
            <span>Our Services</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
          >
            What We
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-300 bg-clip-text text-transparent">
              Deliver
            </span>
          </motion.h2>

          <motion.p
            ref={subtitleRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isSubtitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            From concept to deployment, we provide comprehensive software solutions that drive growth and innovation for
            your business.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <motion.div
          ref={gridRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isGridInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <BentoGrid className="max-w-6xl mx-auto">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon]

              // Optimized bento layout for 8 services
              let cardClassName = ""

              switch (index) {
                case 0: // Custom Web Development - spans 2 columns
                  cardClassName = "col-span-4 sm:col-span-2 lg:col-span-2"
                  break
                case 1: // Mobile App Development - spans 2 columns
                  cardClassName = "col-span-4 sm:col-span-2 lg:col-span-2"
                  break
                case 2: // AI Solutions - spans 1 column
                  cardClassName = "col-span-4 sm:col-span-2 lg:col-span-1"
                  break
                case 3: // E-commerce Development - spans 1 column
                  cardClassName = "col-span-4 sm:col-span-2 lg:col-span-1"
                  break
                case 4: // SaaS Development - spans 2 columns
                  cardClassName = "col-span-4 sm:col-span-2 lg:col-span-2"
                  break
                case 5: // System Integration - spans 2 columns (moved to first in last row)
                  cardClassName = "col-span-4 sm:col-span-2 lg:col-span-2"
                  break
                case 6: // Cybersecurity Solutions - spans 1 column
                  cardClassName = "col-span-4 sm:col-span-2 lg:col-span-1"
                  break
                case 7: // Performance Optimization - spans 1 column
                  cardClassName = "col-span-4 sm:col-span-2 lg:col-span-1"
                  break
                default:
                  cardClassName = "col-span-4 sm:col-span-2 lg:col-span-1"
              }

              return (
                <BentoCard
                  key={service.title}
                  name={service.title}
                  description={service.description}
                  Icon={IconComponent}
                  index={index}
                  className={cardClassName}
                />
              )
            })}
          </BentoGrid>
        </motion.div>
      </div>
    </section>
  )
}
