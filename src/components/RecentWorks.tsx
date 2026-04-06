import { useEffect, useMemo, useRef, useState } from 'react'

const tags = ['All', 'Web', 'Mobile', 'Backend']

const works = [
  {
    title: 'SkillLink – ML Powered Marketplace',
    category: 'Web',
    description:
      'A full-stack, ML-powered marketplace connecting students with hyperlocal micro-jobs using skill-based matching.',
    techStack: ['React', 'Node.js', 'MongoDB', 'FastAPI', 'TF-IDF', 'JWT'],
    repo: 'https://github.com/Mahek-paghadal/SkillLink',
    features: [
      'JWT auth with roles',
      'TF-IDF recommendations',
      'Ranking, badges, reviews',
      'Client job workflows',
      'Resume uploads',
      'Real-time dashboards',
    ],
    image: 'images/skilllink.png',
  },
  {
    title: 'Depstar – Institute Application',
    category: 'Mobile',
    description:
      'A centralized institute app that streamlines academic updates, communication, and student resources.',
    techStack: ['Flutter', 'Supabase', 'REST APIs', 'PDF Viewer'],
    repo: 'https://github.com/Mahek-paghadal/depstar',
    features: [
      'Announcements & events',
      'Syllabus PDF viewer',
      'Timetable & exam notices',
      'Placement updates',
      'College email login',
      'Achievements & SOPs',
    ],
    image: 'images/depstar.png',
  },
  {
    title: 'Guruseva Printers – Office Management System',
    category: 'Mobile',
    description:
      'A mobile office management system replacing manual job tracking for a real client to improve workflow efficiency.',
    techStack: ['Flutter', 'Nest.js', 'MongoDB', 'Swagger UI'],
    repo: 'https://github.com/Mahek-paghadal/GurusevaPrinters',
    features: [
      'Role-based access',
      'Task assignment & tracking',
      'Secure approvals',
      'Progress dashboards',
      'Reduced delays',
      'Better coordination',
    ],
    image: 'images/guruseva.png',
  },
  {
    title: 'StockSage – Stock Prediction System',
    category: 'Web',
    description:
      'An AI-powered stock analysis platform with real-time data, LSTM predictions, and sentiment insights.',
    techStack: ['Next.js', 'Nest.js', 'MongoDB', 'Python', 'LSTM', 'FinBERT'],
    repo: 'https://github.com/Mahek-paghadal/stock-prediction-system',
    features: [
      'Real-time market data',
      'LSTM price prediction',
      'FinBERT sentiment analysis',
      'Personalized watchlists',
      'Prediction backtracking',
      'JWT auth',
    ],
    image: 'images/stocksage.png',
  },
  {
    title: 'Care Companion – Voice-First Elder Support',
    category: 'Mobile',
    description:
      'A voice-driven assistance app for elders with reminders, SOS alerts, mind games, news, and AI chat support.',
    techStack: ['Flutter', 'Dart', 'Firebase', 'Voice TTS/STT', 'AI API'],
    repo: 'https://github.com/Mahek-paghadal/CareCompanion',
    features: [
      'Voice-controlled tasks',
      'Medicine & to-do reminders',
      'Doctor appointment booking',
      'Mind games for cognitive health',
      'AI chatbot assistance',
      'SOS emergency alerts',
    ],
    image: 'images/carecompanion.png',
  },
  {
    title: 'RailEase – Train Travel Web Platform',
    category: 'Web',
    description:
      'A modern train travel experience covering search, booking, seat selection, payments, and onboard services.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Firebase Auth'],
    repo: 'https://github.com/Mahek-paghadal/RailEase',
    features: [
      'Train search & booking',
      'Interactive seat selection',
      'Food ordering & entertainment',
      'Route planning',
      'Account authentication',
    ],
    image: 'images/railease.png',
  },
  {
    title: 'Distributed Job Queue System — Async Processing Engine',
    category: 'Backend',
    description:
      'A production-grade background job processing system for async tasks, retries, and real-time notifications without managed services.',
    techStack: ['Node.js', 'Express', 'Redis', 'BullMQ', 'PostgreSQL', 'Swagger UI'],
    repo: 'https://github.com/Mahek-paghadal/JobQueueSystem',
    features: [
      'Async job submission (202)',
      'Priority queues with workers',
      'Exponential backoff retries',
      'Dead Letter Queue replay',
      'Webhook callbacks',
      'Live metrics API',
    ],
    image: 'images/jobqueuesystem.png',
  },
]

const shuffleWorks = <T,>(items: T[]) => {
  const result = [...items]
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[result[i], result[j]] = [result[j], result[i]]
  }
  return result
}

