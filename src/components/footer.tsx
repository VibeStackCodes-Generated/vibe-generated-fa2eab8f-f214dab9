/**
 * Footer Component
 * Responsive footer with sections and links
 * Uses brand colors: Primary (#5200ff), Accent (#f5e942)
 */
export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-auto w-full border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:gap-12">
          {/* Brand Section */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#5200ff] to-[#f5e942]">
                <span className="text-xs font-bold text-white">VS</span>
              </div>
              <span className="font-bold text-lg" style={{ color: '#5200ff' }}>
                VibeStack
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Building amazing experiences with React and TypeScript.
            </p>
          </div>

          {/* Product Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-gray-900 dark:text-white">Product</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-[#5200ff] dark:text-gray-400 dark:hover:text-[#f5e942] transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-[#5200ff] dark:text-gray-400 dark:hover:text-[#f5e942] transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-[#5200ff] dark:text-gray-400 dark:hover:text-[#f5e942] transition-colors"
                >
                  Security
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-[#5200ff] dark:text-gray-400 dark:hover:text-[#f5e942] transition-colors"
                >
                  Roadmap
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-gray-900 dark:text-white">Company</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-[#5200ff] dark:text-gray-400 dark:hover:text-[#f5e942] transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-[#5200ff] dark:text-gray-400 dark:hover:text-[#f5e942] transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-[#5200ff] dark:text-gray-400 dark:hover:text-[#f5e942] transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-[#5200ff] dark:text-gray-400 dark:hover:text-[#f5e942] transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-gray-900 dark:text-white">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-[#5200ff] dark:text-gray-400 dark:hover:text-[#f5e942] transition-colors"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-[#5200ff] dark:text-gray-400 dark:hover:text-[#f5e942] transition-colors"
                >
                  Terms
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-[#5200ff] dark:text-gray-400 dark:hover:text-[#f5e942] transition-colors"
                >
                  Cookies
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-[#5200ff] dark:text-gray-400 dark:hover:text-[#f5e942] transition-colors"
                >
                  License
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links and Copyright */}
        <div className="mt-8 flex flex-col gap-4 border-t border-gray-200 pt-8 dark:border-gray-800 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-gray-600 dark:text-gray-400">
            © {currentYear} VibeStack. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="#"
              className="text-gray-600 hover:text-[#5200ff] dark:text-gray-400 dark:hover:text-[#f5e942] transition-colors"
              aria-label="Twitter"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-[#5200ff] dark:text-gray-400 dark:hover:text-[#f5e942] transition-colors"
              aria-label="GitHub"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.546 2.914 1.186.092-.923.35-1.546.636-1.903-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.578 9.578 0 0110 4.817a9.6 9.6 0 012.502.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.578.688.48C17.137 18.195 20 14.44 20 10.017 20 4.484 15.522 0 10 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-[#5200ff] dark:text-gray-400 dark:hover:text-[#f5e942] transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.292-1.194-2.292-1.194 0-1.38.932-1.38 1.893v4.622h-2.65V9.25h2.611v1.002h.037c.364-.689 1.255-1.386 2.586-1.386 2.763 0 3.27 1.817 3.27 4.182v4.69zM5.337 7.433c-.661 0-1.192-.535-1.192-1.193 0-.658.531-1.192 1.192-1.192.659 0 1.193.534 1.193 1.192 0 .658-.534 1.193-1.193 1.193zm.991 13.205H4.338V9.25h1.99v11.388zM17.896 0H.104C.047 0 0 .047 0 .104v17.793C0 17.956.047 18 .104 18h17.793c.057 0 .104-.044.104-.104V.104C18 .047 17.956 0 17.896 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
