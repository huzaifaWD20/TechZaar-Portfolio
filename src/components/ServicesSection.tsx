"use client"

import { type ReactNode, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Globe, Smartphone, Brain, ShoppingCart, Cloud, Plug, Edit, Store, Zap, Users, TrendingUp, Shield, Palette, Code, Rocket } from "lucide-react"

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
 zap: Zap,
 users: Users,
 "trending-up": TrendingUp,
 shield: Shield,
 palette: Palette,
 code: Code,
 rocket: Rocket
}

const services = [
 {
   title: "Custom Web Development",
   description: "Enterprise-grade web applications built with modern frameworks",
   icon: "globe" as keyof typeof iconMap,
   features: ["React/Next.js", "TypeScript", "Performance Optimized", "SEO Ready"],
   tech: "Modern Stack",
   gradient: "from-blue-400/20 to-cyan-400/20",
   hoverGradient: "from-blue-400/30 to-cyan-400/30",
   size: "normal",
 },
 {
   title: "Mobile App Development",
   description: "Native iOS & Android apps with cross-platform capabilities",
   icon: "smartphone" as keyof typeof iconMap,
   features: ["React Native", "Flutter", "Native Performance", "App Store Ready"],
   tech: "Cross Platform",
   gradient: "from-green-400/20 to-emerald-400/20",
   hoverGradient: "from-green-400/30 to-emerald-400/30",
   size: "normal",
 },
 {
   title: "AI & Machine Learning",
   description: "Intelligent solutions that transform business operations",
   icon: "brain" as keyof typeof iconMap,
   features: ["GPT Integration", "Custom Models", "Data Analytics", "Automation"],
   tech: "Latest AI Tech",
   gradient: "from-purple-400/20 to-pink-400/20",
   hoverGradient: "from-purple-400/30 to-pink-400/30",
   featured: true,
   size: "large",
 },
 {
   title: "E-commerce Solutions",
   description: "Complete online stores with payment processing & inventory",
   icon: "shopping-cart" as keyof typeof iconMap,
   features: ["Payment Gateway", "Inventory Management", "Analytics", "Mobile First"],
   tech: "Full Stack Commerce",
   gradient: "from-orange-400/20 to-red-400/20",
   hoverGradient: "from-orange-400/30 to-red-400/30",
   size: "large",
 },
 {
   title: "SaaS Development",
   description: "Scalable cloud software with multi-tenant architecture",
   icon: "cloud" as keyof typeof iconMap,
   features: ["Microservices", "Auto Scaling", "Multi-tenant", "API First"],
   tech: "Cloud Native",
   gradient: "from-indigo-400/20 to-purple-400/20",
   hoverGradient: "from-indigo-400/30 to-purple-400/30",
   featured: true,
   size: "large",
 },
 {
   title: "Enterprise Integration",
   description: "Connect systems, automate workflows, streamline operations",
   icon: "plug" as keyof typeof iconMap,
   features: ["API Development", "Database Integration", "Workflow Automation", "Real-time Sync"],
   tech: "System Integration",
   gradient: "from-teal-400/20 to-blue-400/20",
   hoverGradient: "from-teal-400/30 to-blue-400/30",
   size: "normal",
 },
]

// Optimized grid layout for perfect alignment
// const gridLayout = [
//   { colSpan: "col-span-1", rowSpan: "row-span-1" }, // Custom Web Development
//   { colSpan: "col-span-1", rowSpan: "row-span-1" }, // Mobile App Development  
//   { colSpan: "col-span-2", rowSpan: "row-span-1" }, // AI & Machine Learning (large)
//   { colSpan: "col-span-2", rowSpan: "row-span-1" }, // E-commerce Solutions (large)
//   { colSpan: "col-span-1", rowSpan: "row-span-1" }, // Enterprise Integration
//   { colSpan: "col-span-1", rowSpan: "row-span-1" }, // SaaS Development
// ]

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  return <div className={cn("grid w-full auto-rows-[320px] grid-cols-2 lg:grid-cols-4 gap-4", className)}>{children}</div>
}

