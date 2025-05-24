import { PERSONAL_INFO } from "@/constants/data"

export function AboutSection() {
  return (
    <section id="about" className="relative z-10 px-4 lg:px-6 py-12 lg:py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                About Me
              </h2>
              <h3 className="text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                Crafting Digital Experiences with Passion
              </h3>
            </div>
            {PERSONAL_INFO.bio.map((paragraph, index) => (
              <p key={index} className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="relative">
            <div className="aspect-square bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-white/10">
              <div className="w-full h-full bg-gray-200/50 dark:bg-gray-800/50 rounded-xl flex items-center justify-center">
                <span className="text-gray-600 dark:text-gray-400">Your Photo Here</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
