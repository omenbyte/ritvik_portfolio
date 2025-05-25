"use client"

import type React from "react"
import { Suspense } from "react";
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
        <Suspense fallback={<div>Loading contact form...</div>}>
          <ContactSection />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
