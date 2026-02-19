export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  category: string;
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
    techStack: ["Python", "Streamlit", "Pandas", "NumPy", "Machine Learning", "Data Visualization"],
    githubUrl: "https://github.com/vynguyen175/vizion",
    liveUrl: "https://vizion-byvynguyen.streamlit.app/",
    featured: true,
  },
  {
    id: 2,
    title: "ÉVO - Modern Luxury",
    description: "Premium e-commerce fashion platform featuring curated collections and seamless shopping experience.",
    longDescription: "ÉVO is a sophisticated luxury e-commerce platform offering timeless fashion pieces with a focus on quality and understated elegance. Features include product browsing, wishlist management, shopping cart, size guides, and a fully responsive design. The platform emphasizes minimalist aesthetics with collections for both men and women, showcasing premium materials and craftsmanship.",
    category: "E-Commerce",
    techStack: ["Next.js", "TypeScript", "React", "Tailwind CSS", "MongoDB", "Vercel"],
    githubUrl: "https://github.com/vynguyen175/Evo",
    liveUrl: "https://evo-byvynguyen.vercel.app/",
    featured: true,
  },
  {
    id: 3,
    title: "Netflix Recommendation Engine",
    description: "Intelligent movie and TV show recommendation system powered by machine learning algorithms.",
    longDescription: "Netflix Recommendation Engine is a content-based filtering system that analyzes user preferences and viewing patterns to suggest personalized Netflix content. Built with advanced machine learning techniques including collaborative filtering and content analysis, it provides accurate recommendations based on genres, ratings, and viewing history. Features an interactive Streamlit interface for seamless user experience. Note: If you need an API key to use this app, please contact me for more information.",
    category: "AI / Machine Learning",
    techStack: ["Python", "Streamlit", "Scikit-learn", "Pandas", "Machine Learning", "Recommendation Systems"],
    githubUrl: "https://github.com/vynguyen175/Netflix_Recommendation_Engine",
    liveUrl: "https://netflix-recommend-engine.streamlit.app",
    featured: true,
  },
  {
    id: 4,
    title: "Smart Inventory Management",
    description: "Comprehensive inventory management system with real-time tracking, reporting, and analytics.",
    longDescription: "Smart Inventory Management is a full-stack web application designed to streamline inventory operations. Built with ASP.NET Core MVC, it provides real-time inventory tracking, detailed reporting capabilities, and comprehensive analytics dashboards. Features include product management, stock level monitoring, automated alerts, and export functionality. The system leverages Entity Framework Core for data access and SQL Server for reliable data storage, with a responsive UI built using Razor views and Bootstrap.",
    category: "Full Stack",
    techStack: ["ASP.NET Core MVC", "C#", "Entity Framework Core", "SQL Server", "Razor", "Bootstrap", "Git/GitHub"],
    githubUrl: "https://github.com/vynguyen175/SmartInventoryManagement",
    liveUrl: "https://smartinventorymanagement-production.up.railway.app/",
    featured: true,
  },
  {
    id: 5,
    title: "Gameboxd",
    description: "Social platform for gamers to discover, track, and share their gaming experiences.",
    longDescription: "Gameboxd is a social networking platform designed for gaming enthusiasts, inspired by Letterboxd but tailored for the gaming community. Users can discover new games, track their gaming library, rate and review titles, and connect with fellow gamers. The platform features personalized recommendations, game lists, and social features that allow users to share their gaming journey and engage in community discussions.",
    category: "Full Stack",
    techStack: ["Next.js", "TypeScript", "React", "Tailwind CSS", "MongoDB", "Vercel"],
    githubUrl: "https://github.com/vynguyen175/Gameboxd-Web-App",
    liveUrl: "https://gameboxd-web-app.vercel.app/",
    featured: true,
  },
];
