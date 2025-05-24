export function SectionDivider() {
    return (
      <div className="relative py-12">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-300/20 dark:via-gray-700/20 to-transparent" />
        <div className="relative z-10 flex justify-center">
          <div className="w-px h-24 bg-gradient-to-b from-transparent via-gray-400 dark:via-gray-600 to-transparent" />
        </div>
      </div>
    )
  }
  