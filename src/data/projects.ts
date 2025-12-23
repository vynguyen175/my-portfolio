export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  image: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Vizion",
    description: "AI-powered data visualization and analytics platform with interactive dashboards and insights.",
    longDescription: "Vizion is a sophisticated data science application built with Streamlit that provides powerful analytics and visualization capabilities. It enables users to interact with data through intuitive interfaces, generate insights, and make data-driven decisions with advanced AI/ML models.",
    category: "AI / Machine Learning",
    image: "/projects/vizion.jpg",
    techStack: ["Python", "Streamlit", "Pandas", "NumPy", "Machine Learning", "Data Visualization"],
    githubUrl: "https://github.com/vyn13",
    liveUrl: "https://vizion-byvynguyen.streamlit.app/",
    featured: true,
  },
  {
    id: 2,
    title: "ÉVO - Modern Luxury",
    description: "Premium e-commerce fashion platform featuring curated collections and seamless shopping experience.",
    longDescription: "ÉVO is a sophisticated luxury e-commerce platform offering timeless fashion pieces with a focus on quality and understated elegance. Features include product browsing, wishlist management, shopping cart, size guides, and a fully responsive design. The platform emphasizes minimalist aesthetics with collections for both men and women, showcasing premium materials and craftsmanship.",
    category: "E-Commerce",
    image: "/projects/evo.jpg",
    techStack: ["Next.js", "TypeScript", "React", "Tailwind CSS", "MongoDB", "Vercel"],
    githubUrl: "https://github.com/vyn13",
    liveUrl: "https://evo-byvynguyen.vercel.app/",
    featured: true,
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with payment integration and real-time inventory management.",
    longDescription: "Built a comprehensive e-commerce solution featuring user authentication, product catalog, shopping cart, payment processing via Stripe, and an admin dashboard for inventory management. Implemented real-time updates using WebSockets.",
    category: "Web Application",
    image: "/projects/ecommerce.jpg",
    techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.vercel.app",
    featured: true,
  },
  {
    id: 4,
    title: "AI Task Manager",
    description: "Smart task management app with AI-powered task prioritization and deadline suggestions.",
    longDescription: "Developed an intelligent task management system that uses machine learning to analyze task patterns and provide smart recommendations. Features include natural language processing for task creation, automatic categorization, and predictive analytics.",
    category: "AI / Machine Learning",
    image: "/projects/taskmanager.jpg",
    techStack: ["React", "Node.js", "OpenAI API", "MongoDB", "Express", "Redux"],
    githubUrl: "https://github.com/yourusername/ai-task-manager",
    liveUrl: "https://ai-tasks-demo.vercel.app",
    featured: false,
  },
  {
    id: 3,
    title: "Real-Time Chat Application",
    description: "Multi-room chat application with file sharing, emoji reactions, and typing indicators.",
    longDescription: "Created a real-time messaging platform with support for multiple chat rooms, direct messaging, file uploads, and live presence indicators. Implemented end-to-end encryption for secure communications.",
    category: "Web Application",
    image: "/projects/chat.jpg",
    techStack: ["Next.js", "Socket.io", "Redis", "AWS S3", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/yourusername/realtime-chat",
    liveUrl: "https://chat-demo.vercel.app",
    featured: true,
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "Beautiful weather application with detailed forecasts and interactive maps.",
    longDescription: "Built a comprehensive weather dashboard that displays current conditions, hourly and weekly forecasts, and interactive weather maps. Features location-based services and customizable alerts.",
    category: "Web Application",
    image: "/projects/weather.jpg",
    techStack: ["React", "TypeScript", "OpenWeather API", "Mapbox", "Chart.js"],
    githubUrl: "https://github.com/yourusername/weather-dashboard",
    liveUrl: "https://weather-demo.vercel.app",
    featured: false,
  },
  {
    id: 5,
    title: "Portfolio Analytics",
    description: "Analytics dashboard for tracking portfolio performance with interactive charts.",
    longDescription: "Developed an analytics platform for tracking investment portfolios with real-time data visualization, performance metrics, and historical trend analysis. Includes support for multiple asset types.",
    category: "Data Visualization",
    image: "/projects/analytics.jpg",
    techStack: ["Vue.js", "D3.js", "Firebase", "Cloud Functions", "Material UI"],
    githubUrl: "https://github.com/yourusername/portfolio-analytics",
    liveUrl: "https://analytics-demo.vercel.app",
    featured: false,
  },
  {
    id: 6,
    title: "Fitness Tracker",
    description: "Mobile-first fitness tracking app with workout plans and progress visualization.",
    longDescription: "Created a comprehensive fitness tracking application with customizable workout plans, exercise library, progress tracking, and social features. Includes integration with popular fitness wearables.",
    category: "Mobile App",
    image: "/projects/fitness.jpg",
    techStack: ["React Native", "Expo", "Firebase", "Redux", "Chart.js"],
    githubUrl: "https://github.com/yourusername/fitness-tracker",
    liveUrl: "https://fitness-demo.vercel.app",
    featured: false,
  },
];
