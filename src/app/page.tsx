'use client'
import Header from "@/components/Header"
export default function Home() {

  return (
    <div className="bg-white">
      <Header />
      
      <main>
        <div className="mx-auto mt-5 max-w-8xl sm:mt-56 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden bg-gray-900 px-6 py-20 shadow-xl 
          sm:rounded-3xl sm:px-10 sm:py-24 md:px-12 lg:px-20">
            Test section
          </div>
        </div>
      </main>

      <div className="mx-auto mt-32 px-6 lg:px-8">
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