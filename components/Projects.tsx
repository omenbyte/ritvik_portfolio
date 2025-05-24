"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import { PROJECTS } from "@/constants/data"

export function ProjectsSection() {
  return (
    <section id="projects" className="relative z-10 px-4 lg:px-6 py-12 lg:py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">
            My Work
          </h2>
          <h3 className="text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for creating amazing digital
            experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <Card
              key={index}
              className="bg-white/10 dark:bg-black/10 backdrop-blur-md border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300"
            >
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">{project.name}</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    disabled={!project.isLive}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {project.isLive ? "View Demo" : "Coming Soon"}
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-white/10 dark:bg-black/10 backdrop-blur-md border-white/30 dark:border-white/10"
                    onClick={() => window.open(project.githubUrl, "_blank")}
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
