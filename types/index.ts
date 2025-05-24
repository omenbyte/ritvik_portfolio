import type React from "react"
export interface Project {
  name: string
  description: string
  demoUrl: string | null
  githubUrl: string
  isLive: boolean
  tech: string[]
}

export interface Service {
  title: string
  description: string
  icon: React.ReactNode
  features: string[]
  price: string
}

export interface Skill {
  name: string
  icon: string
}

export interface SkillCategory {
  title: string
  skills: Skill[]
}

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export interface ContactInfo {
  email: string
  phone: string
  location: string
}

export interface SocialLink {
  name: string
  url: string
  icon: React.ReactNode
}
