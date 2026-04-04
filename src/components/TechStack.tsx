import { useState } from 'react'

const skillSections = [
  {
    title: 'Frontend',
    items: ['HTML, CSS', 'JavaScript', 'Flutter'],
  },
  {
    title: 'Backend',
    items: ['Java', 'Node.js', 'NestJS'],
  },
  {
    title: 'Databases',
    items: ['MongoDB', 'PostgreSQL', 'Supabase'],
  },
  {
    title: 'Tools & Platforms',
    items: ['GitHub', 'Swagger UI', 'Postman'],
  },
  {
    title: 'Soft Skills',
    items: ['Problem Solving', 'Team Collaboration', 'Adaptability'],
  },
]

function TechStack() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState<'up' | 'down'>('down')
  const activeSection = skillSections[activeIndex]

  const goNext = () => {
    setDirection('down')
    setActiveIndex((index) => (index + 1) % skillSections.length)
  }

  const goPrev = () => {
    setDirection('up')
    setActiveIndex((index) => (index - 1 + skillSections.length) % skillSections.length)
  }

  return (
    <section
      id="skills"
      className="relative w-full min-h-[85svh] overflow-hidden bg-[#212a34] px-16 py-20 max-[900px]:min-h-0 max-[900px]:px-6 max-[900px]:py-12"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,196,200,0.12),transparent_65%)]" />
      </div>

      <div className="relative z-10 grid w-full grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] items-center gap-8 max-[1100px]:grid-cols-1">
        <div className="relative max-w-[950px] max-[1100px]:max-w-none">
          <img
            src={`${import.meta.env.BASE_URL}images/lightbulb.png`}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute left-114 top-0 w-[90px] opacity-70"
          />
          <img
            src={`${import.meta.env.BASE_URL}images/Vector%20186.png`}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute left-114 bottom-4 w-[150px] opacity-60"
          />

          <h2 className="text-[40px] font-[var(--display)] font-bold text-white max-[900px]:text-[28px]">
            Skills
          </h2>

          <div className="mt-8">
            <p className="text-[30px] font-semibold text-cyan-300">{activeSection.title}</p>

            <div className="mt-6 flex items-start gap-6">
              <div
                key={activeIndex}
                className={`w-full max-w-[620px] flex-1 space-y-6 ${
                  direction === 'down' ? 'animate-skill-down' : 'animate-skill-up'
                }`}
              >
                {activeSection.items.map((label) => (
                  <div
                    key={label}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#1b222b] px-6 py-5"
                  >
                    <span className="h-11 w-1 rounded-full bg-cyan-400" />
                    <span className="text-[20px] font-medium text-slate-200">{label}</span>
                    <span className="ml-auto h-9 w-9 rounded-full border border-white/10 text-slate-200" />
                  </div>
                ))}
              </div>
              <div className="flex shrink-0 flex-col gap-4 self-center">
                <button
                  type="button"
                  onClick={goPrev}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl font-bold text-slate-200 transition hover:-translate-y-0.5 hover:border-cyan-300 hover:bg-cyan-500/15 hover:text-cyan-200 hover:shadow-[0_12px_24px_rgba(0,196,200,0.25)]"
                  aria-label="Previous skill section"
                >
                  ↑
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl font-bold text-slate-200 transition hover:-translate-y-0.5 hover:border-cyan-300 hover:bg-cyan-500/15 hover:text-cyan-200 hover:shadow-[0_12px_24px_rgba(0,196,200,0.25)]"
                  aria-label="Next skill section"
                >
                  ↓
                </button>
              </div>
            </div>

            <div className="mt-10 flex max-w-[620px] items-center justify-center gap-4">
              {skillSections.map((section, index) => (
                <span
                  key={section.title}
                  className={`h-4 w-4 rounded-full ${
                    index === activeIndex ? 'bg-cyan-400' : 'bg-white/20'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center -translate-x-8 max-[1100px]:hidden">
          {/* <img
            src={`${import.meta.env.BASE_URL}images/doodle%20items.png`}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute right-200 top-10 inset-0 m-auto w-[1350] opacity-70"
          /> */}
          <img
            src={`${import.meta.env.BASE_URL}images/Group%202373.png`}
            alt=""
            aria-hidden="true"
            className="relative z-10 w-[760px] max-w-full"
          />
          {/* <img
            src={`${import.meta.env.BASE_URL}images/Group%202350.png`}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute top-15 right-110 w-[90px] opacity-80"
          /> */}
        </div>
      </div>
      <style>{`
        @keyframes skillDown {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes skillUp {
          from { opacity: 0; transform: translateY(-12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-skill-down { animation: skillDown 0.6s ease-out both; }
        .animate-skill-up { animation: skillUp 0.6s ease-out both; }
      `}</style>
    </section>
  )
}

export default TechStack
