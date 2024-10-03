'use client'
import { House, UserPlus, SignIn, MagnifyingGlass } from "@phosphor-icons/react/dist/ssr"

export default function Home() {
  
  return (
    <div className="bg-white">
      
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1 text-gray-900">Header</div>
        </nav>
      </header>

      <main className="">
        <div className="mx-auto mt-5 max-w-8xl sm:mt-56 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden bg-gray-900 px-6 py-20 shadow-xl 
          sm:rounded-3xl sm:px-10 sm:py-24 md:px-12 lg:px-20">
            Test section
          </div>
        </div>
      </main>

      <div className="mx-auto mt-32 max-w-7xl px-6 lg:px-8">
        <footer
          aria-labelledby="footer-heading"
          className="relative border-t border-gray-900 py-24 sm:mt-56 sm:py-32"
        >
          
          <div className="xl:grid xl:grid-cols-3 xl:gap-8 text-gray-900">Footer

          </div>
        </footer>
      </div>
    </div>
  )
}