function RecentWorks() {
  const [activeTag, setActiveTag] = useState('All')
  const [columns, setColumns] = useState(3)
  const [visibleCount, setVisibleCount] = useState(6)
  const [inView, setInView] = useState(false)
  const [selectedWork, setSelectedWork] = useState<(typeof works)[number] | null>(null)
  const sectionRef = useRef<HTMLElement | null>(null)

  const filteredWorks = useMemo(() => {
    const list = activeTag === 'All' ? works : works.filter((work) => work.category === activeTag)
    return shuffleWorks(list)
  }, [activeTag])

  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth

      if (width <= 700) {
        setColumns(1)
        return
      }

      if (width <= 1024) {
        setColumns(2)
        return
      }

      setColumns(3)
    }

    updateColumns()
    window.addEventListener('resize', updateColumns)

    return () => window.removeEventListener('resize', updateColumns)
  }, [])

  useEffect(() => {
    setVisibleCount(columns * 2)
  }, [columns, activeTag])

  useEffect(() => {
    const section = sectionRef.current

    if (!section) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
        }
      },
      { threshold: 0.2 },
    )

    observer.observe(section)

    return () => observer.disconnect()
  }, [])

  const visibleWorks = useMemo(() => filteredWorks.slice(0, visibleCount), [filteredWorks, visibleCount])
  const canLoadMore = visibleCount < filteredWorks.length

  return (
    <section
      id="works"
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#212a34] px-12 py-20 max-[900px]:px-6 max-[900px]:py-16"
    >
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,196,200,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[url('images/doodles%20mixed%20round.png')] bg-[length:220px_220px] opacity-60" />
      </div>

      <div className="relative z-10 w-full">
        <div className="flex flex-col gap-6">
          <h2 className="text-[44px] font-[var(--display)] font-bold text-white max-[900px]:text-[28px]">
            My <span className="text-cyan-400">works</span>
          </h2>

          <div className="flex flex-wrap gap-3">
            {tags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setActiveTag(tag)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                  activeTag === tag
                    ? 'bg-cyan-500 text-[#0b2b33] shadow-[0_10px_20px_rgba(0,196,200,0.35)]'
                    : 'bg-white/10 text-slate-200 hover:bg-white/20'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-8 max-[1024px]:grid-cols-2 max-[700px]:grid-cols-1">
          {visibleWorks.map((work, index) => (
            <article
              key={work.title}
              className={`group relative overflow-hidden rounded-3xl border border-white/5 bg-white/5 p-6 shadow-[0_20px_40px_rgba(10,16,24,0.35)] transition-transform duration-300 hover:-translate-y-2 ${
                inView ? 'animate-[fadeUp_0.5s_ease-out_both]' : 'opacity-0 translate-y-3'
              }`}
              style={inView ? { animationDelay: `${index * 80}ms` } : undefined}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,196,200,0.12),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative transition duration-300 group-hover:blur-[2px]">
                <div className="relative flex min-h-[210px] items-center justify-center overflow-hidden rounded-2xl bg-[#1a222b]">
                  <img
                    src={`${import.meta.env.BASE_URL}${work.image}`}
                    alt={work.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 text-xs uppercase tracking-[0.35em] text-cyan-200/80">
                    {work.category}
                  </span>
                </div>

                <div className="relative mt-6">
                  <h3 className="text-lg font-semibold text-white">{work.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">
                    {work.description}
                  </p>
                </div>
              </div>

              <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <button
                  type="button"
                  onClick={() => setSelectedWork(work)}
                  className="pointer-events-auto rounded-md bg-cyan-500 px-5 py-2 text-sm font-semibold text-[#0b2b33] shadow-[0_12px_24px_rgba(0,196,200,0.35)]"
                >
                  Show more
                </button>
              </div>
            </article>
          ))}
        </div>

        {canLoadMore ? (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setVisibleCount((count) => count + columns * 2)}
              className="rounded-full border border-cyan-400/40 px-6 py-2 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:text-cyan-100"
            >
              Load more
            </button>
          </div>
        ) : null}
      </div>

      {selectedWork ? (
        <div
          className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 px-6 py-10"
          role="presentation"
          onClick={() => setSelectedWork(null)}
        >
          <div
            className="relative w-full max-w-[860px] max-h-[85vh] overflow-y-auto rounded-3xl border border-white/10 bg-[#1b222b] p-8 shadow-[0_30px_60px_rgba(0,0,0,0.45)]"
            role="dialog"
            aria-modal="true"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedWork(null)}
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-200 hover:border-cyan-300 hover:text-cyan-200"
              aria-label="Close"
            >
              ✕
            </button>

            <h3 className="text-xl font-semibold text-white">{selectedWork.title}</h3>
            <p className="mt-2 text-sm text-slate-300">{selectedWork.description}</p>

            <div className="mt-5">
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Tech stack</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {selectedWork.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-cyan-400/30 px-3 py-1 text-xs text-cyan-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-5">
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Key features</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                {selectedWork.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={selectedWork.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-cyan-500 px-4 py-2 text-sm font-semibold text-[#0b2b33] shadow-[0_12px_24px_rgba(0,196,200,0.35)]"
              >
                View code
              </a>
              <span className="rounded-md border border-white/10 px-4 py-2 text-xs text-slate-400">
                Category: {selectedWork.category}
              </span>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  )
}

export default RecentWorks
