import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SKILL_CATEGORIES } from "@/constants/data"

export function SkillsSection() {
  return (
    <section id="skills" className="relative z-10 px-4 lg:px-6 py-12 lg:py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">
            Expertise
          </h2>
          <h3 className="text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">Skills & Technologies</h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I work with a diverse range of technologies and tools to bring ideas to life across the full stack.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((category, index) => (
            <Card
              key={index}
              className="bg-white/10 dark:bg-black/10 backdrop-blur-md border-white/20 dark:border-white/10"
            >
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="flex items-center space-x-3">
                      <span className="text-2xl">{skill.icon}</span>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
