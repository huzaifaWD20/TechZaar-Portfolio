"use client"

import React from "react"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect, useRef, useCallback } from "react"
import { ChevronLeft, ChevronRight, X, ExternalLink, Github } from "lucide-react"

// Simple utility function to combine class names
function cn(...classes: (string | undefined | null | boolean)[]): string {
  return classes.filter(Boolean).join(" ")
}

type Project = {
  name: string
  quote: string
  designation: string
  src: string
  gallery: string[]
  technologies: string[]
  link?: string
  type: 'github' | 'gallery' | 'external' | 'shopify' | 'webdev' | 'uiux' | 'mobile' | 'dotnet'
  githubUrl?: string
}

type FilterType = 'all' | 'shopify' | 'webdev' | 'uiux' | 'mobile' | 'dotnet'

type FeaturedProjectsProps = {
  projects: Project[]
  autoplay?: boolean
}

// Enhanced View Project Button
const ViewProjectButton = ({
  onClick,
  icon,
  text,
}: {
  onClick: () => void
  icon: React.ReactNode
  text: string
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex-1 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300",
        "border border-white/20 backdrop-blur-sm",
        "hover:from-purple-400/30 hover:via-pink-400/30 hover:to-purple-300/30",
        "hover:border-purple-400/50 hover:shadow-[0_0_25px_rgba(168,85,247,0.4),0_0_50px_rgba(236,72,153,0.3)]",
        "hover:scale-105 active:scale-95",
        "flex items-center justify-center gap-2",
      )}
    >
      {icon}
      {text}
    </button>
  )
}

// Circular Button component for navigation
const CircularButton = ({
  onClick,
  icon,
  className = "",
}: {
  onClick: () => void
  icon: React.ReactNode
  className?: string
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-12 h-12 rounded-full bg-black/40 border border-white/20 backdrop-blur-sm",
        "flex items-center justify-center text-white transition-all duration-300",
        "hover:bg-transparent hover:border-purple-400/50",
        "hover:shadow-[0_0_20px_rgba(168,85,247,0.4),0_0_40px_rgba(236,72,153,0.3)]",
        "hover:scale-110 active:scale-95",
        className,
      )}
    >
      {icon}
    </button>
  )
}

// Filter Button Component
const FilterButton = ({
  isActive,
  onClick,
  children,
}: {
  isActive: boolean
  onClick: () => void
  children: React.ReactNode
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-6 py-2 rounded-lg font-medium transition-all duration-300",
        "border border-white/20 backdrop-blur-sm",
        isActive
          ? "bg-gradient-to-r from-purple-400/20 via-pink-400/20 to-purple-300/20 text-white border-purple-400/50"
          : "text-gray-300 hover:text-white hover:border-white/40",
      )}
    >
      {children}
    </button>
  )
}

// GitHub Logo SVG Component
const GitHubLogo = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={cn("w-24 h-24", className)}
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
)

