function ContactSection() {
  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-[#212a34] px-12 py-16 max-[900px]:px-6 max-[900px]:py-12"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,196,200,0.1),transparent_65%)]" />
      </div>

      <div className="relative z-10 grid w-full grid-cols-[1.05fr_1fr] items-center gap-8 max-[900px]:grid-cols-1">
        <div className="relative z-10">
          <h2 className="text-[44px] font-[var(--display)] font-bold text-white max-[900px]:text-[28px]">
            Certifications <span className="text-cyan-400">and achievements</span>
          </h2>
          <p className="mt-4 w-full text-[20px] leading-8 text-slate-300">
            Milestones that showcase continuous learning, delivery, and impact.
          </p>

          <div className="relative mt-10 flex items-center gap-8 max-[900px]:justify-center max-[900px]:mb-0 max-[900px]:z-0">
            <img
              src={`${import.meta.env.BASE_URL}images/Vector%20189.png`}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute -left-2 -top-6 w-[190px] opacity-50 max-[900px]:w-[140px]"
            />
            <img
              src={`${import.meta.env.BASE_URL}images/Group%202372.png`}
              alt="Illustration"
              className="relative z-10 w-[300px] translate-x-[150px] max-[900px]:hidden"
            />
          </div>
        </div>

        <div className="relative z-20 max-[900px]:-mt-12">
          <div className="pointer-events-none absolute inset-0">
            <img
              src={`${import.meta.env.BASE_URL}images/keyboard.png`}
              alt=""
              aria-hidden="true"
              className="absolute -top-6 right-6 w-[90px] opacity-60 max-[900px]:w-[64px]"
            />
            <img
              src={`${import.meta.env.BASE_URL}images/mail.png`}
              alt=""
              aria-hidden="true"
              className="absolute bottom-4 right-10 w-[70px] opacity-60 max-[900px]:w-[52px]"
            />
          </div>

          <div className="relative overflow-hidden rounded-[28px] border border-white/15 bg-[#24303b] p-7 shadow-[0_24px_50px_rgba(10,16,24,0.4)] backdrop-blur-0">
            <img
              src={`${import.meta.env.BASE_URL}images/Group%202372.png`}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 hidden h-full w-full object-contain opacity-10 max-[900px]:block"
            />

            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-base uppercase tracking-[0.3em] text-cyan-200/70">Spotlight</p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">Core certifications</h3>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/40 text-cyan-200">
                  ★
                </div>
              </div>

              <div className="mt-6 grid gap-4">
                <a
                  href="https://drive.google.com/file/d/1fq9t9IGwhD9QnekbvnaBmYrzhff8opwh/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-white/10 bg-[#1b222b] p-4 transition hover:border-cyan-300/60"
                >
                  <p className="text-lg font-semibold text-white">NPTEL Database Management Systems</p>
                  <p className="mt-1 text-base text-slate-400">Certified</p>
                </a>

                <a
                  href="https://drive.google.com/file/d/1fsa4v6HOwbEKUxw0JsAmfBGDTJ4sGiCd/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-white/10 bg-[#1b222b] p-4 transition hover:border-cyan-300/60"
                >
                  <p className="text-lg font-semibold text-white">Amazon Future Engineer</p>
                  <p className="mt-1 text-base text-slate-400">Python &amp; AI Bootcamp</p>
                </a>

                <a
                  href="https://drive.google.com/file/d/1g7Lb-aAI228uFtyA8T62ogFudDs8vWw0/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-white/10 bg-[#1b222b] p-4 transition hover:border-cyan-300/60"
                >
                  <p className="text-lg font-semibold text-white">Coding Relay Race</p>
                  <p className="mt-1 text-base text-slate-400">6th Place</p>
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
