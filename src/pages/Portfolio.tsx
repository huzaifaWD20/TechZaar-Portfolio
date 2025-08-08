import Layout from '../layouts/Layout'
import HeroSection from '../components/HeroSection'
import FeaturedProjects from "../components/FeaturedProjects"
import ServicesSection from "../components/ServicesSection"
import TechSection from "../components/TechSection"

const sampleProjects = [
  // Shopify Projects
  {
    name: "AU Baby - Premium Baby Products Store",
    quote: "Luxury Shopify e-commerce platform for sustainable baby products featuring custom product pages, transparent supply chain tracking with QR code integration, and premium brand storytelling. Built responsive design with advanced product filtering, custom collection pages, subscription management, and seamless checkout experience optimized for conversion and customer trust.",
    designation: "Premium Shopify Store Development & Custom Features",
    src: "/images/au-baby/aubaby-hero.jpg",
    gallery: [],
    technologies: ["Shopify Liquid", "JavaScript", "CSS3", "Shopify APIs", "QR Integration", "Custom Themes"],
    type: "shopify" as const,
    link: "https://www.aubabyshop.com",
  },
  {
    name: "Black Lava Vape - Hawaii's Premier Vape Shop",
    quote: "Full-service Shopify store for Hawaii's leading vape retailer featuring extensive product catalog with 600+ items, custom flavor testing system, and inventory management. Implemented advanced search functionality, product comparison tools, age verification system, and mobile-optimized experience for seamless online-to-retail integration.",
    designation: "Complete Shopify E-commerce Solution with Custom Features",
    src: "/images/black-lava/blacklava-home.jpg",
    gallery: [],
    technologies: ["Shopify Plus", "Liquid", "JavaScript", "Age Verification APIs", "Inventory Management", "Payment Gateways"],
    type: "shopify" as const,
    link: "https://www.blacklavavape.com",
  },
  {
    name: "Gallion Sports Nutrition - Fitness Supplement Store",
    quote: "Dynamic Shopify store for premium sports nutrition retailer with custom supplement finder, expert guidance integration, and multi-location inventory system. Features personalized product recommendations, subscription management, nutritional calculator tools, and seamless integration with physical store locations for unified customer experience.",
    designation: "Advanced Shopify Development with Custom Nutrition Tools",
    src: "/images/gallion/gallion-home.jpg",
    gallery: [],
    technologies: ["Shopify", "Custom Apps", "Subscription APIs", "Location Integration", "Nutritional APIs", "Custom Calculators"],
    type: "shopify" as const,
    link: "https://gallionsportsnutrition.com",
  },
  {
    name: "Little Creek Montana - Premium Meat Delivery",
    quote: "Artisan Shopify store for regenerative agriculture meat producer featuring farm-to-table storytelling, custom meat cut configurator, and subscription box management. Built with advanced inventory tracking for limited seasonal products, custom shipping calculators for perishable goods, and integrated customer education portal about regenerative farming practices.",
    designation: "Specialized Shopify Store with Custom Agriculture Features",
    src: "/images/little-creek/little-creek-home.jpg",
    gallery: [],
    technologies: ["Shopify", "Custom Shipping APIs", "Inventory Management", "Subscription Systems", "Cold Chain Integration"],
    type: "shopify" as const,
    link: "https://littlecreekmontana.com",
  },
  
  // Mobile Development Projects
  {
    name: "Golf - Strategy Mobile App",
    quote: "Comprehensive UI/UX prototype for golf strategy mobile app featuring dual-mode interaction system. Built dynamic mode-switching with Coach Mode for personalized insights and Fun Mode for social features. Created responsive mobile interface with course mapping layouts, hazard detection mockups, player analytics dashboard, and cross-platform compatibility.",
    designation: "Mobile UI/UX MVP - Angular Ionic Development",
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
    type: "mobile" as const,
  },
  {
    name: "QuickHire - Freelance Marketplace",
    quote: "Dual-sided marketplace connecting employers with freelancers through intelligent skill-matching algorithms and real-time communication. Features role-based authentication, CRUD profile management, CV uploads, swipe-based project discovery with advanced filtering, integrated video calling, and bidirectional review system with automated skill extraction.",
    designation: "Cross-Platform Mobile App - Flutter/Dart Development",
    src: "/images/quick-hire/quickhirelogo.png",
    gallery: [
      "/images/quick-hire/img1.jpg",
      "/images/quick-hire/img2.jpg",
      "/images/quick-hire/img3.jpg",
      "/images/quick-hire/img4.jpg",
      "/images/quick-hire/img5.jpg",
      "/images/quick-hire/img6.jpg",
      "/images/quick-hire/img7.jpg",
      "/images/quick-hire/img8.jpg",
      "/images/quick-hire/img9.jpg",
    ],
    technologies: ["Flutter", "Dart", "Firebase", "WebRTC", "REST APIs", "Provider"],
    type: "mobile" as const,
  },
  {
    name: "Wisdom Wellness - Health Community App",
    quote: "Comprehensive mental and physical wellness community platform featuring intuitive UI/UX design replicated from Figma specifications. Built responsive mobile interface with community forums, wellness video library, event registration system, and user engagement features. Focused on creating seamless user experience for health-conscious individuals seeking community support and educational resources.",
    designation: "Health & Wellness Mobile App - Angular Ionic Development",
    src: "/images/wisdom-app/img1 (1).png",
    gallery: [
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
    technologies: ["Angular","SCSS","Typescript", "Ionic", "Figma", "UI/UX Design", "Responsive Design", "Mobile Development", "Design Systems"],
    type: "mobile" as const
  },

  // .NET Development Projects
  {
    name: "University Carpool Platform",
    quote: "Comprehensive ride-sharing system designed for university students with intelligent route matching, push notifications, and real-time ride tracking. Implemented JWT-based authentication, location filtering within 1-3km radius, and SignalR for real-time communication between drivers and passengers with automated matching algorithms.",
    designation: "Full-Stack .NET Ride Sharing Web Application",
    src: "/images/carpool-sys/carpool-logo.png",
    gallery: [
      "/images/carpool-sys/img (1).jpg",
      "/images/carpool-sys/img (2).jpg",
      "/images/carpool-sys/img (3).jpg",
      "/images/carpool-sys/img (4).jpg",
      "/images/carpool-sys/img (5).jpg",
      "/images/carpool-sys/img (6).jpg",
      "/images/carpool-sys/img (7).jpg",
    ],
    technologies: ["ASP.NET Core", "MySQL", "React.js", "SignalR", "Entity Framework", "JWT"],
    type: "dotnet" as const
  },
  {
    name: "Credit-Based Phone Case System",
    quote: "Vendor-focused inventory management system with comprehensive credit tracking, automated reporting, and integrated payment processing. Built using ASP.NET Core MVC and React.js with SQL Server backend, featuring real-time inventory updates, customer management, financial reporting, and secure payment gateway integration deployed on IIS.",
    designation: "Enterprise .NET Inventory Management System",
    src: "/images/case-connect/case-logo.png",
    gallery: [
      "/images/case-connect/img (1).jpg",
      "/images/case-connect/img (2).jpg",
      "/images/case-connect/img (3).jpg",
      "/images/case-connect/img (4).jpg",
      "/images/case-connect/img (5).jpg",
      "/images/case-connect/img (6).jpg",
      "/images/case-connect/img (7).jpg",
      "/images/case-connect/img (8).jpg",
    ],
    technologies: ["ASP.NET Core MVC", "Entity Framework", "React.js", "SQL Server", "IIS", "Payment APIs"],
    type: "dotnet" as const,
  },

  // Web Development Projects
  {
    name: "Tech Jewel - E-Commerce Platform",
    quote: "Scalable e-commerce platform for electronic components featuring seamless shopping experience, responsive UI, and optimized backend operations. Engineered robust API for product management, search functionality, cart operations, and order processing with secure transactions and efficient deployment architecture.",
    designation: "Full Stack E-commerce Development Project",
    src: "/images/tech-jewel/tjlogo.jpg",
    gallery: [
      "/images/tech-jewel/img1.png",
      "/images/tech-jewel/img2.png",
      "/images/tech-jewel/img3.png",
      "/images/tech-jewel/img4.png",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Express.js", "Stripe", "AWS"],
    type: "webdev" as const,
  },
  {
    name: "Real-Time Chat Application",
    quote: "Professional chat platform with WebSocket communication, presence indicators, and media message support. Engineered for scalability and performance using Node.js and MongoDB with Socket.io for real-time messaging capabilities. Features include user authentication, message history, file sharing, and responsive design for seamless cross-device communication.",
    designation: "Full-Stack Real-Time Communication Platform",
    src: "github-placeholder",
    gallery: [],
    technologies: ["Node.js", "Express.js", "WebSockets", "MongoDB", "Socket.io", "JWT"],
    type: "webdev" as const,
    githubUrl: "https://github.com/",
  },
  {
    name: "Flecks Student Portal",
    quote: "Comprehensive student-faculty portal featuring assignment upload functionality, course tracking, grade management, and notification system. Implemented secure JWT-based user authentication with MySQL backend and React.js frontend, enabling seamless communication between students and faculty with role-based access control and academic progress tracking.",
    designation: "Educational Management Web Platform",
    src: "github-placeholder",
    gallery: [],
    technologies: ["Node.js", "React.js", "Express.js", "MySQL", "JWT", "Multer"],
    type: "webdev" as const,
    githubUrl: "https://github.com/",
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