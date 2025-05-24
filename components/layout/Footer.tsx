import { PERSONAL_INFO, CONTACT_INFO } from "@/constants/data"

export function Footer() {
  const quickLinks = ["About", "Projects", "Skills", "Services"]
  const services = ["Web Development", "Mobile Apps", "UI/UX Design", "Consulting"]

  return (
    <footer className="relative z-10 px-4 lg:px-6 py-12 border-t border-white/20 dark:border-white/10">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {PERSONAL_INFO.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Full-stack developer passionate about creating amazing digital experiences.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((item) => (
                <li key={item}>
                  <span className="text-gray-600 dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-600 dark:text-gray-300">{CONTACT_INFO.email}</li>
              <li className="text-gray-600 dark:text-gray-300">{CONTACT_INFO.phone}</li>
              <li className="text-gray-600 dark:text-gray-300">{CONTACT_INFO.location}</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 dark:border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            © 2024 {PERSONAL_INFO.name}. All rights reserved. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  )
}
