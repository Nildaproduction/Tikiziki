"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#music", label: "Music" },
  { href: "#videos", label: "Videos" },
  { href: "/store", label: "Store" },
  { href: "#press-kit", label: "Press Kit" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showNavbar, setShowNavbar] = useState(true)

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Navbar glass state
      setScrolled(currentScrollY > 40)

      // Hero section detection
      const heroSection = document.getElementById("home")

      if (heroSection) {
        const heroHeight = heroSection.offsetHeight

        // Always show navbar inside hero section
        if (currentScrollY < heroHeight - 120) {
          setShowNavbar(true)
        } else {
          // Hide on scroll down
          if (currentScrollY > lastScrollY) {
            setShowNavbar(false)
            setIsOpen(false)
          }

          // Show on scroll up
          else {
            setShowNavbar(true)
          }
        }
      }

      lastScrollY = currentScrollY
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`
        fixed
        top-0
        left-0
        right-0
        z-50

        transition-all
        duration-500

        ${
          showNavbar
            ? "translate-y-0 opacity-100"
            : "-translate-y-[140%] opacity-0"
        }

        ${
          scrolled
            ? "py-3"
            : "py-5"
        }
      `}
    >

      {/* Floating Glass Navbar */}
      <div className="container mx-auto px-4 md:px-6">

        <div
          className={`
            relative

            flex
            items-center
            justify-between

            px-6
            md:px-8

            rounded-[28px]

            border border-white/15

            backdrop-blur-3xl
            bg-white/[0.06]

            shadow-[0_8px_40px_rgba(255,255,255,0.06),0_10px_40px_rgba(0,0,0,0.45)]

            overflow-hidden

            transition-all
            duration-500

            ${
              scrolled
                ? "py-4 bg-white/[0.08] border-white/20"
                : "py-5"
            }
          `}
        >

          {/* Glow Effects */}
          <div className="absolute inset-0 pointer-events-none">

            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />

            <div className="absolute -top-20 -left-20 w-40 h-40 bg-primary/10 blur-3xl rounded-full opacity-70" />

            <div className="absolute -bottom-20 -right-20 w-52 h-52 bg-white/10 blur-3xl rounded-full opacity-60" />
          </div>

          {/* Logo */}
          <Link
            href="#home"
            className="
              relative
              z-10
              flex
              items-center
              gap-1
              group
            "
          >
            <span
              className="
                text-xl
                md:text-2xl
                font-black
                tracking-[-0.08em]

                text-white

                transition-all
                duration-300

                group-hover:text-primary
              "
            >
             <img src="/images/Tiki ziki Model.png" alt="Tiki Ziki Logo" />
            </span>

            <span
              className="
                text-primary
                text-3xl
                leading-none

                group-hover:scale-125

                transition-transform
                duration-300
              "
            >
              .
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-2 relative z-10">

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="
                  relative

                  px-5
                  py-3

                  rounded-2xl

                  text-[11px]
                  tracking-[0.22em]
                  uppercase
                  font-semibold

                  text-muted-foreground

                  border border-transparent

                  hover:text-white
                  hover:bg-white/[0.06]
                  hover:border-white/10

                  transition-all
                  duration-300

                  group
                "
              >

                <span
                  className="
                    absolute
                    inset-0

                    rounded-2xl

                    bg-gradient-to-br
                    from-white/10
                    to-transparent

                    opacity-0
                    group-hover:opacity-100

                    transition-opacity
                    duration-300
                  "
                />

                <span className="relative z-10">
                  {link.label}
                </span>

                <span
                  className="
                    absolute
                    left-4
                    right-4
                    bottom-2

                    h-[1px]

                    bg-gradient-to-r
                    from-transparent
                    via-primary
                    to-transparent

                    scale-x-0
                    group-hover:scale-x-100

                    transition-transform
                    duration-300
                  "
                />
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            className="
              md:hidden

              relative
              z-10

              flex
              items-center
              justify-center

              w-12
              h-12

              rounded-2xl

              border border-white/10
              bg-white/[0.05]

              backdrop-blur-xl

              text-muted-foreground

              hover:text-white
              hover:bg-white/[0.08]
              hover:border-white/20

              transition-all
              duration-300
            "
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden

          transition-all
          duration-500
          overflow-hidden

          ${
            isOpen
              ? "max-h-[500px] opacity-100 mt-4"
              : "max-h-0 opacity-0"
          }
        `}
      >

        <div className="container mx-auto px-4">

          <div
            className="
              relative

              overflow-hidden

              rounded-[30px]

              border border-white/15
              bg-white/[0.07]

              backdrop-blur-3xl

              shadow-[0_10px_50px_rgba(0,0,0,0.45)]

              p-4
            "
          >

            <div className="absolute inset-0 pointer-events-none">

              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />

              <div className="absolute -top-16 right-0 w-40 h-40 bg-primary/10 blur-3xl rounded-full" />

            </div>

            <div className="relative z-10 flex flex-col gap-2">

              {navLinks.map((link, i) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    setIsOpen(false)
                  }}
                  className="
                    group

                    relative

                    flex
                    items-center
                    gap-4

                    px-5
                    py-4

                    rounded-2xl

                    border border-transparent

                    text-sm
                    tracking-[0.2em]
                    uppercase
                    font-semibold

                    text-muted-foreground

                    hover:text-white
                    hover:bg-white/[0.06]
                    hover:border-white/10

                    transition-all
                    duration-300
                  "
                >

                  <span
                    className="
                      text-primary/50
                      text-xs
                      font-mono

                      group-hover:text-primary
                      transition-colors
                    "
                  >
                    0{i + 1}
                  </span>

                  <span className="relative z-10">
                    {link.label}
                  </span>

                </Link>
              ))}

            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
