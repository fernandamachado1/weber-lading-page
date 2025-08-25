'use client'

import { useEffect, useState } from "react"
import { Button } from "./ui/button"
import { Menu, X } from "lucide-react"

const NAV = [
    { id: "home", label: "Início" },
    { id: "experience", label: "Experiência" },
    { id: "services", label: "Serviços" },
    { id: "results", label: "Resultados" },
    { id: "contact", label: "Contato" },
]

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    // sombra ao rolar
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8)
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id)
        if (el) {
            el.scrollIntoView({ behavior: "smooth" })
            setIsMenuOpen(false)
        }
    }

    return (
        <header
            style={{
                background: scrolled ? "var(--background)" : "transparent",
                color: "var(--foreground)"
            }}
            className="fixed top-0 left-0 right-0 z-50 transition"
        >
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <span className="text-weber-orange text-2xl font-bold">W</span>
                        <span className="text-weber-navy text-xl font-bold">EBER</span>
                        <span className="text-xs text-muted-foreground hidden sm:block">
                            SOLUÇÕES EM LOGÍSTICA
                        </span>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {NAV.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className="text-weber-navy hover:text-weber-orange transition-colors font-medium"
                            >
                                {item.label}
                            </button>
                        ))}
                    </nav>

                    {/* CTA desktop */}
                    <div className="hidden md:block">
                        <Button
                            onClick={() => scrollToSection("contact")}
                            className="bg-gradient-to-r from-weber-orange to-red-600 text-white font-semibold"
                        >
                            Fale Conosco
                        </Button>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 text-weber-navy"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden absolute top-16 left-3 right-3 bg-white/95 backdrop-blur-sm shadow-lg rounded-2xl border p-4">
                        <nav className="flex flex-col space-y-4">
                            {NAV.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className="text-weber-navy hover:text-weber-orange transition-colors font-medium text-left"
                                >
                                    {item.label}
                                </button>
                            ))}
                            <Button
                                onClick={() => scrollToSection("contact")}
                                className="bg-gradient-to-r from-weber-orange to-red-600 text-white font-semibold w-full"
                            >
                                Fale Conosco
                            </Button>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    )
}
