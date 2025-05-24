import { Globe, Smartphone, Palette, Cloud, Server, Users, Linkedin, Twitter, Github } from "lucide-react"
import type { Project, Service, SkillCategory, ContactInfo, SocialLink } from "@/types"

export const PERSONAL_INFO = {
  name: "John Doe",
  domain: "johndoe.dev",
  email: "john@johndoe.dev",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  tagline: "hi, i'm Ritvik Sharma",
  roles: ["Full Stack Developer", "UI/UX Designer", "Frontend Engineer", "Creative Developer", "Problem Solver"],
  bio: [
    "I'm a passionate full-stack developer with over 5 years of experience creating beautiful, functional, and user-centered digital experiences. I specialize in modern web technologies and love bringing ideas to life through code.",
    "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge with the developer community.",
  ],
}

export const PROJECTS: Project[] = [
  {
    name: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution built with Next.js, featuring real-time inventory management, payment processing, and admin dashboard.",
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/johndoe/ecommerce",
    isLive: true,
    tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
  },
  {
    name: "Task Management App",
    description:
      "Collaborative task management application with real-time updates, team collaboration features, and advanced analytics.",
    demoUrl: null,
    githubUrl: "https://github.com/johndoe/taskmanager",
    isLive: false,
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
  },
  {
    name: "AI Content Generator",
    description:
      "AI-powered content generation tool that helps create blog posts, social media content, and marketing copy using OpenAI's GPT models.",
    demoUrl: "https://ai-content.example.com",
    githubUrl: "https://github.com/johndoe/ai-content",
    isLive: true,
    tech: ["Next.js", "OpenAI API", "Tailwind CSS", "Vercel"],
  },
]

export const SERVICES: Service[] = [
  {
    title: "Web Development",
    description:
      "Custom websites and web applications built with modern technologies like React, Next.js, and Node.js.",
    icon: <Globe className="w-8 h-8" />,
    features: ["Responsive Design", "SEO Optimization", "Performance Optimization", "Modern Frameworks"],
    price: "Starting at $2,500",
  },
  {
    title: "Mobile App Development",
    description: "Cross-platform mobile applications using React Native and Flutter for iOS and Android.",
    icon: <Smartphone className="w-8 h-8" />,
    features: ["Cross-Platform", "Native Performance", "App Store Deployment", "Push Notifications"],
    price: "Starting at $5,000",
  },
  {
    title: "UI/UX Design",
    description: "User-centered design solutions that create engaging and intuitive digital experiences.",
    icon: <Palette className="w-8 h-8" />,
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    price: "Starting at $1,500",
  },
  {
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure setup and deployment using AWS, Google Cloud, and Azure.",
    icon: <Cloud className="w-8 h-8" />,
    features: ["Infrastructure Setup", "CI/CD Pipelines", "Monitoring", "Security"],
    price: "Starting at $3,000",
  },
  {
    title: "API Development",
    description: "RESTful and GraphQL APIs with proper documentation, authentication, and rate limiting.",
    icon: <Server className="w-8 h-8" />,
    features: ["REST & GraphQL", "Authentication", "Documentation", "Testing"],
    price: "Starting at $2,000",
  },
  {
    title: "Consulting",
    description: "Technical consulting and code reviews to help optimize your existing projects and workflows.",
    icon: <Users className="w-8 h-8" />,
    features: ["Code Review", "Architecture Planning", "Performance Audit", "Team Training"],
    price: "Starting at $150/hour",
  },
]

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "Vue.js", icon: "💚" },
      { name: "TypeScript", icon: "🔷" },
      { name: "JavaScript", icon: "🟨" },
      { name: "Tailwind CSS", icon: "🎨" },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", icon: "🟢" },
      { name: "Python", icon: "🐍" },
      { name: "Express.js", icon: "🚀" },
      { name: "FastAPI", icon: "⚡" },
      { name: "GraphQL", icon: "🔗" },
      { name: "REST APIs", icon: "🌐" },
    ],
  },
  {
    title: "Database & Cloud",
    skills: [
      { name: "PostgreSQL", icon: "🐘" },
      { name: "MongoDB", icon: "🍃" },
      { name: "Redis", icon: "🔴" },
      { name: "AWS", icon: "☁️" },
      { name: "Docker", icon: "🐳" },
      { name: "Kubernetes", icon: "⚙️" },
    ],
  },
  {
    title: "Tools & Design",
    skills: [
      { name: "Figma", icon: "🎨" },
      { name: "Git", icon: "📝" },
      { name: "VS Code", icon: "💻" },
      { name: "Postman", icon: "📮" },
      { name: "Vercel", icon: "▲" },
      { name: "Netlify", icon: "🌐" },
    ],
  },
]

export const CONTACT_INFO: ContactInfo = {
  email: PERSONAL_INFO.email,
  phone: PERSONAL_INFO.phone,
  location: PERSONAL_INFO.location,
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/johndoe",
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/johndoe",
    icon: <Twitter className="w-5 h-5" />,
  },
  {
    name: "GitHub",
    url: "https://github.com/johndoe",
    icon: <Github className="w-5 h-5" />,
  },
]

export const NAVIGATION_ITEMS = ["Home", "About", "Projects", "Skills", "Services", "Contact"]
