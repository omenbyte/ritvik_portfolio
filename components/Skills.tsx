import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SKILL_CATEGORIES } from "@/constants/data"

const colorClasses = [
  "text-red-500",
  "text-green-500",
  "text-blue-500",
  "text-yellow-500",
  "text-purple-500",
  "text-pink-500",
  "text-indigo-500",
  "text-emerald-500",
  "text-orange-500",
  "text-cyan-500",
]

function getRandomColor(index: number) {
  return colorClasses[index % colorClasses.length]
}

export function SkillsSection() {
  return (
    <section id="skills" className="relative z-10 px-4 lg:px-6 py-12 lg:py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">
            Expertise
          </h2>
          <h3 className="text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h3>
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
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => {
                    const Icon = skill.icon
                    const color = getRandomColor(skillIndex + index * 10)
                    return (
                      <div key={skill.name} className="flex items-center space-x-4">
                        <span className={`text-3xl ${color}`}>
                          <Icon />
                        </span>
                        <span className="text-gray-800 dark:text-gray-200 font-medium">{skill.name}</span>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
