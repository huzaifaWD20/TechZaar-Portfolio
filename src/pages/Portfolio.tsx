import Layout from '../layouts/Layout'
import HeroSection from '../components/HeroSection'
import FeaturedProjects from "../components/FeaturedProjects"
import ServicesSection from "../components/ServicesSection"
import TechSection from "../components/TechSection"

const sampleProjects = [
  // Gallery Projects (with images)
  {
    name: "SightLine Golf - Strategy Mobile App",
    quote: "Comprehensive UI/UX prototype for golf strategy mobile app featuring dual-mode interaction system. Built dynamic mode-switching with Coach Mode for personalized insights and Fun Mode for social features. Created responsive mobile interface with course mapping layouts, hazard detection mockups, player analytics dashboard, and cross-platform compatibility.",
    designation: "Freelance UI/UX MVP - Angular Ionic Development",
    src: "/images/golf-app/img1.png",
    gallery: [
      "/images/golf-app/img1.png",
      "/images/golf-app/img2.png",
      "/images/golf-app/img3.png",
      "/images/golf-app/img4.png",
      "/images/golf-app/img5.png",
      "/images/golf-app/img6.png",
    ],
    technologies: ["Angular", "Ionic", "TypeScript", "SCSS", "Figma", "Responsive Design"],
    type: "gallery" as const,
  },
  {
    "name": "Wisdom Wellness - Health Community App",
    "quote": "Comprehensive mental and physical wellness community platform featuring intuitive UI/UX design replicated from Figma specifications. Built responsive mobile interface with community forums, wellness video library, event registration system, and user engagement features. Focused on creating seamless user experience for health-conscious individuals seeking community support and educational resources.",
    "designation": "Freelance UI/UX Development - Health & Wellness Mobile App",
    "src": "/images/wisdom-app/img1 (1).png",
    "gallery": [
      "/images/wisdom-app/img1 (2).png",
      "/images/wisdom-app/img1 (3).png",
      "/images/wisdom-app/img1 (4).png",
      "/images/wisdom-app/img1 (5).png",
      "/images/wisdom-app/img1 (6).png",
      "/images/wisdom-app/img1 (7).png",
      "/images/wisdom-app/img1 (8).png",
      "/images/wisdom-app/img1 (9).png",
      "/images/wisdom-app/img1 (10).png",
      "/images/wisdom-app/img1 (11).png",
      "/images/wisdom-app/img1 (12).png",
      "/images/wisdom-app/img1 (13).png",
      "/images/wisdom-app/img1 (14).png",
      "/images/wisdom-app/img1 (15).png",
      "/images/wisdom-app/img1 (16).png",
      "/images/wisdom-app/img1 (17).png",
    ],
    "technologies": ["Angular","SCSS","Typescript", "Ionic", "Figma", "UI/UX Design", "Responsive Design", "Mobile Development", "Design Systems"],
    type: "gallery" as const
  },
  // GitHub Projects (source code available)
  {
    name: "Real-Time Chat Application",
    quote: "Professional chat platform with WebSocket communication, presence indicators, and media message support. Engineered for scalability and performance using Node.js and MongoDB with Socket.io for real-time messaging capabilities. Features include user authentication, message history, file sharing, and responsive design for seamless cross-device communication.",
    designation: "Full-Stack Real-Time Communication Platform",
    src: "github-placeholder",
    gallery: [],
    technologies: ["Node.js", "Express.js", "WebSockets", "MongoDB", "Socket.io", "JWT"],
    type: "github" as const,
    githubUrl: "https://github.com/muneeeb12/chat-application",
  },
  {
    name: "University Carpool Platform",
    quote: "Comprehensive ride-sharing system designed for university students with intelligent route matching, push notifications, and real-time ride tracking. Implemented JWT-based authentication, location filtering within 1-3km radius, and SignalR for real-time communication between drivers and passengers with automated matching algorithms.",
    designation: "Full-Stack Ride Sharing Web Application",
    src: "github-placeholder",
    gallery: [],
    technologies: ["ASP.NET Core", "MySQL", "React.js", "SignalR", "Entity Framework", "JWT"],
    type: "github" as const,
    githubUrl: "https://github.com/muneeeb12/Carpool",
  },
  {
    name: "Credit-Based Phone Case System",
    quote: "Vendor-focused inventory management system with comprehensive credit tracking, automated reporting, and integrated payment processing. Built using ASP.NET Core MVC and React.js with SQL Server backend, featuring real-time inventory updates, customer management, financial reporting, and secure payment gateway integration deployed on IIS.",
    designation: "Enterprise Inventory Management System",
    src: "github-placeholder",
    gallery: [],
    technologies: ["ASP.NET Core MVC", "Entity Framework", "React.js", "SQL Server", "IIS", "Payment APIs"],
    type: "github" as const,
    githubUrl: "https://github.com/muneeeb12/CaseConnect",
  },
  {
    name: "Flecks Student Portal",
    quote: "Comprehensive student-faculty portal featuring assignment upload functionality, course tracking, grade management, and notification system. Implemented secure JWT-based user authentication with MySQL backend and React.js frontend, enabling seamless communication between students and faculty with role-based access control and academic progress tracking.",
    designation: "Educational Management Web Platform",
    src: "github-placeholder",
    gallery: [],
    technologies: ["Node.js", "React.js", "Express.js", "MySQL", "JWT", "Multer"],
    type: "github" as const,
    githubUrl: "https://github.com/muneeeb12/Flecks-student-portal",
  },
  {
    name: "QuickHire - Freelance Marketplace",
    quote: "Dual-sided marketplace connecting employers with freelancers through intelligent skill-matching algorithms and real-time communication. Features role-based authentication, CRUD profile management, CV uploads, swipe-based project discovery with advanced filtering, integrated video calling, and bidirectional review system with automated skill extraction.",
    designation: "Freelance Mobile App Project - Flutter/Dart Development",
    src: "/images/quick-hire/quickhirelogo.png",
    gallery: [],
    technologies: ["Flutter", "Dart", "Firebase", "WebRTC", "REST APIs", "Provider"],
    // type: "gallery" as const,
    type: "github" as const,
    githubUrl: "https://github.com/huzaifaWD20/QuickHire_FYP",
  },
  {
    name: "Tech Jewel - E-Commerce Platform",
    quote: "Scalable e-commerce platform for electronic components featuring seamless shopping experience, responsive UI, and optimized backend operations. Engineered robust API for product management, search functionality, cart operations, and order processing with secure transactions and efficient deployment architecture.",
    designation: "Freelance Full Stack Development Project",
    src: "/images/tech-jewel/tjlogo.jpg",
    gallery: [],
    technologies: ["React", "Node.js", "MongoDB", "Express.js", "Stripe", "AWS"],
    // type: "gallery" as const,
    type: "github" as const,
    githubUrl: "https://github.com/huzaifaWD20/react-ecommerce",
  }
]

const Portfolio = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturedProjects projects={sampleProjects} autoplay={false} />
      <ServicesSection />
      <TechSection />
    </Layout>
  )
}

export default Portfolio
