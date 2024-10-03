import Link from "next/link"
import { House, SignIn, MagnifyingGlass } from "@phosphor-icons/react/dist/ssr"

export default function Header() {
  return (

    <header className="absolute inset-x-0 top-0 z-50 text-gray-900 " >
      <nav className="flex items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/"><House size={32} /></Link>
        </div>
        <div className="flex space-x-4 text-gray-900 -mx-3">
          <Link href="/"><MagnifyingGlass size={32} /></Link>
          <Link href="/"><SignIn size={32} /></Link>
        </div>
      </nav>



    </header>
  );
};