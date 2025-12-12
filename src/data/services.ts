export interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    id: 1,
    icon: "code",
    title: "Web Development",
    description: "Building scalable and performant web applications with modern frameworks and best practices.",
  },
  {
    id: 2,
    icon: "mobile",
    title: "Mobile Apps",
    description: "Creating responsive mobile experiences that work seamlessly across all devices and platforms.",
  },
  {
    id: 3,
    icon: "design",
    title: "UI/UX Design",
    description: "Crafting intuitive and beautiful user interfaces that provide exceptional user experiences.",
  },
  {
    id: 4,
    icon: "api",
    title: "API Development",
    description: "Designing and implementing robust RESTful and GraphQL APIs for modern applications.",
  },
];