const BentoCard = ({
  name,
  className,
  Icon,
  description,
  features,
  tech,
  gradient,
  hoverGradient,
  index,
  featured = false,
}: {
  name: string
  className?: string
  Icon: any
  description: string
  features: string[]
  tech: string
  gradient: string
  hoverGradient: string
  index: number
  featured?: boolean
}) => {
  const cardRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)
  const isInView = useInView(cardRef, { once: true, margin: "-100px" })

  const handleWhatsApp = () => {
    window.open(`https://wa.me/+1234567890?text=Hi! I'm interested in ${name} services.`, '_blank')
  }

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
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl",
        "bg-black/60 backdrop-blur-lg border border-white/10",
        "hover:border-purple-400/50 transition-all duration-500",
        "hover:shadow-[0_0_40px_rgba(168,85,247,0.25),0_0_80px_rgba(236,72,153,0.15)]",
        "transform-gpu hover:scale-[1.02]",
        className,
      )}
    >
      {/* Dynamic background gradient */}
      <div className={cn(
        "absolute inset-0 bg-gradient-to-br transition-all duration-700",
        isHovered ? hoverGradient : gradient
      )} />

      {/* Animated mesh gradient overlay */}
      <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-500">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(236,72,153,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.1),transparent_50%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <motion.div 
            className={cn(
              "flex items-center justify-center w-12 h-12 rounded-xl border transition-all duration-500",
              "bg-gradient-to-br from-purple-400/20 via-pink-400/20 to-purple-300/20",
              "border-purple-400/30 group-hover:border-purple-400/60",
              "group-hover:shadow-[0_0_25px_rgba(168,85,247,0.4)]"
            )}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <Icon className="h-6 w-6 text-purple-400 group-hover:text-purple-300 transition-all duration-500" />
          </motion.div>
          
          {featured && (
            <div className="flex items-center gap-1 bg-gradient-to-r from-purple-400/20 to-pink-400/20 border border-purple-400/30 rounded-lg px-2 py-1">
              <Zap className="h-3 w-3 text-purple-400" />
              <span className="text-xs font-medium text-purple-300">Featured</span>
            </div>
          )}
        </div>

        {/* Title & Description */}
        <div className="flex-grow space-y-3">
          <h3 className="text-lg font-bold text-white group-hover:text-purple-100 transition-colors duration-500 leading-tight">
            {name}
          </h3>
          <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-500 leading-relaxed text-sm line-clamp-2">
            {description}
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 gap-1.5 mt-3">
            {features.slice(0, 4).map((feature, idx) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: (index * 0.1) + (idx * 0.1) }}
                className="flex items-center gap-1.5 text-xs text-gray-500 group-hover:text-gray-400 transition-colors duration-500"
              >
                <div className="w-1 h-1 bg-purple-400 rounded-full flex-shrink-0" />
                <span className="truncate">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/10">
          <div className="text-sm">
            <span className="text-purple-400 font-semibold text-xs">{tech}</span>
          </div>
          <motion.button
            onClick={handleWhatsApp}
            className={cn(
              "flex items-center gap-1.5 text-xs transition-colors duration-500 px-3 py-1.5 rounded-lg border",
              "bg-gradient-to-r from-purple-600 to-pink-600 text-white border-purple-400/30",
              "hover:from-purple-500 hover:to-pink-500 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)]",
              "flex-shrink-0"
            )}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516"/>
            </svg>
            <span>Chat</span>
          </motion.button>
        </div>
      </div>

      {/* Hover animation effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/5 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000" />
      </div>
    </motion.div>
  )
}

export default function ServicesSection() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const gridRef = useRef(null)

  const isTitleInView = useInView(titleRef, { once: true, margin: "-100px" })
  const isSubtitleInView = useInView(subtitleRef, { once: true, margin: "-100px" })
  const isGridInView = useInView(gridRef, { once: true, margin: "-150px" })

  const handleWhatsApp = () => {
    const phoneNumber = "+923218232174" // Replace with your actual WhatsApp number (with country code, no + or spaces)
    const message = "Hi! I'm interested in your software development services. Can we discuss my project?"
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section id="services" ref={sectionRef} className="py-24 bg-black relative overflow-hidden">
      {/* Enhanced background with animated elements */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <motion.div 
          className="absolute -top-40 -right-40 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-pink-400/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.1, 0.15]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-400/5 rounded-full blur-3xl"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <motion.div
            ref={titleRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 text-sm text-white mb-8 group hover:border-purple-400/50 transition-all duration-500"
          >
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
            <span className="font-medium">Our Expertise</span>
            <div className="w-8 h-[1px] bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-12 transition-all duration-500" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-8 leading-tight"
          >
            Solutions That
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-300 bg-clip-text text-transparent">
              Scale & Perform
            </span>
          </motion.h2>

          <motion.p
            ref={subtitleRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isSubtitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12"
          >
            Building Tomorrow's Digital Solutions
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isSubtitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            From cutting-edge AI implementations to enterprise-scale web applications, we deliver technology solutions 
            that drive measurable business growth and operational excellence.
          </motion.p>
        </div>

        {/* Optimized Bento Grid */}
        <motion.div
          ref={gridRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isGridInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <BentoGrid className="max-w-6xl mx-auto">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon]
              // const layout = gridLayout[index]

              // Randomized layout positioning
              let className = ""
              switch (index) {
                case 0: // Custom Web Development
                  className = "col-span-1 row-span-1"
                  break
                case 1: // Mobile App Development  
                  className = "col-span-1 row-span-1"
                  break
                case 2: // AI & Machine Learning (large, featured)
                  className = "col-span-2 row-span-1"
                  break
                case 3: // E-commerce Solutions (large)
                  className = "col-span-2 row-span-1"
                  break
                case 4: // SaaS Development (large, featured) - moved to create balance
                  className = "col-span-1 row-span-1"
                  break
                case 5: // Enterprise Integration
                  className = "col-span-1 row-span-1"
                  break
                default:
                  className = "col-span-1 row-span-1"
              }

              return (
                <BentoCard
                  key={service.title}
                  name={service.title}
                  description={service.description}
                  Icon={IconComponent}
                  features={service.features}
                  tech={service.tech}
                  gradient={service.gradient}
                  hoverGradient={service.hoverGradient}
                  index={index}
                  featured={service.featured}
                  className={className}
                />
              )
            })}
          </BentoGrid>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isGridInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-center mt-20"
        >
          <motion.button
            onClick={handleWhatsApp}
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold px-8 py-4 rounded-full transition-all duration-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516"/>
            </svg>
            <span>Let's Talk on WhatsApp</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}