import { useEffect, useMemo, useState } from 'react'
import { supabase } from '../lib/supabaseClient'

const LOCAL_KEY = 'portfolio_rating_prompt'

const getPromptState = () => {
  try {
    const raw = localStorage.getItem(LOCAL_KEY)
    if (!raw) return { shownAt: 0, submitted: false }
    return JSON.parse(raw) as { shownAt: number; submitted?: boolean }
  } catch {
    return { shownAt: 0, submitted: false }
  }
}

const setPromptState = (submitted: boolean = false) => {
  try {
    localStorage.setItem(LOCAL_KEY, JSON.stringify({ shownAt: Date.now(), submitted }))
  } catch {
    // ignore storage errors
  }
}

function RatingPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [rating, setRating] = useState<number | null>(null)
  const [hoverRating, setHoverRating] = useState<number | null>(null)
  const [suggestion, setSuggestion] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const canShow = useMemo(() => {
    const { shownAt, submitted } = getPromptState()
    if (submitted) return false
    const dayMs = 24 * 60 * 60 * 1000
    return Date.now() - shownAt > dayMs
  }, [])

  useEffect(() => {
    if (!canShow) return

    let hasTriggered = false
    let timerId: number | undefined

    const handleScroll = () => {
      if (hasTriggered) return
      if (window.scrollY < 180) return
      hasTriggered = true
      const delay = 1 * 60 * 1000 + Math.floor(Math.random() * 60 * 1000)
      timerId = window.setTimeout(() => {
        setIsOpen(true)
        setPromptState()
      }, delay)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (timerId) window.clearTimeout(timerId)
    }
  }, [canShow])

  const submitFeedback = async () => {
    if (!rating) {
      setError('Please select a rating.')
      return
    }

    if (!supabase) {
      setError('Supabase is not configured yet.')
      return
    }

    setSubmitting(true)
    setError('')

    const { error: insertError } = await supabase
      .from('portfolio_feedback')
      .insert({
        rating,
        suggestion: suggestion.trim() || null,
        page_url: window.location.href,
      })

    setSubmitting(false)

    if (insertError) {
      setError('Failed to submit. Please try again.')
      return
    }

    setSubmitted(true)
    setPromptState(true)
    window.setTimeout(() => {
      setIsOpen(false)
      if (window.location.hash === '#feedback') {
        window.history.replaceState(null, '', window.location.pathname + window.location.search)
      }
    }, 1200)
  }

  useEffect(() => {
    const handleHash = () => {
      const { submitted } = getPromptState()
      if (window.location.hash !== '#feedback') return

      if (submitted) {
        setSubmitted(true)
        setIsOpen(true)
        window.setTimeout(() => {
          setIsOpen(false)
          window.history.replaceState(null, '', window.location.pathname + window.location.search)
        }, 1200)
        return
      }

      setIsOpen(true)
      setPromptState()
    }

    handleHash()
    window.addEventListener('hashchange', handleHash)
    return () => window.removeEventListener('hashchange', handleHash)
  }, [])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-6">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#1b222b] p-6 shadow-[0_30px_60px_rgba(0,0,0,0.45)]">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-cyan-200/70">Feedback</p>
            <h3 className="mt-2 text-xl font-semibold text-white">
              Please give me suggestions or ratings so I can improve my portfolio.
            </h3>
          </div>
          <button
            type="button"
            onClick={() => {
              setIsOpen(false)
              if (window.location.hash === '#feedback') {
                window.history.replaceState(null, '', window.location.pathname + window.location.search)
              }
            }}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-slate-200 hover:border-cyan-300 hover:text-cyan-200"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {!submitted ? (
          <>
            <div className="mt-5 flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((value) => {
                const isActive = (hoverRating ?? rating ?? 0) >= value
                return (
                  <button
                    key={value}
                    type="button"
                    onMouseEnter={() => setHoverRating(value)}
                    onMouseLeave={() => setHoverRating(null)}
                    onClick={() => setRating(value)}
                    className={`text-2xl transition ${isActive ? 'text-cyan-300' : 'text-slate-500'}`}
                    aria-label={`${value} star rating`}
                  >
                    ★
                  </button>
                )
              })}
            </div>

            <textarea
              value={suggestion}
              onChange={(event) => setSuggestion(event.target.value)}
              placeholder="Your suggestion (optional)"
              rows={4}
              className="mt-4 w-full rounded-xl border border-white/10 bg-[#11161c] px-4 py-3 text-sm text-slate-200 outline-none transition focus:border-cyan-400/60"
            />

            {error ? <p className="mt-3 text-sm text-rose-300">{error}</p> : null}

            <button
              type="button"
              onClick={submitFeedback}
              disabled={submitting}
              className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-cyan-500 px-4 py-3 text-sm font-semibold text-[#0b2b33] transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting ? 'Submitting...' : 'Submit feedback'}
            </button>
          </>
        ) : (
          <div className="mt-6 rounded-xl border border-white/10 bg-[#11161c] p-4 text-center text-sm text-slate-200">
            Thanks for your feedback!
          </div>
        )}
      </div>
    </div>
  )
}

export default RatingPopup
