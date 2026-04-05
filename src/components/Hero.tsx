import { useEffect, useState } from 'react'

export default function Hero() {
  const [showMan, setShowMan] = useState(true)
  const [typedName, setTypedName] = useState('')
  const fullName = 'MAHEK PAGHADAL'
  const socialLinks = [
    {
      href: 'https://github.com/Mahek-paghadal',
      label: 'GitHub',
      path:
        'M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.23.68-.5 0-.25-.01-1.07-.02-1.94-2.78.62-3.37-1.23-3.37-1.23-.45-1.2-1.1-1.52-1.1-1.52-.9-.64.07-.63.07-.63 1 .07 1.52 1.05 1.52 1.05.9 1.58 2.36 1.12 2.94.86.09-.66.35-1.12.64-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.32.1-2.75 0 0 .84-.28 2.75 1.05.8-.23 1.66-.34 2.52-.34s1.72.12 2.52.34c1.9-1.33 2.75-1.05 2.75-1.05.55 1.43.2 2.49.1 2.75.64.72 1.03 1.64 1.03 2.76 0 3.94-2.34 4.8-4.57 5.06.36.32.68.95.68 1.92 0 1.39-.01 2.51-.01 2.85 0 .28.18.6.69.5A10.03 10.03 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z',
    },
    {
      href: 'https://www.linkedin.com/in/mahek-paghadal-8124b328b/',
      label: 'LinkedIn',
      path:
        'M20.45 2H3.55C2.7 2 2 2.7 2 3.56v16.88C2 21.3 2.7 22 3.55 22h16.9c.86 0 1.55-.7 1.55-1.56V3.56C22 2.7 21.3 2 20.45 2ZM8.2 19H5.5V9.75h2.7V19ZM6.85 8.6a1.57 1.57 0 1 1 0-3.14 1.57 1.57 0 0 1 0 3.14ZM19 19h-2.7v-4.5c0-1.07-.02-2.45-1.5-2.45-1.5 0-1.73 1.17-1.73 2.37V19h-2.7V9.75h2.6v1.26h.04c.36-.68 1.25-1.4 2.58-1.4 2.76 0 3.27 1.82 3.27 4.2V19Z',
    },
    {
      href: 'https://leetcode.com/u/mahek824201/',
      label: 'LeetCode',
      path:
        'M14.35 3.3a1 1 0 0 1 1.42 0l2.83 2.83a1 1 0 0 1-1.42 1.42l-2.12-2.12-5.4 5.4a3 3 0 0 0 0 4.24l2.22 2.22a3 3 0 0 0 4.24 0l2.12-2.12a1 1 0 1 1 1.42 1.42l-2.83 2.83a5 5 0 0 1-7.07 0l-2.22-2.22a5 5 0 0 1 0-7.07l5.4-5.4-2.12-2.12a1 1 0 0 1 0-1.42Z',
    },
  ]

  useEffect(() => {
    let currentIndex = 0
    const interval = setInterval(() => {
      currentIndex += 1
      setTypedName(fullName.slice(0, currentIndex))

      if (currentIndex >= fullName.length) {
        clearInterval(interval)
      }
    }, 120)

    return () => clearInterval(interval)
  }, [])

  return (
    <main
      id="home"
      className="scroll-mt-[94px] grid min-h-[95svh] w-full grid-cols-2 items-center gap-8 px-16 max-[1100px]:gap-6 max-[1100px]:grid-cols-[1.05fr_0.95fr] max-[900px]:min-h-[95svh] max-[900px]:grid-cols-[0.8fr_1.2fr] max-[900px]:gap-4 max-[900px]:px-6 max-[900px]:pt-0 max-[900px]:mt-0"
    >
      <div className="relative pt-0 pl-28 animate-[fadeUp_0.9s_ease-out_both] max-[900px]:pl-0 max-[900px]:flex max-[900px]:flex-col max-[900px]:justify-center">
        <img
          src={`${import.meta.env.BASE_URL}images/Vector%20187.png`}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -left-8 top-18 w-[120px] opacity-60 max-[900px]:hidden"
        />
        <h1 className="name-glossy whitespace-nowrap text-[clamp(34px,5vw,64px)] leading-[0.95] tracking-[2px] font-[var(--display)] font-bold max-[900px]:mt-4 max-[900px]:text-[clamp(22px,6vw,36px)] max-[900px]:leading-tight">
          <span className="typing-cursor">
            {typedName}
            <span className="typing-caret" aria-hidden="true" />
          </span>
        </h1>
        <p className="mt-6 max-w-[700px] text-[23px] leading-10 text-slate-300 max-[900px]:text-[15px] max-[900px]:leading-6 max-[900px]:max-w-[275px]">
          I am a Backend and Flutter Developer focused on building scalable web and mobile applications using Node.js,
          Nest.js, and Flutter. I enjoy solving real-world problems through clean backend architecture and intuitive user
          experiences. As a team player with strong adaptability, I continuously learn and build impactful solutions.
        </p>

        <div className="mt-9 flex flex-col gap-6 max-[900px]:mt-4 max-[900px]:gap-2">
          <a
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-2xl border border-cyan-300/40 bg-gradient-to-b from-cyan-400/40 via-cyan-300/10 to-white/5 px-6 py-3 text-[15px] font-semibold text-cyan-100 shadow-[0_8px_24px_rgba(34,211,238,0.25)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(34,211,238,0.3)] max-[900px]:mt-4 max-[900px]:text-[14px] max-[900px]:px-5 max-[900px]:py-2"
          >
            Resume
          </a>
          <div className="flex items-center gap-3 max-[900px]:mt-6 max-[900px]:gap-2">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              className="group inline-flex h-15 w-15 items-center justify-center rounded-full border border-white/10 bg-white/5 text-cyan-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:bg-gradient-to-br hover:from-cyan-400/40 hover:via-cyan-300/10 hover:to-white/5 hover:shadow-[0_0_18px_rgba(34,211,238,0.6)] max-[900px]:h-11 max-[900px]:w-11"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
            >
              <svg viewBox="0 0 24 24" className="h-8 w-8 fill-current max-[900px]:h-6 max-[900px]:w-6" aria-hidden="true">
                <path d={link.path} />
              </svg>
            </a>
          ))}
          </div>
        </div>
      </div>

      <div className="relative grid place-items-center max-[900px]:flex max-[900px]:items-center max-[900px]:justify-center">
        <img
          src={`${import.meta.env.BASE_URL}images/doodles%20mixed%20round.png`}
          alt=""
          aria-hidden="true"
          className={`pointer-events-none absolute right-6 top-10 w-[460px] opacity-90 animate-[float_8s_ease-in-out_infinite] max-[1100px]:right-4 max-[1100px]:w-[380px] max-[900px]:right-0 max-[900px]:top-2 max-[900px]:w-full max-[900px]:max-w-[600px] max-[900px]:scale-[1.15] max-[900px]:origin-right ${
            showMan ? '' : 'left-1/2 -translate-x-1/2 right-auto'
          }`}
        />
        <img
          src={`${import.meta.env.BASE_URL}images/Group%202346.png`}
          alt="Developer illustration"
          width="560"
          height="460"
          className={`relative z-10 h-auto right-2 top-10 w-[480px] max-w-full animate-[float_6s_ease-in-out_infinite] max-[1100px]:right-2 max-[1100px]:top-10 max-[1100px]:w-[420px] max-[900px]:right-0 max-[900px]:top-0 max-[900px]:relative max-[900px]:w-full max-[900px]:max-w-[640px] max-[900px]:animate-none max-[900px]:scale-[1.2] max-[900px]:origin-right ${
            showMan ? '' : 'hidden'
          }`}
          onError={() => setShowMan(false)}
        />
      </div>
    </main>
  )
}