"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Cloud, Palette, Server, Smartphone, Globe, Users } from "lucide-react"
import { useTheme } from "next-themes"
import { AnimatedBlobs } from "@/components/layout/AnimatedBlobs"
import { SectionDivider } from "@/components/layout/SectionDivider"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { HeroSection } from "@/components/Hero"
import { AboutSection } from "@/components/About"
import { ProjectsSection } from "@/components/Projects"
import { SkillsSection } from "@/components/Skills"
import { ServicesSection } from "@/components/Services"
import { ContactSection } from "@/components/Contact"

export default function Portfolio() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentRole, setCurrentRole] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  // Contact form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const roles = ["Full Stack Developer", "UI/UX Designer", "Frontend Engineer", "Creative Developer", "Problem Solver"]
  const introText = "hi, I'm John Doe"

  // Projects data
  const projects = [
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

  // Services data
  const services = [
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

  // Skills data with icons
  const skillCategories = [
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

  // Typing effect
  useEffect(() => {
    if (!isTyping) return

    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= introText.length) {
        setDisplayedText(introText.slice(0, currentIndex))
        currentIndex++
      } else {
        setIsTyping(false)
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [isTyping])

  // Role changing effect
  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  // Scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Form validation
  const validateForm = () => {
    const errors: Record<string, string> = {}

    if (!formData.name.trim()) errors.name = "Name is required"
    if (!formData.email.trim()) errors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Email is invalid"
    if (!formData.subject.trim()) errors.subject = "Subject is required"
    if (!formData.message.trim()) errors.message = "Message is required"
    else if (formData.message.length < 10) errors.message = "Message must be at least 10 characters"

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  // Form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <AnimatedBlobs />
      <Header />

      <main>
        <HeroSection />
        <SectionDivider />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ServicesSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}
