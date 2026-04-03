import { useEffect, useRef, useState } from 'react'

function About() {
  const [inView, setInView] = useState(false)
  const sectionRef = useRef<HTMLElement | null>(null)

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

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`scroll-mt-[94px] relative w-full bg-[#1f2937] px-12 py-16 transition-all duration-700 max-[900px]:px-6 max-[900px]:py-12 ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      }`}
    >
      <div className="pointer-events-none absolute inset-0 opacity-25"></div>

      <div className="grid min-h-[80vh] w-full grid-cols-[1fr_1fr] items-center gap-2 max-[900px]:min-h-0 max-[900px]:grid-cols-[1fr] max-[900px]:gap-6 max-[900px]:text-left">
        <div className="relative max-w-[520px] pt-6 pb-10 max-[900px]:row-start-1 max-[900px]:max-w-full max-[900px]:pr-0 max-[900px]:pt-4 max-[900px]:pb-6">
          <div className="pointer-events-none absolute inset-0">
            <img
              src="images/Vector%20141.png"
              alt=""
              aria-hidden="true"
              className="absolute -top-4 left-0 w-[45px] opacity-80 max-[900px]:top-0 max-[900px]:w-[22px]"
            />
            <img
              src="images/lightbulb.png"
              alt=""
              aria-hidden="true"
              className="absolute top-2 right-[35px] w-[70px] opacity-80 max-[900px]:right-4 max-[900px]:w-[26px]"
            />
            <img
              src="images/Vector%20186.png"
              alt=""
              aria-hidden="true"
              className="absolute -bottom-[30px] left-1/2 w-[150px] -translate-x-1/2 opacity-70 max-[900px]:bottom-0 max-[900px]:w-[56px]"
            />
          </div>
          <h2 className="text-[48px] font-[var(--display)] text-white max-[900px]:text-[40px]">
            About <span className="text-cyan-400">me</span>
          </h2>
          <p className="mt-5 max-w-[500px] text-[18px] leading-7 text-slate-300 max-[900px]:text-[14px] max-[900px]:leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis...
          </p>
        </div>

        <div className="relative flex w-full items-center justify-center max-[900px]:hidden">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-6 top-4 h-6 w-6 rounded-full border border-cyan-400/40 max-[900px]:hidden" />
            <div className="absolute right-8 top-6 h-2 w-2 rounded-full bg-cyan-300/50" />
          </div>
          <img
            src="images/doodle%20items.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 m-auto w-[620px] max-w-full opacity-35 max-[900px]:w-[240px]"
          />
          <img
            src="images/Group%2062.png"
            alt="Working at desk illustration"
            className="relative z-10 w-[600px] max-w-full max-[900px]:w-[260px]"
          />
        </div>
      </div>
    </section>
  )
}

export default About
