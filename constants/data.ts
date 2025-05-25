import { Globe, Smartphone, Palette, Cloud, Server, Users } from "lucide-react"
import { FaLinkedin, FaGithub, FaPython, FaJava, FaJs, FaReact, FaNodeJs, FaDatabase, FaAws, FaGoogle, FaGitAlt, FaLinux, FaNetworkWired, FaLock, FaShieldAlt, FaSearch, FaSkull, FaFish, FaCodeBranch, FaCogs, FaPlug, FaCube, FaCuttlefish, FaBook, FaMobileAlt, FaUserSecret, FaCalculator } from "react-icons/fa"
import type { Project, Service, SkillCategory, ContactInfo, SocialLink } from "@/types"

export const PERSONAL_INFO = {
  name: "Ritvik Sharma",
  domain: "ritviksharma.dev",
  email: "ritviksharma.dev@gmail.com",
  phone: null,
  location: "Manchester, United Kingdom",
  tagline: "Full Stack Developer & Cybersecurity Specialist",
  roles: ["Full Stack Developer", "Ethical Hacker", "Cloud Engineer", "Problem Solver"],
  bio: [
    "Cybersecurity specialist and full-stack developer with a strong academic foundation and industry experience in secure systems design, cloud infrastructure, and software development.",
    "Skilled in designing and deploying secure, scalable applications with a passion for innovation, performance, and clean architecture.",
    "Outside of coding, I enjoy exploring new places, following football, and diving into a good book. Always open to a great conversation!"
  ],
}

export const PROJECTS: Project[] = [
  {
    name: "Discern – AI Interviewer",
    description:
      "AI-powered interviewer platform using OpenAI API, Whisper, and secure AWS services for real-time, HIPAA-compliant interactions.",
    demoUrl: null,
    githubUrl: "#",
    isLive: false,
    tech: ["Next.js", "OpenAI API", "AWS", "Whisper", "Lambda", "EC2", "S3"],
  },
  {
    name: "Decentralised Security Framework",
    description:
      "Blockchain-based identity system using federated learning and behavioral analytics to enable scalable, adaptive cloud security.",
    demoUrl: null,
    githubUrl: "#",
    isLive: false,
    tech: ["Blockchain", "Federated Learning", "Identity Management", "Go"],
  },
  {
    name: "Diamond System – Systems Governance",
    description:
      "Designed governance framework for SPYONU, delivering risk analysis, metrics, and compliance dashboards.",
    demoUrl: null,
    githubUrl: "#",
    isLive: false,
    tech: ["System Architecture", "Compliance", "Risk Assessment"],
  },
  {
    name: "OneInvo",
    description:
      "Mobile app to digitise the concept of paper receipts over Point of Sale (POS).",
    demoUrl: null,
    githubUrl: "",
    isLive: false,
    tech: ["React Native", "AWS", "Python"],
  },
]

export const SERVICES: Service[] = [
  {
    title: "Web Development",
    description:
      "Custom websites and web applications built with modern technologies like React, Next.js, and Node.js.",
    icon: Globe,
    features: ["Responsive Design", "SEO Optimization", "Performance Optimization", "Modern Frameworks"],
    price: "Contact for Pricing",
  },
  {
    title: "Mobile App Development",
    description: "Cross-platform mobile applications using React Native for iOS and Android.",
    icon: Smartphone,
    features: ["Cross-Platform", "Native Performance", "App Store Deployment", "Push Notifications"],
    price: "Contact for Pricing",
  },
  {
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure setup and deployment using AWS, Google Cloud, and Azure.",
    icon: Cloud,
    features: ["Infrastructure Setup", "CI/CD Pipelines", "Monitoring", "Security"],
    price: "Contact for Pricing",
  },
  {
    title: "VAPT Report",
    description: "In-depth and rigorous vulnerability assessment and penetration testing with suggestion to patch code.",
    icon: Users,
    features: ["Vulnerability Testing", "Compliance", "Penetration Testing", "Quick Fixes"],
    price: "Contact for Pricing",
  },
]

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages & Frameworks",
    skills: [
      { name: "Python", icon: FaPython },
      { name: "C++", icon: FaCuttlefish },
      { name: "JavaScript", icon: FaJs },
      { name: "Go", icon: FaFish },
      { name: "React.js", icon: FaReact },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Next.js", icon: FaReact },
      { name: "React Native", icon: FaMobileAlt }
    ],
  },
  {
    title: "Database & Cloud",
    skills: [
      { name: "MongoDB", icon: FaDatabase },
      { name: "PostgreSQL", icon: FaDatabase },
      { name: "MySQL", icon: FaDatabase },
      { name: "AWS", icon: FaAws },
      { name: "GCP", icon: FaGoogle }
    ],
  },
  {
    title: "Security Tools & Techniques",
    skills: [
      { name: "Kali Linux", icon: FaLinux },
      { name: "Pentest", icon: FaShieldAlt },
      { name: "Ethical Hacking", icon: FaUserSecret },
      { name: "Cryptography", icon: FaLock },
      { name: "Burp Suite", icon: FaSearch },
      { name: "Nmap", icon: FaNetworkWired },
      { name: "Metasploit", icon: FaSkull },
      { name: "Wireshark", icon: FaFish },
      { name: "ISO 27001", icon: FaBook },
      { name: "Network Security", icon: FaCogs }
    ],
  },
  {
    title: "Other Tools",
    skills: [
      { name: "Data Structures & Algorithms", icon: FaCalculator},
      { name: "Git", icon: FaGitAlt },
      { name: "CI/CD", icon: FaCodeBranch },
      { name: "Blockchain", icon: FaCube },
      { name: "API", icon: FaPlug }
    ],
  },
]

export const CONTACT_INFO: ContactInfo = {
  email: PERSONAL_INFO.email,
  location: PERSONAL_INFO.location,
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ritvikdevelops/",
    icon: FaLinkedin,
  },
  {
    name: "GitHub",
    url: "https://github.com/omenbyte/",
    icon: FaGithub,
  },
]

export const NAVIGATION_ITEMS = ["Home", "About", "Projects", "Skills", "Services", "Contact"]
