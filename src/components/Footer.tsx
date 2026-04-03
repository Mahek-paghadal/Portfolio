const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Skills', href: '#skills' },
  { label: 'Works', href: '#works' },
]

const contactItems = [
  {
    label: 'mahekpaghadal@gmail.com',
    href: 'mailto:mahekpaghadal@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
        <path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm0 2v.2l8 5 8-5V7H4Zm16 10V9.3l-7.4 4.6a1.5 1.5 0 0 1-1.6 0L4 9.3V17h16Z" />
      </svg>
    ),
  },
  {
    label: '+91 75676 66851',
    href: 'tel:+917567666851',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
        <path d="M6.6 10.8a12 12 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24 9.7 9.7 0 0 0 3.1.5 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.6 21 3 13.4 3 4a1 1 0 0 1 1-1h3.6a1 1 0 0 1 1 1 9.7 9.7 0 0 0 .5 3.1 1 1 0 0 1-.24 1L6.6 10.8Z" />
      </svg>
    ),
  },
  {
    label: 'Surendranagar, Gujarat, India',
    href: 'https://maps.google.com/?q=Surendranagar,+Gujarat,+India',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
        <path d="M12 2a7 7 0 0 1 7 7c0 4.2-4.9 10.4-6.4 12.2a1 1 0 0 1-1.2 0C9.9 19.4 5 13.2 5 9a7 7 0 0 1 7-7Zm0 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
      </svg>
    ),
  },
]

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/your-username',
    path: 'M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.23.68-.5 0-.25-.01-1.07-.02-1.94-2.78.62-3.37-1.23-3.37-1.23-.45-1.2-1.1-1.52-1.1-1.52-.9-.64.07-.63.07-.63 1 .07 1.52 1.05 1.52 1.05.9 1.58 2.36 1.12 2.94.86.09-.66.35-1.12.64-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.32.1-2.75 0 0 .84-.28 2.75 1.05.8-.23 1.66-.34 2.52-.34s1.72.12 2.52.34c1.9-1.33 2.75-1.05 2.75-1.05.55 1.43.2 2.49.1 2.75.64.72 1.03 1.64 1.03 2.76 0 3.94-2.34 4.8-4.57 5.06.36.32.68.95.68 1.92 0 1.39-.01 2.51-.01 2.85 0 .28.18.6.69.5A10.03 10.03 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/your-username',
    path: 'M20.45 2H3.55C2.7 2 2 2.7 2 3.56v16.88C2 21.3 2.7 22 3.55 22h16.9c.86 0 1.55-.7 1.55-1.56V3.56C22 2.7 21.3 2 20.45 2ZM8.2 19H5.5V9.75h2.7V19ZM6.85 8.6a1.57 1.57 0 1 1 0-3.14 1.57 1.57 0 0 1 0 3.14ZM19 19h-2.7v-4.5c0-1.07-.02-2.45-1.5-2.45-1.5 0-1.73 1.17-1.73 2.37V19h-2.7V9.75h2.6v1.26h.04c.36-.68 1.25-1.4 2.58-1.4 2.76 0 3.27 1.82 3.27 4.2V19Z',
  },
  {
    label: 'LeetCode',
    href: 'https://leetcode.com/your-username',
    path: 'M14.35 3.3a1 1 0 0 1 1.42 0l2.83 2.83a1 1 0 0 1-1.42 1.42l-2.12-2.12-5.4 5.4a3 3 0 0 0 0 4.24l2.22 2.22a3 3 0 0 0 4.24 0l2.12-2.12a1 1 0 1 1 1.42 1.42l-2.83 2.83a5 5 0 0 1-7.07 0l-2.22-2.22a5 5 0 0 1 0-7.07l5.4-5.4-2.12-2.12a1 1 0 0 1 0-1.42Z',
  },
]

function Footer() {
  return (
    <footer
      id="footer"
      className="relative w-full overflow-hidden bg-[#141a24] px-16 py-20 text-slate-200 max-[900px]:px-6"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,196,200,0.14),transparent_65%)]" />
      </div>

      <div className="relative z-10 grid w-full grid-cols-3 gap-12 max-[900px]:grid-cols-1">
        <div>
          <h3 className="text-[26px] font-semibold text-cyan-300">Quick Links</h3>
          <ul className="mt-7 space-y-4 text-[18px] text-slate-300">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a className="transition-colors hover:text-cyan-300" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[26px] font-semibold text-cyan-300">Contact Info</h3>
          <ul className="mt-7 space-y-4 text-[18px] text-slate-300">
            {contactItems.map((item) => (
              <li key={item.label}>
                <a
                  className="flex items-start gap-3 transition-colors hover:text-cyan-300"
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <span className="mt-1 text-slate-400">{item.icon}</span>
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[26px] font-semibold text-cyan-300">Connect With Me</h3>
          <div className="mt-6 flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="group inline-flex h-15 w-15 items-center justify-center rounded-full border border-white/10 bg-white/5 text-cyan-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:bg-gradient-to-br hover:from-cyan-400/40 hover:via-cyan-300/10 hover:to-white/5 hover:shadow-[0_0_18px_rgba(34,211,238,0.6)]"
              >
                <svg viewBox="0 0 24 24" className="h-8 w-8 fill-current" aria-hidden="true">
                  <path d={link.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-14 border-t border-white/10 pt-7 text-center text-[15px] text-slate-400">
        © 2025 Mahek Paghadal. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
