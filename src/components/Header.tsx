import Link from "next/link"
import { House, SignIn, MagnifyingGlass } from "@phosphor-icons/react/dist/ssr"

export default function Header() {
  return (

    <header>
      <nav className="flex items-center justify-between p-5">
        <div className="flex">
          <Link href="/"><House size={32} /></Link>
        </div>
        <div className="flex space-x-4 text-gray-900">
          <Link href="/"><MagnifyingGlass size={32} /></Link>
          <Link href="/"><SignIn size={32} /></Link>
        </div>
      </nav>



    </header>
  );
};