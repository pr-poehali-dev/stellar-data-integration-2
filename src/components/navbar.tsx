import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

interface NavbarProps {
  onJoinClick?: () => void
}

export function Navbar({ onJoinClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] bg-black/95 backdrop-blur-md border-b border-yellow-600/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <img
              src="https://cdn.poehali.dev/projects/9bff6a1c-d424-4f9a-b610-2073412bedb3/bucket/b2c65e51-e78e-481c-8abd-dd5897eed045.jpg"
              alt="Логотип СИЛА"
              className="w-10 h-10 rounded-full object-cover ring-1 ring-yellow-500/40"
            />
            <h1 className="font-orbitron text-xl font-bold text-white">
              клуб саморазвития и поддержки<span className="gold-gradient-text"> СИЛА</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#features"
                className="font-geist text-white hover:text-yellow-400 transition-colors duration-200"
              >
                Направления
              </a>
              <a href="#applications" className="font-geist text-white hover:text-yellow-400 transition-colors duration-200">
                Как это работает
              </a>
              <a href="#faq" className="font-geist text-white hover:text-yellow-400 transition-colors duration-200">
                Вопросы
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button onClick={onJoinClick} className="bg-yellow-600 hover:bg-yellow-500 text-black font-geist border-0 font-semibold">Вступить в клуб</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-yellow-400 transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/98 border-t border-yellow-600/20">
              <a
                href="#features"
                className="block px-3 py-2 font-geist text-white hover:text-yellow-400 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Направления
              </a>
              <a
                href="#applications"
                className="block px-3 py-2 font-geist text-white hover:text-yellow-400 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Как это работает
              </a>
              <a
                href="#faq"
                className="block px-3 py-2 font-geist text-white hover:text-yellow-400 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Вопросы
              </a>
              <div className="px-3 py-2">
                <Button onClick={onJoinClick} className="w-full bg-yellow-600 hover:bg-yellow-500 text-black font-geist border-0 font-semibold">
                  Вступить в клуб
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}