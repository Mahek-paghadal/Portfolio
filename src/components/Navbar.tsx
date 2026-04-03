import { useEffect, useRef, useState } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const menuRef = useRef<HTMLDivElement | null>(null)
  const sections = ['home', 'skills', 'works', 'contact', 'footer']

  useEffect(() => {
    if (!menuOpen) {
      return
    }

    const handleOutsideClick = (event: MouseEvent) => {
      if (!menuRef.current) {
        return
      }

      if (!menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [menuOpen])

  useEffect(() => {
    const sectionElements = sections
      .map((sectionId) => document.getElementById(sectionId))
      .filter((element): element is HTMLElement => Boolean(element))

    if (sectionElements.length === 0) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visibleEntries.length > 0) {
          const topSection = visibleEntries[0].target.id
          if (topSection === 'footer') {
            setActiveSection('contact')
            return
          }

          setActiveSection(topSection === 'contact' ? 'works' : topSection)
        }
      },
      {
        rootMargin: '-40% 0px -40% 0px',
        threshold: [0.2, 0.4, 0.6],
      }
    )

    sectionElements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [sections])

  const linkClass = (sectionId: string) =>
    `border-b-2 pb-1 transition-colors ${
      activeSection === sectionId
        ? 'border-cyan-300 text-cyan-300'
        : 'border-transparent text-slate-200 hover:text-cyan-400'
    }`

  return (
    <header className="fixed top-0 left-0 right-0 z-30 w-full bg-[#1f252d]/90 backdrop-blur" ref={menuRef}>
      <div className="flex h-[90px] items-center justify-between px-12 max-[900px]:px-6">
        <button
          type="button"
          className="text-[23px] font-semibold tracking-[0.6px] text-slate-100 font-[var(--display)] transition-transform duration-300 hover:scale-[1.04] hover:text-cyan-300"
        >
          MahekPaghadal
        </button>
        <nav className="hidden gap-8 text-[18px] uppercase tracking-[0.8px] min-[900px]:flex">
          <a
            href="#home"
            className={linkClass('home')}
            aria-current={activeSection === 'home' ? 'page' : undefined}
          >
            Home
          </a>
          <a
            href="#skills"
            className={linkClass('skills')}
            aria-current={activeSection === 'skills' ? 'page' : undefined}
          >
            Skills
          </a>
          <a
            href="#works"
            className={linkClass('works')}
            aria-current={activeSection === 'works' ? 'page' : undefined}
          >
            Work
          </a>
          <a
            href="#footer"
            className={linkClass('contact')}
            aria-current={activeSection === 'contact' ? 'page' : undefined}
          >
            Contact
          </a>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-200 transition-colors hover:text-cyan-300 min-[900px]:hidden"
          aria-label="Open menu"
          aria-controls="mobile-menu"
          aria-expanded={menuOpen ? 'true' : 'false'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="flex h-4 w-5 flex-col justify-between">
            <span className="h-[2px] w-full rounded bg-current"></span>
            <span className="h-[2px] w-full rounded bg-current"></span>
            <span className="h-[2px] w-full rounded bg-current"></span>
          </span>
        </button>
      </div>

      <nav
        id="mobile-menu"
        className={`absolute right-0 top-[74px] flex justify-end gap-6 rounded-b-xl bg-[#1f252d]/95 px-4 pb-4 pt-2 text-[13px] uppercase tracking-[0.8px] text-slate-200 shadow-[0_8px_20px_rgba(0,0,0,0.25)] transition-all min-[900px]:hidden ${
          menuOpen ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <a
          href="#home"
          className={linkClass('home')}
          aria-current={activeSection === 'home' ? 'page' : undefined}
          onClick={() => setMenuOpen(false)}
        >
          Home
        </a>
        <a
          href="#skills"
          className={linkClass('skills')}
          aria-current={activeSection === 'skills' ? 'page' : undefined}
          onClick={() => setMenuOpen(false)}
        >
          Skills
        </a>
        <a
          href="#works"
          className={linkClass('works')}
          aria-current={activeSection === 'works' ? 'page' : undefined}
          onClick={() => setMenuOpen(false)}
        >
          Work
        </a>
        <a
          href="#footer"
          className={linkClass('contact')}
          aria-current={activeSection === 'contact' ? 'page' : undefined}
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </a>
      </nav>
    </header>
  )
}

export default Navbar