// Gallery Modal Component
const GalleryModal = ({
  isOpen,
  onClose,
  images,
  projectName,
}: {
  isOpen: boolean
  onClose: () => void
  images: string[]
  projectName: string
}) => {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="relative max-w-6xl max-h-[90vh] w-full"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white text-xl font-bold">{projectName}</h3>
            <button onClick={onClose} className="text-white hover:text-gray-300 transition-colors p-2">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Image Container */}
          <div className="relative rounded-lg overflow-hidden">
            <img
              src={images[currentImage] || "/placeholder.svg"}
              alt={`${projectName} screenshot ${currentImage + 1}`}
              className="w-full h-auto max-h-[70vh] object-contain"
            />

            {/* Navigation Arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
              {currentImage + 1} / {images.length}
            </div>
          </div>

          {/* Thumbnails */}
          {images.length > 1 && (
            <div className="flex gap-2 mt-4 justify-center overflow-x-auto pb-2">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={cn(
                    "flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors",
                    currentImage === index ? "border-purple-400" : "border-gray-600 hover:border-gray-400",
                  )}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default function FeaturedProjects({ projects, autoplay = false }: FeaturedProjectsProps) {
  const [active, setActive] = useState(0)
  const [filter, setFilter] = useState<FilterType>('all')
  const [filteredProjects, setFilteredProjects] = useState(projects)
  const [isMobileView, setIsMobileView] = useState(false)
  const [componentWidth, setComponentWidth] = useState(0)
  const [galleryOpen, setGalleryOpen] = useState(false)
  const componentRef = useRef<HTMLDivElement>(null)

  // Filter projects based on selected filter
  useEffect(() => {
    if (filter === 'all') {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter(project => project.type === filter))
    }
    setActive(0) // Reset to first project when filter changes
  }, [filter, projects])

  const handleNext = () => {
    setActive((prev) => (prev + 1) % filteredProjects.length)
  }

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length)
  }

  const isActive = (index: number) => {
    return index === active
  }

  const openGallery = () => {
    if (filteredProjects[active].type === 'gallery' || filteredProjects[active].gallery.length > 0) {
      setGalleryOpen(true)
    }
  }

  const closeGallery = () => {
    setGalleryOpen(false)
  }

  const handleViewProject = () => {
    const currentProject = filteredProjects[active]
    if (currentProject.githubUrl) {
      window.open(currentProject.githubUrl, '_blank')
    } else if (currentProject.type === 'shopify' && currentProject.link) {
      window.open(currentProject.link, '_blank')
    } else if (currentProject.gallery.length > 0) {
      openGallery()
    } else if (currentProject.link) {
      window.open(currentProject.link, '_blank')
    }
  }

  const getButtonText = () => {
    const currentProject = filteredProjects[active]
    if (currentProject.githubUrl) return 'View on GitHub'
    if (currentProject.type === 'shopify') return 'Visit Store'
    if (currentProject.gallery.length > 0) return 'View Gallery'
    return 'View Project'
  }

  const getButtonIcon = () => {
    const currentProject = filteredProjects[active]
    if (currentProject.githubUrl) return <Github className="w-4 h-4" />
    return <ExternalLink className="w-4 h-4" />
  }

  const getFilterCount = (filterType: FilterType) => {
    if (filterType === 'all') return projects.length
    return projects.filter(project => project.type === filterType).length
  }

  useEffect(() => {
    if (autoplay && filteredProjects.length > 0) {
      const interval = setInterval(handleNext, 5000)
      return () => clearInterval(interval)
    }
  }, [autoplay, filteredProjects.length])

  const handleResize = useCallback(() => {
    if (componentRef.current) {
      setComponentWidth(componentRef.current.offsetWidth)
      setIsMobileView(componentRef.current.offsetWidth < 1024)
    }
  }, [])

  useEffect(() => {
    const resizeObserver = new ResizeObserver(handleResize)
    if (componentRef.current) {
      resizeObserver.observe(componentRef.current)
    }
    handleResize()
    return () => {
      if (componentRef.current) {
        resizeObserver.unobserve(componentRef.current)
      }
    }
  }, [handleResize])

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10
  }

  const calculateGap = (width: number) => {
    const minWidth = 1024
    const maxWidth = 1456
    const minGap = 60
    const maxGap = 86
    if (width <= minWidth) return minGap
    if (width >= maxWidth) return Math.max(minGap, maxGap + 0.06018 * (width - maxWidth))
    return minGap + (maxGap - minGap) * ((width - minWidth) / (maxWidth - minWidth))
  }

  if (filteredProjects.length === 0) {
    return (
      <section id="projects" className="py-20 bg-black relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6">No Projects Found</h2>
            <p className="text-gray-300">No projects match the selected filter.</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="projects" className="py-20 bg-black relative overflow-hidden">
      {/* Background gradient */}
      <div className="inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 text-sm text-white mb-6">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
            <span>Featured Projects</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Our Latest
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-300 bg-clip-text text-transparent">
              Creations
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Explore our portfolio of cutting-edge software solutions that have transformed businesses across industries.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <FilterButton
              isActive={filter === 'all'}
              onClick={() => setFilter('all')}
            >
              View All ({getFilterCount('all')})
            </FilterButton>
            <FilterButton
              isActive={filter === 'shopify'}
              onClick={() => setFilter('shopify')}
            >
              Shopify ({getFilterCount('shopify')})
            </FilterButton>
            <FilterButton
              isActive={filter === 'webdev'}
              onClick={() => setFilter('webdev')}
            >
              Web Dev ({getFilterCount('webdev')})
            </FilterButton>
            <FilterButton
              isActive={filter === 'uiux'}
              onClick={() => setFilter('uiux')}
            >
              UI/UX ({getFilterCount('uiux')})
            </FilterButton>
            <FilterButton
              isActive={filter === 'mobile'}
              onClick={() => setFilter('mobile')}
            >
              Mobile ({getFilterCount('mobile')})
            </FilterButton>
            <FilterButton
              isActive={filter === 'dotnet'}
              onClick={() => setFilter('dotnet')}
            >
              .NET ({getFilterCount('dotnet')})
            </FilterButton>
          </div>
        </div>

        {/* Project Showcase */}
        <div
          ref={componentRef}
          className="w-full mx-auto antialiased font-sans"
          style={{
            backgroundColor: "transparent",
          }}
        >
          <div
            className="relative"
            style={{
              display: "grid",
              gridTemplateColumns: isMobileView ? "1fr" : "1fr 1fr",
              gap: `${calculateGap(componentWidth)}px`,
            }}
          >
            {/* Image Section */}
            <div className="w-full">
              <div className="relative" style={{ paddingTop: "73%" }}>
                <AnimatePresence>
                  {filteredProjects.map((project, index) => (
                    <motion.div
                      key={project.src}
                      initial={{
                        opacity: 0,
                        scale: 0.9,
                        z: -100,
                        rotate: randomRotateY(),
                      }}
                      animate={{
                        opacity: isActive(index) ? 1 : 0.7,
                        scale: isActive(index) ? 1 : 0.95,
                        z: isActive(index) ? 0 : -100,
                        rotate: isActive(index) ? 0 : randomRotateY(),
                        zIndex: isActive(index) ? 999 : filteredProjects.length + 2 - index,
                        y: isActive(index) ? [0, -80, 0] : 0,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.9,
                        z: 100,
                        rotate: randomRotateY(),
                      }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="absolute inset-0 origin-bottom"
                    >
                      <div
                        className={cn(
                          "relative h-full w-full group",
                          (project.type === 'gallery' || project.gallery.length > 0) ? "cursor-pointer" : ""
                        )}
                        style={{
                          borderRadius: "18px",
                          padding: "1px",
                          backgroundColor: "#33313d",
                          transition: "background-color 0.3s ease-in-out",
                        }}
                        onClick={(project.type === 'gallery' || project.gallery.length > 0) ? openGallery : undefined}
                      >
                        <div
                          className="relative h-full w-full overflow-hidden transition-all duration-300 flex items-center justify-center"
                          style={{
                            borderRadius: "17px",
                            background: project.type === 'github' 
                              ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)'
                              : 'transparent'
                          }}
                        >
                          {project.githubUrl ? (
                            <div className="flex flex-col items-center justify-center text-white">
                              <GitHubLogo className="w-32 h-32 mb-4 text-gray-300 group-hover:text-white transition-colors duration-300" />
                              <p className="text-lg font-semibold opacity-75 group-hover:opacity-100 transition-opacity duration-300">
                                View on GitHub
                              </p>
                            </div>
                          ) : (
                            <>
                              <img
                                src={project.src || "/placeholder.svg"}
                                alt={project.name}
                                className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
                              {(project.type === 'gallery' || project.gallery.length > 0) && (
                                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                  <p className="text-white text-sm font-medium">Click to view gallery</p>
                                </div>
                              )}
                            </>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

            {/* Content Section */}
            <div className="flex justify-between flex-col py-4 w-full">
              <motion.div
                key={active}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                <h3 className="text-2xl font-bold text-white mb-2">{filteredProjects[active].name}</h3>
                <p className="text-gray-400 text-sm mb-4">{filteredProjects[active].designation}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {filteredProjects[active].technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-white text-xs rounded-full border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <motion.p className="text-lg text-gray-300 leading-relaxed mb-8">
                  {filteredProjects[active].quote.split(" ").map((word, index) => (
                    <motion.span
                      key={index}
                      initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                      animate={{
                        filter: "blur(0px)",
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.2,
                        ease: "easeInOut",
                        delay: 0.02 * index,
                      }}
                      className="inline-block"
                    >
                      {word}&nbsp;
                    </motion.span>
                  ))}
                </motion.p>
              </motion.div>

              {/* Controls */}
              <div className={`flex gap-4 ${isMobileView ? "pt-12" : "md:pt-0"} w-full items-center`}>
                <CircularButton onClick={handlePrev} icon={<ChevronLeft className="w-5 h-5" />} />
                <CircularButton onClick={handleNext} icon={<ChevronRight className="w-5 h-5" />} />
                <ViewProjectButton 
                  onClick={handleViewProject} 
                  icon={getButtonIcon()} 
                  text={getButtonText()}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Modal */}
      <GalleryModal
        isOpen={galleryOpen}
        onClose={closeGallery}
        images={filteredProjects[active]?.gallery || []}
        projectName={filteredProjects[active]?.name || ""}
      />
    </section>
  )
}